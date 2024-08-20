const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const EmployeeSchema = new mongoose.Schema({
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
    user_name: { 
        type: String,
        required: true
    }, 
    user_email: { 
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_phone: String,
    user_avatar: String,
    tokenWeb: String,
    tokenMobile: String,
    active: {
        type: Boolean,
        default: true
    },
    birth_date: Date,
    admission_date: Date,
    nationality: String,
    nationality_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nationality',
    },
    naturalness: String,
    naturalness_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Naturalness',
    },
    breed: String,
    breed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Breed',
    },
    civil_status: String,
    civil_status_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CivilStatus',
    },
    scholarity: String,
    scholarity_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scholarity',
    },
    working_day: {
        start_one: String,
        finish_one: String,
        start_two: String,
        finish_two: String,
    },
    sector: String,
    sector_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sector',
    },
    role: String,
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    },
    seniority: String,
    seniority_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seniority',
    },
    wayWorking: String,
    wayWorking_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WayWorking',
    },
    salary: Number,
    documents:[
        {
            document_name: String,
            document_number: String,
        }
    ],
    address_postal_code: String,
    addres_street: String,
    address_number: String,
    address_complement: String,
    address_neighborhood: String,
    address_city: String,
    address_state: String,
    address_country: String,
    emergency_contact: [
        {
            name: String,
            number: String,
            emergency_contact: String,
            emergency_contact_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'GeneralData',
            }
        }
    ],
    dependents: [
        {
            name: String,
            document_number: String,
            dependents_type: String,
            dependents_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'GeneralData',
            }
        }
    ],
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);