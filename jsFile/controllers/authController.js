"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServer = void 0;
const userServices_1 = require("../business/services/userServices");
const users_1 = require("../database/model/users");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
class authServer {
    async Controller(url, req, res) {
        let result = dotenv_1.default.config();
        if (result.error) {
            throw result.error;
        }
        if (req.url == '/auth') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            let _userServices = new userServices_1.userServices();
            let _userModel = new users_1.userModel();
            let queryData = await _userServices.getByusername('two');
            console.log(queryData.Password);
            console.log(queryData.userName);
            console.log(queryData.Token);
            // console.log(queryData.getToken);
            res.write("ok Auth");
            res.end();
            // try {
            //   // Get user input
            //   const { email, password } = req.body;
            //   // Validate user input
            //   if (!(email && password)) {
            //     res.status(400).send("All input is required");
            //   }
            //   // Validate if user exist in our database
            //   const user =  User.findOne({ email });
            //   if (user && ( bcrypt.compare(password, user.password))) {
            //     // Create token
            //     const token = jwt.sign(
            //       { user_id: user._id, email },
            //       process.env.TOKEN_KEY,
            //       {
            //         expiresIn: "2h",
            //       }
            //     );
            //     // save user token
            //     user.token = token;
            //     // user
            //     res.status(200).json(user);
            //   }
            //   res.status(400).send("Invalid Credentials");
            // } catch (err) {
            //   console.log(err);
            // }
            //  return res;
        }
        /*** regester section */
        else if (url[0] == "/auth/reg") {
            //  let datetime = new Date();
            //datetime.toLocaleString()
            if (req.method == 'POST') {
                let data = '';
                req.on('data', (chunk) => {
                    data += chunk;
                });
                req.on('end', async () => {
                    if (!(JSON.parse(data).username && JSON.parse(data).password && JSON.parse(data).usertype)) {
                        res.status(400).send("All input is required");
                    }
                    let _userServices = new userServices_1.userServices();
                    // check if user already exist
                    // Validate if user exist in our database
                    /** const oldUser =  _userServices.findOne(JSON.parse(data).username);
                   
                       if (oldUser) {
                         return res.status(409).send("User Already Exist. Please Login");
                       }
                   */
                    let encryptedPassword = bcryptjs_1.default.hash(JSON.parse(data).password, 10);
                    let queryData = _userServices.getMaxId();
                    let _userModel = new users_1.userModel();
                    queryData.then(async (x) => {
                        if (x == 0 || x == null)
                            x = 1;
                        console.log(x);
                        _userModel.setId(x);
                        _userModel.setUserName(JSON.parse(data).username);
                        _userModel.setPassword(await encryptedPassword);
                        _userModel.setUserType(JSON.parse(data).usertype);
                        let username = JSON.parse(data).userName;
                        try {
                            if (process.env.TOKEN_KEY != null) {
                                const token = jsonwebtoken_1.default.sign({ user_id: _userModel.getId(), user_name: username }, process.env.TOKEN_KEY, {
                                    expiresIn: "2h",
                                });
                                _userModel.setToken(token);
                                _userServices.insertNewUser(_userModel);
                            }
                        }
                        catch (err) { }
                        res.end();
                    });
                });
            }
            else {
                res.end('Invalid Request!');
            }
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
