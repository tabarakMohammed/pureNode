


export class userModel{
     id:number = 0 ;
     userName:string = '';
     userType:string = '';
     registerDate!: string;
     studentID:number=0;
    
     setUserName(_userName: string) {
        this.userName = _userName;
    }

    setUserType(_userType: string) {
        this.userType = _userType;
    }

    setRegisterDate(_registerDate: string) {
        this.registerDate = _registerDate;
    }

    setStudentID(_studentID: number) {
        this.studentID = _studentID;
    }

    getUserName():string {
       return this.userName;
    }

    getUserType():string {
        return this.userType;
    }

    getRegisterDate():string {
        return this.registerDate;
    }
   

    getStudentID():number {
       return this.studentID;
    }

}


