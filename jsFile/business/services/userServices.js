"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const Insert_1 = require("../../database/crad/users/Insert");
const retrieve_1 = require("../../database/crad/users/retrieve");
const update_1 = require("../../database/crad/users/update");
class userServices {
    //   _userInsert:userInsert = new userInsert();
    //   userServices(userInsert:userInsert){
    //       this._userInsert =userInsert;
    //   }
    insertNewUser(user) {
        let _userInsert = new Insert_1.userInsert();
        let id = _userInsert.insertNew(user);
        return id;
    }
    updateUserToken(userId, userToken) {
        let _userUpdate = new update_1.userUpdate();
        return _userUpdate.updateToken(userId, userToken);
    }
    getMaxId() {
        let _userRetrieve = new retrieve_1.userRetrieve();
        return _userRetrieve.retrieveMaxId();
    }
    getByusername(userName) {
        let _userRetrieve = new retrieve_1.userRetrieve();
        return _userRetrieve.retrieveByusername(userName);
    }
    retrieveById(id) {
        let _userRetrieve = new retrieve_1.userRetrieve();
        return _userRetrieve.retrieveById(id);
    }
}
exports.userServices = userServices;
