const Logout = require('../model/logoutModel');

module.exports = { 

    async update(req, res) {
        
        try {

            await Logout.updateMany({}, { tokenWeb: "" });

            return res.status(200).json({ success: true, message: "Logout Geral!" });

        } catch (error) {
            console.log(`Erro: ${error}`);
            return res.status(400).json({ success: false, message: "Falha ao realizar migração!" });
        }
    }
}