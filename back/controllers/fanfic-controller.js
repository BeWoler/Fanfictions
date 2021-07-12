const fanficService = require("../service/fanfic-service.js");

class FanficController {
  async getAllFanfics(req, res) {
    try {
      const fanfics = await fanficService.getAllFanfics();
      return res.json(fanfics);
    } catch (e) {
      next(e);
    }
  }

  async getAllUserFanfics(req, res) {
    try {
      const {author} = req.body;
      const fanfics = await fanficService.getOneUserFanfics(author);
      return res.json(fanfics)
    } catch (e) {
      console.log(e);
    }
  }

  async fanficById(req, res) {
    try {
      const {_id} = req.body;
      const fanfic = await fanficService.getFanficById(_id);
      console.log(fanfic)
      return res.json(fanfic)
    } catch (e) {
      console.log(e);
    }
  }

  async createFanfic(req, res, next) {
    try {
      const {
        title,
        description,
        author,
        text,
        tags,
        categories,
        fandoms,
      } = req.body;
      const fanficData = await fanficService.fanficCreate(
        title,
        description,
        author,
        text,
        tags,
        categories,
        fandoms,
      );
      return res.json(fanficData);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FanficController();
