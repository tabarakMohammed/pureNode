"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServer = void 0;
const userServices_1 = require("../business/services/userServices");
const users_1 = require("../database/model/users");
//import dateFormat from "dateformat";
class authServer {
    Controller(req, res) {
        if (req.url == '/auth') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write("ok Auth");
            res.end();
            return res;
        }
        else if (req.url == "/auth/reg") {
            // let _Date= new Date();
            //dateFormat(_Date, "isoDateTime")
            let _userServices = new userServices_1.userServices();
            let _userModel = new users_1.userModel();
            _userModel.setUserName("test");
            _userModel.setStudentID(1);
            _userModel.setRegisterDate("4/11/2022");
            _userModel.setUserType("student");
            _userServices.insertNewUser(_userModel);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is student Page.</p></body></html>');
            res.end();
        }
        else if (req.url == "/auth/admin") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is admin Page.</p></body></html>');
            res.end();
        }
        else
            res.end('Invalid Request!');
    }
}
exports.authServer = authServer;
//6 - listen for any incoming requests
