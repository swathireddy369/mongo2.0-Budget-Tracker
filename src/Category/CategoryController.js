const Category = require("./CategoryModel")
const getCategories = async (req, res) => {
    const allCat = await Category.find({}).select({ "_id": 0, title: 1 });
    res.status(200).send(allCat);
}
const createCategory = async (req, res) => {
    const data = req.body;
    const cat = await Category.create(data);
    res.status(200).json(cat);
}
module.exports = { createCategory, getCategories };