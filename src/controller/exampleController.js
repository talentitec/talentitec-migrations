const Example = require('../model/exampleModel');
const FormatDate = require('../function/formatDate');
const Moment = require('moment-timezone');
//const clientRedis = require('../config/redis');
const Yup = require('yup');

module.exports = { 

    async store(req, res) {
        
        const schema = Yup.object({
            exampleName: Yup.string().required()
        });

        if (!(await schema.isValid(req.body)))
            return res.status(400).json({ success: false, message: "Campos obrigatórios não foram informados!" });

        const createAt = FormatDate.formatDate(new Date());
        const updateAt = FormatDate.formatDate(new Date());
        const exampleName = req.body.exampleName.trim();
        const exampleDescription = req.body.exampleDescription;
        const company_id = req.company_id;

        console.log(createAt)

        try {

            const responseExample = await Example.create({
                createAt,
                updateAt,
                exampleName,
                exampleDescription,
                company_id
            });

            if(!responseExample)
                return res.status(400).json({ success: false, message: "Falha ao criar o exemplo!" });

            return res.status(200).json({ success: true, message: "Exemplo cadastrado com sucesso!" });

        } catch (error) {
            console.log(`Erro: ${error}`);
            return res.status(400).json({ success: false, message: "Falha ao criar exemplo!" });
        }
    },

    async index(req, res) {

        const company_id = req.company_id;
        
        try {

            if(req.query.example){
                
                const responseExample = await Example.find(
                    { company_id, example_id: req.query.example },
                    { createAt: 0, updateAt: 0, company_id: 0, __v: 0 }
                    ).sort({ exampleName: 1 });
        
                if (!responseExample)
                    return res.status(400).json({ message: "Não foi possível listar os exemplos!" });
                    
                return res.status(200).json({ success: true, message: responseExample });
            }
            
            const responseExample = await Example.find(
                { company_id },
                { createAt: 0, updateAt: 0, company_id: 0, __v: 0 }
                ).sort({ exampleName: 1 });
    
            if (!responseExample)
                return res.status(400).json({ message: "Não foi possível listar os exemplos!" });
    
            return res.status(200).json({ success: true, message: responseExample });

        } catch (error) {
            console.log(`Erro: ${error}`)
            return res.status(400).json({ success: false, message: "Falha ao listar exemplo!" });
        }
    },

    async show(req, res) {

        const _id = req.params.id;
        const company_id = req.company_id;

        try {

            const responseExample = await Example.findOne({ _id, company_id }, { createAt: 0, updateAt: 0, company_id: 0, __v: 0 });

            if (!responseExample)
                return res.status(400).json({ message: "Não foi possível listar o exemplo!" });

            return res.status(200).json({ success: true, message: responseExample });

        } catch (error) {
            console.log(`Erro: ${error}`)
            return res.status(400).json({ success: false, message: "Falha ao listar exemplo!" });
        }
    },

    async update(req, res) {

        const schema = Yup.object({
            exampleName: Yup.string().required()
        });

        if (!(await schema.isValid(req.body)))
            return res.status(400).json({ success: false, message: "Campos obrigatórios não foram preenchidos!" });

        const updateAt = Moment().tz("America/Sao_Paulo").format();
        const exampleName = req.body.exampleName.trim();
        const exampleDescription = req.body.exampleDescription;
        const company_id = req.company_id;
        const _id = req.params.id;

        try {
  
            const responseExample = await Example.findOneAndUpdate({ _id, company_id }, {
                updateAt,
                exampleName,
                exampleDescription
            });

            if(!responseExample)
                return res.status(400).json({ success: false, message: "Falha ao atualizar o exemplo!" });
        
            return res.status(200).json({ success: true, message: "Exemplo atualizado com sucesso!" });
            
        } catch (error) {

            console.log(`Erro: ${error}`)

            return res.status(400).json({ success: false, message: "Falha ao atualizar exemplo!" });
        }
    },

    async destroy(req, res) {

        const _id = req.params.id;
        const company_id = req.company_id;
        
        try {
            
            const responseExample = await Example.findOneAndDelete({ _id, company_id });

            if(!responseExample)
                return res.status(400).json({ success: false, message: "Falha ao excluir exemplo!" });
    
            return res.status(200).json({ success: true, message: "Exemplo excluído com sucesso!" });

        } catch (error) {
            console.log(`Erro: ${error}`)
            return res.status(400).json({ success: false, message: "Falha ao deletar exemplo!" });
        }
    }
}