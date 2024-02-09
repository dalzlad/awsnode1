/*
//Importar paquetes
require('dotenv').config()//Dependencia para vincular las variables de entorno

//Impoortar clases o archivos necesarios
const {Server} = require('./models/server')

const server = new Server()//Creando instancia

server.listen()
*/
const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola Mundo!");
});
server.listen(port);
console.log(`Servidor listo en http://localhost:${port}/`);