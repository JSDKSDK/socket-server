"use strict";
exports.__esModule = true;
var express_1 = require("express");
var enviroments_1 = require("../global/enviroments");
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1["default"]();
        this.port = enviroments_1.SERVER_PORT;
        this.httpServer = new http_1["default"].Server(this.app);
        this.io = socket_io_1["default"](this.httpServer);
        this.escucharSockets();
    }
    Object.defineProperty(Server, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.escucharSockets = function () {
        console.log("escuchando conexiones - sockets");
        this.io.on('connection', function (cliente) {
            console.log("nuevo cliente conectado");
        });
    };
    Server.prototype.start = function (callback) {
        // this.app.listen(this.port,callback);
        this.httpServer.listen(this.port, callback);
    };
    return Server;
}());
exports["default"] = Server;
