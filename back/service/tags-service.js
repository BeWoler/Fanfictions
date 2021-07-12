const tagsModel = require('../models/tags-model');
const TagDto = require('../dtos/tag-dto.js');

class TagsService {
  async addTags(tag) {
    const newTag = await tagsModel.findOne({tag})
    if (newTag) {
        throw new Error('Tag already exists');
    }
    const fanficTag = await tagsModel.create({tag})
    const tagDto = new TagDto(fanficTag);

    return {tag: tagDto};
  }

  async getAllTags() {
    const tags = await tagsModel.find();
    return tags;
  }
}

module.exports = new TagsService();