"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
class adminController {
    Controller(req, res) {
        if (req.url == '/admin') { //check the URL of the current request
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            // set response content    
            res.write("ok Home");
            res.end();
            return res;
        }
        else if (req.url == "/admin/student") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is student Page.</p></body></html>');
            res.end();
        }
        else if (req.url == "/admin/admin") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is admin Page.</p></body></html>');
            res.end();
        }
        else
            res.end('Invalid Request!');
    }
}
exports.adminController = adminController;
