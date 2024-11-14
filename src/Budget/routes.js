const {createBudget,getAllBudget,getBudgetSummary} = require("./BudgetController")

const budgetRoutes = (server) => {
  server.get("/api/budget", getAllBudget)
  server.post("/api/budget", createBudget)
  server.get("/api/budget/:id",getBudgetSummary)
}

module.exports = budgetRoutes;
