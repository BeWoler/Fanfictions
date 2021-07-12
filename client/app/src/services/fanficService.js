import api from "../http";

export default class FanficService {
  static async create(
    title,
    description,
    author,
    text,
    tags,
    categories,
    fandoms
  ) {
    return api.post("/fanfic", {
      title,
      description,
      author,
      text,
      tags,
      categories,
      fandoms,
    });
  }

  static getFanficByAuthor(author) {
    return api.get("/userFanfics", { author });
  }

  static getFanficById({_id}) {
    return api.post("/fanficById", {_id });
  }

  static getAllFanfic() {
    return api.get("/fanfics");
  }

}
