const Birthday = require('../model/birthdayModel');
const Employee = require('../model/logoutModel');
const Months =  require('../function/months');
const FormatDate = require('../function/formatDate');


module.exports = { 

    async store(req, res) {
        
        try {

            const createAt = FormatDate.formatDate(new Date());
            const updateAt = FormatDate.formatDate(new Date());
            const responseData = await Employee.find({ }, { birth_date: 1, admission_date: 1, company_id: 1, sector_id: 1, active: 1 });

            for(const elementData of responseData) {

                const _id = elementData._id;
                const company_id = elementData.company_id;
                const sector_id = elementData.sector_id;
                const active = elementData.active;
                console.log(_id)
                console.log(company_id)

                if(elementData.birth_date) {

                    const month_num_birth = elementData.birth_date.getMonth() + 1;
                    const month_str_birth = Months.month(elementData.birth_date.getMonth());

                    console.log(elementData.birth_date)
                    console.log(month_num_birth)
                    console.log(month_str_birth)
    
                    if(await Birthday.findOne({ employee_id: _id, company_id, type_birthday: "birthday" })){
                        
                        if(month_num_birth > 0) {


                        console.log("ATUALIZOU")
        
                            await Birthday.findOneAndUpdate({ employee_id: _id, company_id, type_birthday: "birthday" },{
                                updateAt,
                                month_num: month_num_birth,
                                month_str: month_str_birth,
                                type_birthday: "birthday",
                                sector_id,
                                active
                            });
                        }
                    }
                    else if(month_num_birth > 0) {
    
                        console.log("CRIOU")
                        await Birthday.create({
                            createAt,
                            updateAt,
                            month_num: month_num_birth,
                            month_str: month_str_birth,
                            type_birthday: "birthday",
                            sector_id,
                            active: true,
                            employee_id: _id,
                            company_id
                        });
                    }
                    
                }

                if(elementData.admission_date) {
    
                    const month_num_admission = elementData.admission_date.getMonth() + 1;
                    const month_str_admission = Months.month(elementData.admission_date.getMonth());
    
                    console.log(elementData.admission_date)
                    console.log(month_num_admission)
                    console.log(month_str_admission)
                    if(await Birthday.findOne({ employee_id: _id, company_id, type_birthday: "admission" })){
    
                        if(month_num_admission > 0) {
                            console.log("ATUALIZOU")
                            await Birthday.findOneAndUpdate({ employee_id: _id, company_id, type_birthday: "admission" }, {
                                updateAt,
                                month_num: month_num_admission,
                                month_str: month_str_admission,
                                type_birthday: "admission",
                                sector_id,
                                active
                            });
                        }
    
                    }
                    else if(month_num_admission > 0) {
                        console.log("CRIOU")
                        await Birthday.create({
                            createAt,
                            updateAt,
                            month_num: month_num_admission,
                            month_str: month_str_admission, 
                            type_birthday: "admission",
                            sector_id,
                            active: true,
                            employee_id: _id,
                            company_id
                        });
                    }
                }
            }

            return res.status(200).json({ success: true, message: "Migração realizada com sucesso!" });

        } catch (error) {
            console.log(`Erro: ${error}`);
            return res.status(400).json({ success: false, message: "Falha ao realizar migração!" });
        }
    }
}