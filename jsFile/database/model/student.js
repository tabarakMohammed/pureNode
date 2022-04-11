"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
class student {
    constructor() {
        this.studentID = 0;
        this.studentName = '';
        this.studentNumber = 0;
        this.studentStage = 0;
        this.studentNote = '';
    }
    setStudentID(_studentID) {
        this.studentID = _studentID;
    }
    setStudentName(_studentName) {
        this.studentName = _studentName;
    }
    setStudentNumber(_studentNumber) {
        this.studentNumber = _studentNumber;
    }
    setStudentStage(_studentStage) {
        this.studentStage = _studentStage;
    }
    setStudentNote(_studentNote) {
        this.studentNote = _studentNote;
    }
    getStudentID() {
        return this.studentID;
    }
    getStudentName() {
        return this.studentName;
    }
    getStudentNumber() {
        return this.studentNumber;
    }
    getStudentStage() {
        return this.studentStage;
    }
    getStudentNote() {
        return this.studentNote;
    }
}
exports.student = student;
