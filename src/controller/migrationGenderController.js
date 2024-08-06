const Migration = require('../model/migrationModel');

module.exports = { 

    async store(req, res) {
        
        try {

            const responseData = await Migration.find({ })

            for(const elementData of responseData) {

                const gender = elementData.gender;
    
                if(gender == null)
                    continue;
                else if(gender.length == 0)
                    continue;
                else if(elementData.gender[0].gender_name)
                    continue;

                for(const elementWayWork of elementData.gender) {
                    if(elementWayWork.gender_name)
                        continue;

                    const string = elementWayWork.toObject();
                    delete string._id;
                    const totalKeys = Object.keys(string).length;
                    var gender_name = '';

                    for(var count = 0; count < totalKeys; count++){
                        gender_name = gender_name + string[count];
                    }

                    console.log(gender_name);
                    console.log(elementData._id);
                    console.log(elementData.gender_id);

                    await Migration.findOneAndUpdate({ _id: elementData._id }, {
                        gender: [
                            {
                                gender_name,
                                gender_id: elementData.gender_id

                            }
                        ],
                        $unset: { gender_id: "" }
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