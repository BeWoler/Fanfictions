const FanficDto = require("../dtos/fanfic-dto.js");
const fanficModel = require("../models/fanfic-model");

class FanficService {
  async fanficCreate(
    title,
    author,
    description,
    tags,
    categories,
    fandoms,
    text
  ) {
    const fanfic = await fanficModel.create({
      title,
      author,
      description,
      tags,
      categories,
      fandoms,
      text
    });
    const fanficDto = new FanficDto(fanfic);

    return {
      fanfic: fanficDto,
    };
  }

  async getAllFanfics() {
    const fanfics = await fanficModel.find();
    return fanfics;
  }

  async getOneUserFanfics(author) {
    const fanfic = await fanficModel.findOne({ author: author });
    return fanfic;
  }

  async getFanficById(_id) {
    const fanfic = await fanficModel.findOne({_id});
    console.log(fanfic)
    return fanfic;
  }
} 

module.exports = new FanficService();
