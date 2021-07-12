const fandomsModel = require('../models/fandoms-model');
const FandomDto = require('../dtos/fandom-dto');

class FandomsService {
  async addFandom(fandom) {
    const newFandom = await fandomsModel.findOne({fandom})
    if (newFandom) {
        throw new Error('Fandom already exists');
    }
    const fanficFandom = await tagsModel.create({fandom})
    const fandomDto = new FandomDto(fanficFandom);

    return {fandom: fandomDto};
  }

  async getAllFandoms() {
    const fandoms = await fandomsModel.find();
    return fandoms;
  }
}

module.exports = new FandomsService();