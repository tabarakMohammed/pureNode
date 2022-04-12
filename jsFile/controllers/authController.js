"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServer = void 0;
const userServices_1 = require("../business/services/userServices");
const users_1 = require("../database/model/users");
//import urla from "url";
//import querystring from 'querystring';
//import format from 'date-format';
class authServer {
    Controller(url, req, res) {
        if (req.url == '/auth') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write("ok Auth");
            res.end();
            return res;
        }
        else if (url[0] == "/auth/reg") {
            if (req.method == 'POST') {
                let data = '';
                req.on('data', (chunk) => {
                    data += chunk;
                });
                req.on('end', () => {
                    console.log(JSON.parse(data).userName + JSON.parse(data).studentId);
                    let datetime = new Date();
                    let _userServices = new userServices_1.userServices();
                    let _userModel = new users_1.userModel();
                    _userModel.setUserName(JSON.parse(data).userName);
                    _userModel.setStudentID(JSON.parse(data).studentId);
                    _userModel.setRegisterDate(datetime.toLocaleString());
                    _userModel.setUserType(JSON.parse(data).userType);
                    _userServices.insertNewUser(_userModel);
                    res.end(data);
                });
            }
            else {
                res.end('Invalid Request!');
            }
            //   const queryObject = urla.parse(req.url, true).query;
            //   console.log(queryObject,queryObject.id,queryObject.name);
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
