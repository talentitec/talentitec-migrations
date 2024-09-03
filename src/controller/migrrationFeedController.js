const Feed = require('../model/feedModel');

module.exports = { 

    async store(req, res) {
        
        try {

            const responseData = await Feed.find({ }, { user_id: 1 });

            for(const elementData of responseData) {

 
                console.log(elementData.user_id)


                    await Feed.findOneAndUpdate({ _id: elementData._id }, {
                        employee_id: elementData.user_id,
                        $unset: { user_id: "" }
                    });
                
            }

            return res.status(200).json({ success: true, message: "Migração realizada com sucesso!" });

        } catch (error) {
            console.log(`Erro: ${error}`);
            return res.status(400).json({ success: false, message: "Falha ao realizar migração!" });
        }
    }
}