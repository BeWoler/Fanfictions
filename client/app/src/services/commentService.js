import api from "../http";

export default class CommentService {
  static async comment(author, text, fanfic) {
    return api.post("/comment", { author, text, fanfic });
  }

  static async fetchComment({fanfic}) {
    return api.post("/comments", {fanfic});
  }
}
