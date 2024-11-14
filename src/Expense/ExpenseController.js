const Expense = require("./ExpenseModel")
const Category=require("../Category/CategoryModel")
const createExpense = async (req, res) => {
    const data = req.body
    const exp = await Expense.create(data);
    res.status(202).json(exp);
}
const getExpenses = async (req, res) => {
    const allExpenses = await Expense.find({}).populate({
        path: "budgetId",
        model: "Budget",
        select: { _id: 0, title: 1, budgetAmount: 1 }
    }).populate({
        path: "categoryId",
        model: "Category",
        select: { _id: 0, title: 1 }
    });
    res.status(200).json(allExpenses);
}
const getExpenseByCategory = async (req, res) => {
    try {
        const exp = await Expense.aggregate([
            {
            $group: {
                _id: "$categoryId",
                Amount: { $sum: "$amount" }
            },

        },
        { $sort: { Amount: -1 } }]);
        await Category.populate(exp,{
            path:"_id",
            model:"Category",
            select:{
                _id:0,title:1
            }
        });
        var result=[];
        exp.map((item,i)=>{
            result.push({"cat": item._id.title,"amount":item.Amount
            })
        })
        res.status(202).json(result);
    }
    catch (err) {
        console.log(err);

    }

}
module.exports = { createExpense, getExpenses, getExpenseByCategory };