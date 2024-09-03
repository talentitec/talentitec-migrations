const mongoose = require('mongoose');


const BirthdaySchema = new mongoose.Schema({
    createAt: { 
        type: Date,
        required: true
    }, 
    updateAt: {
        type: Date,
        required: true
    },
    month_num: {
        type: Number,
        required: true
    },
    month_str: {
        type: String,
        required: true
    },
    type_birthday: {
        type: String,
        required: true
    },
    sector_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sector',
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    employee_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Birthday', BirthdaySchema);