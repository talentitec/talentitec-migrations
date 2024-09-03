const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
    createAt: { 
        type: Date,
        required: true
    }, 
    updateAt: {
        type: Date,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    user_name: String,
    user_avatar: String,
    content: String,
    media: [
        {
            url: String,
        }
    ],
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Feed', FeedSchema);