const commentService = require("../service/comment-service.js");

class CommentController {
  async getAllComments(req, res) {
    try {
      const {fanfic} = req.body;
      const comments = await commentService.getComments(fanfic);
      console.log(comments);
      return res.json(comments);
    } catch (e) {
      next(e);
    }
  }

  async createComment(req, res, next) {
    try {
      const {
        author,
        text,
        fanfic
      } = req.body;
      const commentData = await commentService.commentCreate(
        author,
        text,
        fanfic
      );
      return res.json(commentData);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CommentController();