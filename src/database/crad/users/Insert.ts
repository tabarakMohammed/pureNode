import { createSingleConnection } from "../../config/mysqlConnection";
import { userModel } from "../../model/users";

export class userInsert{
   

    public insertNew(user:userModel):any{
     let getconnect = new createSingleConnection();
     let conn =  getconnect.createSingleConnection();
     
      let username:string = user.getUserName();
      let usertype:string = user.getUserType();
      let StudentID:number = user.getStudentID();
      let RegisterDate:string = user.getRegisterDate();

      console.log(`my variable is ,(${username})`);

        conn.connect(function() {
        console.log("Connected!");
       
        // let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(${username} ,  ${usertype},${StudentID},${RegisterDate})`);
    let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(?,?,?,?)`);

        let values = [
            username,
            usertype,
            StudentID,
            RegisterDate];

        conn.query(sql,values,function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          return result.id;
        });
      });

        
    }


}