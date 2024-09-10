const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    createAt: { 
        type: Date,
        required: true
    }, 
    updateAt: {
        type: Date,
        required: true
    }, 
    active: {
        type: Boolean,
        default: true
    },
    roleName: {
        type: String,
        required: true
    },
    role_description: String,
    soft_skills: [
        {
            soft_skill_name: String,
        }
    ],
    hard_skills: [
        {
            hard_skill_name: String,
        }
    ],
    responsibilities: [
        {
            item: String,
        }
    ],
    sectorName: { 
        type: String
    },
    sector_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sector',
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Role', RoleSchema);