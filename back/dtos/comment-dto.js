module.exports = class CommentDto {
  author;
  id;
  text;
  fanfic;

  constructor(model) {
      this.author = model.author;
      this.id = model.id;
      this.text = model.text;
      this.fanfic = model.fanfic;
  } 
}