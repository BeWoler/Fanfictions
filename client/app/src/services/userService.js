import api from "../http";

export default class UserService {
  static fetchUsers() {
    return api.get("/users");
  }

  static fetchOneUser(username) {
    return api.get("/user", {username});
  }
}
