


export class userModel{
     id = 0 ;
     userName:string = '';
     userType:string = '';
     Token: string='';
     Password:string='';
     
     setId(_id:any) {
        this.id = _id;
    }

     setUserName(_userName: string) {
        this.userName = _userName;
    }

    setUserType(_userType: string) {
        this.userType = _userType;
    }

    setToken(_token: string) {
        this.Token = _token;
    }

    setPassword(_Password: string) {
        this.Password = _Password;
    }


    getId() {
        return this.id;
    }

    getUserName():string {
       return this.userName;
    }

    getUserType():string {
        return this.userType;
    }

    getToken():string {
        return this.Token;
    }
   

    getPassword():string {
       return this.Password;
    }

}


