const db = require('../config/db_sequelize.js');

class UsuarioController {
    static async getAll(req, res) {
        try {
            const usuarios = await db.Usuario.findAll();
            console.log(usuarios)
            return res.status(200).json(usuarios) 
        } catch(error) {
            console.log(error)
        }
    }
    
    static async insert( req, res ) {
        console.log(req)
        console.log("chamando insert");
    }
}

module.exports = UsuarioController;