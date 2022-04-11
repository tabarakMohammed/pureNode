"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
class admin {
    constructor() {
        this.adminId = 0;
        this.adminName = '';
        this.adminType = '';
    }
    setAdminId(_adminId) {
        this.adminId = _adminId;
    }
    setAdminName(_adminName) {
        this.adminName = _adminName;
    }
    setAdminType(_adminType) {
        this.adminType = _adminType;
    }
    getAdminId() {
        return this.adminId;
    }
    getAdminName() {
        return this.adminName;
    }
    getAdminType() {
        return this.adminType;
    }
}
exports.admin = admin;
