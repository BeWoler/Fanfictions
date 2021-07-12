const Router = require("express").Router;
const userController = require("../controllers/user-controller.js");
const fandomController = require("../controllers/fandom-controller.js");
const tagController = require("../controllers/tag-controller.js");
const categoryController = require("../controllers/category-controller.js");
const fanficController = require("../controllers/fanfic-controller.js");
const commentController = require("../controllers/comment-controller.js");
const { body } = require("express-validator");

process.setMaxListeners(0);
const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 16 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", userController.getUsers);
router.get("/user", userController.getUser);

router.get("/tags", tagController.getTags);
router.get("/fandoms", fandomController.getFandoms);
router.get("/categories", categoryController.getCategories);

router.post("/fanfic", fanficController.createFanfic);
router.get("/fanfics", fanficController.getAllFanfics);
router.get("/userFanfics", fanficController.getAllUserFanfics);
router.post("/fanficById", fanficController.fanficById);

router.post("/comment", commentController.createComment);
router.post("/comments", commentController.getAllComments);

module.exports = router;
