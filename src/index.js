"use strict";
exports.__esModule = true;
var baseServer_1 = require("./baseServer");
var mysqlConnection_1 = require("./database/config/mysqlConnection");
var hostname = "127.0.0.1";
var port = 3000;
var _baseServer = new baseServer_1.baseServer();
var _createSingleConnection = new mysqlConnection_1.createSingleConnection();
_createSingleConnection.createSingleConnection();
//createSingleConnection.getConection();
_baseServer.getServer().listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
// var trigger = "/auth/kk",
// regexp = new RegExp('/auth\w*'),
// test = regexp.test(trigger);
// console.log(test + ""); // will display true
