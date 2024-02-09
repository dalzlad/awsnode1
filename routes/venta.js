const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getVenta, postVenta, putVenta, deleteVenta } = require('../controllers/venta')

route.get('/', getVenta)

route.post('/', postVenta)

route.put('/', putVenta)

route.delete('/', deleteVenta)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 