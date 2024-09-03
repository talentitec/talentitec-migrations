const MigrationRecruitment = require('../model/recruitmentModel');

module.exports = { 

    async store(req, res) {
        
        try {

            const responseData = await MigrationRecruitment.find({ });

            for(const elementData of responseData) {

                console.log(elementData._id)

                await MigrationRecruitment.findOneAndUpdate({ _id: elementData._id }, 
                    {
                        publish: true,
                        draft: false
                    }
                )
            }

            return res.status(200).json({ success: true, message: "Migração realizada com sucesso!" });

        } catch (error) {
            console.log(`Erro: ${error}`);
            return res.status(400).json({ success: false, message: "Falha ao realizar migração!" });
        }
    }
}