"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
class userModel {
    constructor() {
        this.id = 0;
        this.userName = '';
        this.userType = '';
        this.studentID = 0;
    }
    setUserName(_userName) {
        this.userName = _userName;
    }
    setUserType(_userType) {
        this.userType = _userType;
    }
    setRegisterDate(_registerDate) {
        this.registerDate = _registerDate;
    }
    setStudentID(_studentID) {
        this.studentID = _studentID;
    }
    getUserName() {
        return this.userName;
    }
    getUserType() {
        return this.userType;
    }
    getRegisterDate() {
        return this.registerDate;
    }
    getStudentID() {
        return this.studentID;
    }
}
exports.userModel = userModel;
