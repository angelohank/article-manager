const db = require('./config/db_sequelize');
const express = require("express");
const router = express.Router();
const UsuarioController = require('./controllers/UsuarioController.js');

const app = express();

app.use(express.json());


// db.sequelize.sync({ force: true }).then(() => {
//     console.log('{ force: true }');
// });

app.get('/usuarios/getAll', UsuarioController.getAll);
router.post('/usuarios/insert', UsuarioController.insert);

app.listen(5000, () => {
    console.log("app rodando")
})
