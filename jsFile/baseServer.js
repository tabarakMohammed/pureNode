"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseServer = void 0;
const http = __importStar(require("http"));
const process_1 = require("process");
const adminController_1 = require("./controllers/adminController");
const authController_1 = require("./controllers/authController");
const homeController_1 = require("./controllers/homeController");
class baseServer {
    getServer() {
        return http.createServer(function (req, res) {
            let authChecker, homeChecker, adminChecker = false;
            let regexp = new RegExp('/auth\w*\\?*');
            let xurl = req.url ? req.url : "x";
            console.log(xurl);
            authChecker = regexp.test(xurl);
            console.log(authChecker);
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
                let url = req.url?.split('=');
                // if(url!=null){         console.log(url[2])
                // }
                let auth = new authController_1.authServer;
                auth.Controller(url, req, res);
            }
            else if (homeChecker) {
                let home = new homeController_1.homeController;
                home.Controller(req, res);
            }
            else if (adminChecker) {
                let admin = new adminController_1.adminController;
                admin.Controller(req, res);
            }
            else
                res.end('Invalid Request!');
        });
    }
}
exports.baseServer = baseServer;
