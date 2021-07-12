const CommentDto = require("../dtos/comment-dto.js");
const commentModel = require("../models/comment-model");

class CommentService {
  async commentCreate(author, text, fanfic) {
    const comment = await commentModel.create({
      author,
      text,
      fanfic
    });
    const commentDto = new CommentDto(comment);
    return {
      comment: commentDto,
    };
  }

  async getComments(fanfic) {
    const comments = await commentModel.find({fanfic: fanfic}).exec();
    return comments;
  }
}

module.exports = new CommentService();
