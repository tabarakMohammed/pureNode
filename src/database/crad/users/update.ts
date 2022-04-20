import { createSingleConnection } from "../../config/mysqlConnection";
import { userModel } from "../../model/users";

export class userUpdate{



    public updateToken(user:userModel):any{
        let getconnect = new createSingleConnection();
        let conn =  getconnect.createSingleConnection();
        
         let id:number = user.getId();
         let Token:string = user.getToken();
   console.log("from update"+id )
   
           conn.connect(function() {
           console.log("Connected!");
          
           // let sql = (`INSERT INTO users (UserName, UserType,StudentID,RegisterDate) VALUES(${username} ,  ${usertype},${StudentID},${RegisterDate})`);
       let sql = (`update users set token = ? where id = (${id})`);
   
           let values = [
               Token];
   
           conn.query(sql,values,function (err, result) {
             if (err) throw err;
             console.log("1 record updated" + result.insertId);
             return result.insertId;
           });
         });
   
           
       }
   

}