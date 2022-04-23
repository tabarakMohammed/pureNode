import { createSingleConnection } from "../../config/mysqlConnection";
import { userModel } from "../../model/users";

export class userUpdate{



    public updateToken(userId:number, userToken:string):any{
        let getconnect = new createSingleConnection();
        let conn =  getconnect.createSingleConnection();
        let finsh = "nop";
         let id:number = userId;
         let Token:string = userToken;
           console.log("from update ->> "+id )
           console.log(Token )
/** put promise to get status of updateing process  */
   
           conn.connect(function() {
           console.log("Connected!");
       let sql = 'update users set token = ? where id = ?';
   
           let values = [
               Token,id];
   
            conn.query(sql,values,function (err, result) {
             if (err) throw err;
             console.log("1 record updated  " + result.affectedRows);
             return result.insertId;
           });
         });
   
           return finsh;
       }
   

}