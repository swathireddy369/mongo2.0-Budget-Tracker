const {createExpense,getExpenses,getExpenseByCategory}=require("./ExpenseController");
const expenseRoutes= (server)=>{
    server.get("/api/expense",getExpenses)
server.post("/api/expense",createExpense)
server.get("/api/expense/byCategory",getExpenseByCategory)
}
module.exports=expenseRoutes;