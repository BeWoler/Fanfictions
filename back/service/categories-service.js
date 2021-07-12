const categoriesModel = require('../models/categories-model');
const CategoryDto = require('../dtos/category-dto');

class CategoriesService {
  async addCategory(category) {
    const newCategory = await categoriesModel.findOne({category});
    if(newCategory) {
      throw new Error('Category already exists');
    }
    const fanficCategory = await categoriesModel.create({category});
    const categoryDto = new CategoryDto(fanficCategory)

    return {category: categoryDto}
  }

  async getAllCategories() {
    const categories = await categoriesModel.find();
    return categories;
  }
}

module.exports = new CategoriesService();