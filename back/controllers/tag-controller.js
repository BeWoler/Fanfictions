const tagService = require("../service/tags-service.js");

class TagController {
  async getTags(req, res) {
    try {
      const tags = await tagService.getAllTags();
      return res.json(tags);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new TagController();