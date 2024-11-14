const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    budgetId: {
        type: Schema.Types.ObjectId,
        ref: "Budget",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Expense",expenseSchema)