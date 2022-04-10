"use strict";
exports.__esModule = true;
exports.authServer = void 0;
var authServer = /** @class */ (function () {
    function authServer() {
    }
    authServer.prototype.Controller = function (req, res) {
        if (req.url == '/auth') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write("ok Auth");
            res.end();
            return res;
        }
        else if (req.url == "/auth/student") {
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
    };
    return authServer;
}());
exports.authServer = authServer;
//6 - listen for any incoming requests
