const {createCategory,getCategories} = require("./CategoryController")
const categoryRoutes = (server) => {
  server.get("/api/category", getCategories)
  server.post("/api/category", createCategory)
}
module.exports = categoryRoutes;
