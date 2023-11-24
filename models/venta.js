const {Schema, model} = require('mongoose')

const VentaSchema = ({
    id:{
        type: Number,
        unique: true,
        required:[true, 'El id de la venta es necesario']
    },

    fecha: {
        type:String,
        required:[true, 'La fecha de la venta es requerida'],
    },

    cliente:{
        type:String,
        required:[true, 'Elcliente es requeriada'],
    },

    total: {
        type:String,
        required:[true, 'El total es requerida'],
    },

    detalle_venta: {
        type: String,
        require: [true, 'El detalle de la venta es requerido']
    }
})


module.exports = model('Venta', VentaSchema)