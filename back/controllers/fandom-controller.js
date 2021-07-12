const fandomService = require("../service/fandoms-service.js");

class FandomController {
  async getFandoms(req, res) {
    try {
      const fandoms = await fandomService.getAllFandoms();
      return res.json(fandoms);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FandomController();