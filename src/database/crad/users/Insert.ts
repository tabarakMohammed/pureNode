import { createSingleConnection } from "../../config/mysqlConnection";
import { userModel } from "../../model/users";

export class userInsert{
   
 

    public insertNew(user:userModel):number{
      let id:number = 0;
     let getconnect = new createSingleConnection();
     let conn =  getconnect.createSingleConnection();
     
      let username:string = user.getUserName();
      let usertype:string = user.getUserType();
      let Password:string = user.getPassword();
      let Token:string = user.getToken();


       
        // let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(${username} ,  ${usertype},${StudentID},${RegisterDate})`);
    let sql = (`INSERT INTO users (UserName, UserType,Password,token) VALUES(?,?,?,?)`);

        let values = [
            username,
            usertype,
            Password,
            Token];

           conn.query(sql,values,function (err, result) {
          if (err) throw err;
          console.log("1 record inserted" + result.insertId);
          user.setId(result.insertId);
          id = result.insertId;
         // return id = result.insertId;
        });


      return id;
    }


}