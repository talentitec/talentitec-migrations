const Migration = require('../model/migrationModel');

module.exports = { 

    async store(req, res) {
        
        try {

            const responseData = await Migration.find({ })

            for(const elementData of responseData) {

                const language = elementData.language;
    
                if(language == null)
                    continue;
                else if(language.length == 0)
                    continue;
                else if(elementData.language[0].language_name)
                    continue;

                for(const elementWayWork of elementData.language) {
                    if(elementWayWork.language_name)
                        continue;

                    const string = elementWayWork.toObject();
                    delete string._id;
                    const totalKeys = Object.keys(string).length;
                    var language_name = '';

                    for(var count = 0; count < totalKeys; count++){
                        language_name = language_name + string[count];
                    }

                    console.log(language_name);
                    console.log(elementData._id);
                    console.log(elementData.language_id);

                    await Migration.findOneAndUpdate({ _id: elementData._id }, {
                        language: [
                            {
                                language_name,
                                language_id: elementData.language_id

                            }
                        ],
                        $unset: { language_id: "" }
                    });
                }
            }

            return res.status(200).json({ success: true, message: "Migração realizada com sucesso!" });

        } catch (error) {
            console.log(`Erro: ${error}`);
            return res.status(400).json({ success: false, message: "Falha ao realizar migração!" });
        }
    }
}