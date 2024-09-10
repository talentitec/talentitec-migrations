const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema({
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
    sectorName: {
        type: String,
        required: true
    },  
    roleResponsibleSector: { 
        type: String
    },
    role_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    },
    upperSector: { 
        type: String,
    },
    upper_sector_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sector',
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Sector', SectorSchema);