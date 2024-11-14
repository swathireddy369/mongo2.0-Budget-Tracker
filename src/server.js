const bodyParser = require("body-parser");
const express= require("express");
const mongoose=require("mongoose");
const server=express();
const PORT=process.env.port || 5000;
server.use(bodyParser.json());



mongoose.Promise=global.Promise;
const URI=process.env.URI || "mongodb://127.0.0.1:27017/Budgets"
const mongodb=mongoose.connect(URI).then(()=>{
console.log("mongodb is running ");

}).catch((err)=>{
    console.log("mongodb is not running ");
});
const budgetRoutes= require("./Budget/routes");
budgetRoutes(server);

const categoryRoutes= require("./Category/routes");
categoryRoutes(server);

const expenseRoutes=require("./Expense/routes");
expenseRoutes(server);

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})