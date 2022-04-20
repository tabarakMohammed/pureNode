"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdate = void 0;
const mysqlConnection_1 = require("../../config/mysqlConnection");
class userUpdate {
    updateToken(user) {
        let getconnect = new mysqlConnection_1.createSingleConnection();
        let conn = getconnect.createSingleConnection();
        let id = user.getId();
        let Token = user.getToken();
        console.log("from update" + id);
        conn.connect(function () {
            console.log("Connected!");
            // let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(${username} ,  ${usertype},${StudentID},${RegisterDate})`);
            let sql = (`update users set token = ? where id = (${id})`);
            let values = [
                Token
            ];
            conn.query(sql, values, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record updated" + result.insertId);
                return result.insertId;
            });
        });
    }
}
exports.userUpdate = userUpdate;
