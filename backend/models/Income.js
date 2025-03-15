const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    icon: {
        type: String,
    },
    source: {    // example salary, freelance, etc
        type: String,
        required: true, 
    },
    amount: {
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    }
}, {timestamps: true});

module.exports = mongoose.model('Income', IncomeSchema);