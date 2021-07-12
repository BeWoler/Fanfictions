const jwt = require("jsonwebtoken");

const tokenModel = require("../models/token-model");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, "secret key", { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, "refresh secret key", {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAcessToken(token) {
    try {
      const userData = jwt.verify(token, "secret key");
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, "refresh secret key");
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await tokenModel.remove({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
