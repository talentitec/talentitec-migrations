const mongoose = require('mongoose');

const RecruitmentRequirementSchema = new mongoose.Schema({
    way_working: [
        {
            way_working_name: String,
            way_working_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'WayWorking'
            },
        }
    ],
    way_working_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WayWorking'
    },
    gender: [
        {
            gender_name: String,
            gender_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Gender'
            },
        }
    ],
    gender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gender'
    },
    language: [
        {
            language_name: String,
            language_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Language'
            },
        }
    ],
    language_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language'
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('RecruitmentRequirement', RecruitmentRequirementSchema);