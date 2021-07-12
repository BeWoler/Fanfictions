import api from "../http";

export default class TypesService {
  static getFandoms() {
    return api.get("/fandoms");
  }

  static getTags() {
    return api.get("/tags");
  }

  static getCategories() {
    return api.get("/categories");
  }
}