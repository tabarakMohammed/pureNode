"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
const verifyctionTokens_1 = require("../business/services/verifyctionTokens");
class homeController {
    Controller(req, res) {
        let veryToken = new verifyctionTokens_1.verifyToken();
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
                /**    else {return res.end(s);}*/
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                return res.end("was not post");
            }
        }
        else if (req.url == "/home/student") {
            if (req.method == 'POST') {
                let next = "welcome to student home";
                let s = veryToken.verifyToken(req, res, next);
                res.end(s);
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                return res.end("was not post");
            }
        }
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
