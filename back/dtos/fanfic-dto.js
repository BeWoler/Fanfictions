module.exports = class FanficDto {
  title;
  description;
  id;
  author;
  text;
  tags;
  categories;
  fandoms;

  constructor(model) {
      this.title = model.title;
      this.description = model.description;
      this.id = model.id;
      this.author = model.author;
      this.text = model.text;
      this.tags = model.tags;
      this.categories = model.categories;
      this.fandoms = model.fandoms;
  } 
}