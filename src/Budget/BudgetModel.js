const mongoose=require("mongoose");

const BudgetSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    budgetAmount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model("Budget",BudgetSchema)