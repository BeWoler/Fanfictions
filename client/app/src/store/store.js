import { makeAutoObservable } from "mobx";
import AuthService from "../services/authService";
import CommentService from "../services/commentService";
import axios from "axios";
import fanficService from "../services/fanficService.js";

export default class Store {
  user = {};
  comment;
  fanfics;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setComment(comment) {
    this.comment = comment;
  }

  setFanfics(_id) {
    this.fanfics = _id;
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("user", email);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async registration(email, password, username) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        username
      );
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({});
      console.log(response);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get("http://localhost:3001/api/refresh", {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  async comments(author, text, fanfic) {
    try {
      const response = await CommentService.comment(author, text, fanfic);
      console.log(response);
      this.setComment(response.data.comment);
    } catch (error) {
      console.log(error);
    }
  }

  async getCommentsById({ fanfic }) {
    try {
      const response = await CommentService.fetchComment({ fanfic });
      console.log(response.data);
      this.setComment(response.data.comment);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async createFanfic(
    title,
    author,
    description,
    tags,
    categories,
    fandoms,
    text
  ) {
    try {
      const response = await fanficService.create(
        title,
        author,
        description,
        tags,
        categories,
        fandoms,
        text
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  async getAllFanfics() {
    try {
      const response = await fanficService.getAllFanfic();
      console.log(response);
      this.setFanfics(response.data.fanfic);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserFanfics(author) {
    try {
      const response = await fanficService.getFanficByAuthor(author);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async getFanficById({ _id }) {
    try {
      const response = await fanficService.getFanficById({ _id });
      this.setFanfics(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async pushFanficInfo(_id) {
    localStorage.setItem("_id", _id);
    this.setFanfics(_id);
  }
}
