"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInsert = void 0;
const mysqlConnection_1 = require("../../config/mysqlConnection");
class userInsert {
    insertNew(user) {
        let getconnect = new mysqlConnection_1.createSingleConnection();
        let conn = getconnect.createSingleConnection();
        let username = user.getUserName();
        let usertype = user.getUserType();
        let StudentID = user.getStudentID();
        let RegisterDate = user.getRegisterDate();
        console.log(`my variable is ,(${username})`);
        conn.connect(function () {
            console.log("Connected!");
            // let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(${username} ,  ${usertype},${StudentID},${RegisterDate})`);
            let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(?,?,?,?)`);
            let values = [
                username,
                usertype,
                StudentID,
                RegisterDate
            ];
            conn.query(sql, values, function (err, result) {
                if (err)
                    throw err;
                console.log("1 record inserted");
                return result.id;
            });
        });
    }
}
exports.userInsert = userInsert;
