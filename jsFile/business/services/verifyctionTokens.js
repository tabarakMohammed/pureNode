"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
class verifyToken {
    verifyToken(req, res, next) {
        let result = dotenv_1.default.config();
        if (result.error) {
            throw result.error;
        }
        try {
            let acessToken = req.headers['authorization'].split('Bearer');
            const token = acessToken[1].trim();
            if (!token) {
                return next = "A token is required for authentication";
            }
            if (process.env.TOKEN_KEY != null) {
                const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_KEY);
                // console.log(JSON.parse(decoded.toString()).usertype);
                req.user = decoded;
                // console.log(req.user);
            }
        }
        catch (err) {
            return next = "Invalid Token";
        }
        return next;
    }
    ;
}
exports.verifyToken = verifyToken;
