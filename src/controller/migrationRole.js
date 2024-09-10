const Role = require('../model/roleModel');

module.exports = { 

    async store(req, res) {
        
        try {

            const responseData = await Role.find({ }, { _id: 1 });

            for(const elementData of responseData) {

 
                console.log(elementData._id);


                    await Role.findOneAndUpdate({ _id: elementData._id }, {
                        active: true,
                    });
                
            }

            return res.status(200).json({ success: true, message: "Migração realizada com sucesso!" });

        } catch (error) {
            console.log(`Erro: ${error}`);
            return res.status(400).json({ success: false, message: "Falha ao realizar migração!" });
        }
    }
}