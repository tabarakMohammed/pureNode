"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRetrieve = void 0;
const mysqlConnection_1 = require("../../config/mysqlConnection");
const users_1 = require("../../model/users");
class userRetrieve {
    async retrieveByusername(username) {
        let sql = `SELECT * FROM users as tekila WHERE UserName = ('${username}')`;
        let _userModel = new users_1.userModel();
        await this.fetchData(sql).then((x) => {
            if (x == 0 || x == null)
                x = 'null';
            //console.log(x[0].tekila);
            let tekilaUser = JSON.parse(JSON.stringify(x));
            _userModel.userName = tekilaUser[0].UserName;
            _userModel.userType = tekilaUser[0].UserType;
            _userModel.id = tekilaUser[0].id;
            _userModel.Password = tekilaUser[0].Password;
            _userModel.Token = tekilaUser[0].token;
        });
        return _userModel;
    }
    retrieveMaxId() {
        let getconnect = new mysqlConnection_1.createSingleConnection();
        let conn = getconnect.createSingleConnection();
        let idi = 0;
        //let data;
        let _userModel = new users_1.userModel();
        _userModel.setId(4);
        return new Promise(function (resolve, reject) {
            let sql = (`SELECT MAX(id) as num FROM users`);
            conn.query(sql, function (err, result) {
                if (err)
                    reject(err);
                //  _userModel.setId(result[0].num);
                // idi = _userModel.id;
                // console.log('insede qurey'+ idi);
                resolve(result[0].num + 1);
                return result;
            });
            ///console.log("_i_"+data);
        });
    }
    fetchData(sql) {
        let getconnect = new mysqlConnection_1.createSingleConnection();
        let conn = getconnect.createSingleConnection();
        //let data;
        let _userModel = new users_1.userModel();
        _userModel.setId(4);
        return new Promise(function (resolve, reject) {
            conn.query(sql, function (err, result) {
                if (err)
                    reject(err);
                _userModel.setId(result);
                // idi = _userModel.id;
                // console.log('insede qurey'+ idi);
                resolve(result);
                return result;
            });
            ///console.log("_i_"+data);
        });
    }
}
exports.userRetrieve = userRetrieve;
