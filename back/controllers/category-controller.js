const categoryService = require("../service/categories-service.js");

class CategoryController {
  async getCategories(req, res) {
    try {
      const categories = await categoryService.getAllCategories();
      return res.json(categories);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CategoryController();