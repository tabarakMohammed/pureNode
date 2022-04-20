"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInsert = void 0;
const mysqlConnection_1 = require("../../config/mysqlConnection");
class userInsert {
    insertNew(user) {
        let id = 0;
        let getconnect = new mysqlConnection_1.createSingleConnection();
        let conn = getconnect.createSingleConnection();
        let username = user.getUserName();
        let usertype = user.getUserType();
        let Password = user.getPassword();
        let Token = user.getToken();
        // let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(${username} ,  ${usertype},${StudentID},${RegisterDate})`);
        let sql = (`INSERT INTO users (UserName, UserType,Password,token) VALUES(?,?,?,?)`);
        let values = [
            username,
            usertype,
            Password,
            Token
        ];
        conn.query(sql, values, function (err, result) {
            if (err)
                throw err;
            console.log("1 record inserted" + result.insertId);
            user.setId(result.insertId);
            id = result.insertId;
            // return id = result.insertId;
        });
        return id;
    }
}
exports.userInsert = userInsert;
