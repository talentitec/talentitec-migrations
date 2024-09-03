const mongoose = require('mongoose');

const RecruitmentSchema = new mongoose.Schema({
    createAt: { 
        type: Date,
        required: true
    }, 
    updateAt: {
        type: Date,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    },
    title: { 
        type: String,
        required: true
    }, 
    registration_by: { 
        type: Date
    }, 
    contract_period: { 
        type: Date
    },
    amount: Number,
    number_candidate: {
        type: Number,
        default: 0
    },
    hired_candidates: {
        type: Number,
        default: 0
    },
    publish: Boolean,
    draft: Boolean,
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Recruitment', RecruitmentSchema);