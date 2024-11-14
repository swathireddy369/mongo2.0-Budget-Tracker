const Budget = require("./BudgetModel")
const Expense=require("../Expense/ExpenseModel")

const getAllBudget = async(req,res)=>{
    const allBudgets=await Budget.find({}).select({_id:0,title:1,budgetAmount:1})
    res.status(200).json(allBudgets);
}
const createBudget = async (req, res) => {
    const data  = req.body;
    const budget = await Budget.create(data);
    res.status(200).json(budget);
}

const getBudgetSummary = async(req,res)=>{
    const {id}=req.params;
    try{
        const {budgetAmount}=await Budget.findById(id);
        const expenses=await Expense.aggregate([{
            $group:{_id:1,"ExpenseAmount":{$sum:"$amount"}}
        }])
        res.status(200).json(budgetAmount-expenses[0].ExpenseAmount);
    }
    catch(err){
      console.log("no summary available ");
    }
}
module.exports = {createBudget,getAllBudget,getBudgetSummary};