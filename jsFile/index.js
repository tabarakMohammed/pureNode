"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseServer_1 = require("./baseServer");
const mysqlConnection_1 = require("./database/config/mysqlConnection");
const hostname = "127.0.0.1";
const port = 3000;
let _baseServer = new baseServer_1.baseServer();
let _createSingleConnection = new mysqlConnection_1.createSingleConnection();
_createSingleConnection.createSingleConnection();
//createSingleConnection.getConection();
_baseServer.getServer().listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// var trigger = "/auth/kk",
// regexp = new RegExp('/auth\w*'),
// test = regexp.test(trigger);
// console.log(test + ""); // will display true
