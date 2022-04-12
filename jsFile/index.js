"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseServer_1 = require("./baseServer");
// let  regexp = new RegExp('/auth\w*\\?*');
//  let check =regexp.test("/auth/reg?id=1");
// console.log(check);
const hostname = "127.0.0.1";
const port = 3000;
let _baseServer = new baseServer_1.baseServer();
_baseServer.getServer().listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
