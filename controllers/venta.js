const {response} = require('express')

Venta = require('../models/venta')

const getVenta = async(req, res) => {
    const ventas = await Venta.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: ventas
    })
}

const postVenta = async(req, res) => {
    const datos = req.query //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const venta = new Venta(datos) //Instanciar el objeto
        await venta.save()//Guardar en la base de dato  
        console.log(venta) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putVenta = async(req, res) =>{
    const {id,fecha,cliente,total,detalle_venta} = req.query
    try {
        const venta = await Venta.findOneAndUpdate({id: id},{
            fecha: fecha,
            cliente: cliente,
            total: total,
            detalle_venta: detalle_venta
        });//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteVenta = async(req, res) =>{
    const {id} = req.query //Desestructurar
    try {
        const venta = await Venta.findOneAndDelete({id: id})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getVenta,
    postVenta,
    putVenta,
    deleteVenta
}