const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service.js");
const tokenService = require("./token-service.js");
const UserDto = require("../dtos/user-dto.js");
const userModel = require("../models/user-models");
const ApiError = require("../exceptions/api-error.js");

class UserService {
  async registration(email, password, username) {
    const candidateEmail = await userModel.findOne({ email });
    const candidateUserName = await userModel.findOne({ username });
    if (candidateEmail) {
      throw ApiError.BadRequest("Email already exists");
    }
    if (candidateUserName) {
      throw ApiError.BadRequest("Username already exists");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await userModel.create({
      email,
      password: hashPassword,
      username,
      activationLink,
    });
    await mailService.sendActivationMail(
      email,
      `http://localhost:3001/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink) {
    const user = await userModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Incorrect link");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("Email does not exist");
    }
    const isPassEqu = await bcrypt.compare(password, user.password);
    if (!isPassEqu) {
      throw ApiError.BadRequest("Incorrect password");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnathorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    console.log(tokenFromDb)
    if (!userData || !tokenFromDb) {
      throw ApiError.UnathorizedError();
    } 

    const user = await userModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async getAllUsers() { 
    const users = await userModel.find();
    return users;
  }

  async getOneUser(username) {
    const user = await userModel.findOne({ username: username });
    return user;
  }
}

module.exports = new UserService();
