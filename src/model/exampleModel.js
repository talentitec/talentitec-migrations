const mongoose = require('mongoose');

//OS CAMPOS createAt, updateAt E company_id SÃO FIXOS E SÃO OBRIGATÓRIOS EM UMA MODEL

const ExampleSchema = new mongoose.Schema({
    createAt: { 
        type: Date,
        required: true
    }, 
    updateAt: {
        type: Date,
        required: true
    },
    exampleName: { 
        type: String,
        required: true
    }, 
    example_id: { 
        type: String
    }, 
    exampleDescription: { 
        type: String
    }, 
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Example', ExampleSchema);