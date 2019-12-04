"use strict";
exports.__esModule = true;
var Server_1 = require("./Clases/Server");
var enviroments_1 = require("./global/enviroments");
var router_1 = require("./routes/router");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var server = Server_1["default"].instance;
//body-parser
server.app.use(body_parser_1["default"].urlencoded({ extended: true }));
server.app.use(body_parser_1["default"].json());
//CORS  
server.app.use(cors_1["default"]({ origin: true, credentials: true }));
//Rutas de servicios
server.app.use('/', router_1["default"]);
server.start(function () {
    console.log("Servidor Corriendo en el puerto " + enviroments_1.SERVER_PORT);
});
