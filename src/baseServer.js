"use strict";
exports.__esModule = true;
exports.baseServer = void 0;
var http = require("http");
var process_1 = require("process");
var adminController_1 = require("./controllers/adminController");
var authController_1 = require("./controllers/authController");
var homeController_1 = require("./controllers/homeController");
var baseServer = /** @class */ (function () {
    function baseServer() {
    }
    baseServer.prototype.getServer = function () {
        return http.createServer(function (req, res) {
            var authChecker, homeChecker, adminChecker = false;
            var regexp = new RegExp('/auth\w*');
            var xurl = req.url ? req.url : "x";
            authChecker = regexp.test(xurl);
            if (!authChecker) {
                regexp = new RegExp('/home\w*');
                xurl = req.url ? req.url : "x";
                homeChecker = regexp.test(xurl);
            }
            if (!homeChecker) {
                regexp = new RegExp('/admin\w*');
                xurl = req.url ? req.url : "x";
                adminChecker = regexp.test(xurl);
            }
            else {
                process_1.exit;
            }
            if (authChecker) {
                var auth = new authController_1.authServer;
                auth.Controller(req, res);
            }
            else if (homeChecker) {
                var home = new homeController_1.homeController;
                home.Controller(req, res);
            }
            else if (adminChecker) {
                var admin = new adminController_1.adminController;
                admin.Controller(req, res);
            }
            else
                res.end('Invalid Request!');
        });
    };
    return baseServer;
}());
exports.baseServer = baseServer;
