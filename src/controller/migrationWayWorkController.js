const Migration = require('../model/migrationModel');

module.exports = { 

    async store(req, res) {
        
        try {

            const responseData = await Migration.find({ })

            for(const elementData of responseData) {

                const way_working = elementData.way_working;
    
                if(way_working == null)
                    continue;
                else if(way_working.length == 0)
                    continue;
                else if(elementData.way_working[0].way_working_name)
                    continue;

                for(const elementWayWork of elementData.way_working) {
                    if(elementWayWork.way_working_name)
                        continue;

                    const string = elementWayWork.toObject();
                    delete string._id;
                    const totalKeys = Object.keys(string).length;
                    var way_working_name = '';

                    for(var count = 0; count < totalKeys; count++){
                        way_working_name = way_working_name + string[count];
                    }

                    console.log(way_working_name);
                    console.log(elementData._id);
                    console.log(elementData.way_working_id);

                    await Migration.findOneAndUpdate({ _id: elementData._id }, {
                        way_working: [
                            {
                                way_working_name,
                                way_working_id: elementData.way_working_id

                            }
                        ],
                        $unset: { way_working_id: "" }
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