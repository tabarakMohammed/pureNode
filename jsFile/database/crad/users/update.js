"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdate = void 0;
const mysqlConnection_1 = require("../../config/mysqlConnection");
class userUpdate {
    updateToken(userId, userToken) {
        let getconnect = new mysqlConnection_1.createSingleConnection();
        let conn = getconnect.createSingleConnection();
        let finsh = "nop";
        let id = userId;
        let Token = userToken;
        console.log("from update ->> " + id);
        console.log(Token);
        /** put promise to get status of updateing process  */
        conn.connect(function () {
            console.log("Connected!");
            let sql = 'update users set token = ? where id = ?';
            let values = [
                Token, id
            ];
            conn.query(sql, values, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record updated  " + result.affectedRows);
                return result.insertId;
            });
        });
        return finsh;
    }
}
exports.userUpdate = userUpdate;
