"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const Insert_1 = require("../../database/crad/users/Insert");
class userServices {
    //   _userInsert:userInsert = new userInsert();
    //   userServices(userInsert:userInsert){
    //       this._userInsert =userInsert;
    //   }
    insertNewUser(user) {
        //this._userInsert.insertNew(user);
        let _userInsert = new Insert_1.userInsert();
        _userInsert.insertNew(user);
    }
}
exports.userServices = userServices;
