export class student{
   
    studentID:number =0;
    studentName:string ='';
    studentNumber:number =0;
    studentStage:number =0;
    studentNote: string = '';


    setStudentID(_studentID: number) {
        this.studentID = _studentID;
    }

    setStudentName(_studentName: string) {
        this.studentName = _studentName;
    }

    setStudentNumber(_studentNumber: number) {
        this.studentNumber = _studentNumber;
    }

    setStudentStage(_studentStage: number) {
        this.studentStage = _studentStage;
    }

    setStudentNote(_studentNote: string) {
        this.studentNote = _studentNote;
    }

    


 
     getStudentID(): number {
        return this.studentID ;
     }
    
    getStudentName(): string {
       return this.studentName ;
    }

    getStudentNumber(): number {
       return  this.studentNumber;
    }

    getStudentStage(): number {
        return this.studentStage;
    }

    getStudentNote(): string {
       return this.studentNote;
    }






}