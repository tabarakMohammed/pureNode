"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
class userModel {
    constructor() {
        this.id = 0;
        this.userName = '';
        this.userType = '';
        this.Token = '';
        this.Password = '';
    }
    setId(_id) {
        this.id = _id;
    }
    setUserName(_userName) {
        this.userName = _userName;
    }
    setUserType(_userType) {
        this.userType = _userType;
    }
    setToken(_token) {
        this.Token = _token;
    }
    setPassword(_Password) {
        this.Password = _Password;
    }
    getId() {
        return this.id;
    }
    getUserName() {
        return this.userName;
    }
    getUserType() {
        return this.userType;
    }
    getToken() {
        return this.Token;
    }
    getPassword() {
        return this.Password;
    }
}
exports.userModel = userModel;
