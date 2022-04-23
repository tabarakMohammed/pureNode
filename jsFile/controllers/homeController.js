"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
const userServices_1 = require("../business/services/userServices");
const verifyctionTokens_1 = require("../business/services/verifyctionTokens");
class homeController {
    async Controller(req, res) {
        let veryToken = new verifyctionTokens_1.verifyToken();
        /*** homeeeeeeeeeeeeeeeeeeeeeeeeeee ===================> */
        if (req.url == '/home') {
            if (req.method == 'POST') {
                let next = "welcome to home";
                let s = veryToken.verifyToken(req, res, next);
                if (s == next) {
                    let data = '';
                    req.on('data', (chunk) => {
                        data += chunk;
                        console.log("ddddd" + data);
                    });
                    try {
                        req.on('end', async () => {
                            console.log("ddddd" + JSON.parse(data).token);
                        });
                        return res.end("kk");
                    }
                    catch (err) {
                        return res.end("theres is an error");
                    }
                }
                else {
                    res.statusCode = 401;
                    return res.end(s);
                }
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                return res.end("was not post");
            }
        }
        /*** studeeeeeeeeeeeeeeeeeent ===================> */
        else if (req.url == "/home/student") {
            if (req.method == 'POST') {
                let _userServices = new userServices_1.userServices();
                let next = "welcome to student home";
                let s = veryToken.verifyToken(req, res, next);
                if (req.user.user_id) {
                    // console.log(req.user.user_id);
                    let queryData = await _userServices.retrieveById(req.user.user_id);
                    console.log(JSON.stringify(queryData));
                    res.end(JSON.stringify(queryData));
                }
                else {
                    res.statusCode = 401;
                    res.end("good luck !!");
                }
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                return res.end("was not post");
            }
        }
        /*** admiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin ===================> */
        else if (req.url == "/home/admin") {
            if (req.method == 'POST') {
                let next = "welcome to admin home";
                let s = veryToken.verifyToken(req, res, next);
                res.end(s);
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                return res.end("was not post");
            }
        }
        else
            res.end('Invalid Request!');
    }
}
exports.homeController = homeController;
