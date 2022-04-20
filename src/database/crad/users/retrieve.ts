import { createSingleConnection } from "../../config/mysqlConnection";
import { userModel } from "../../model/users";

export class userRetrieve {
   
  async retrieveByusername(username:string):Promise<userModel>{
     let sql:string = `SELECT * FROM users as tekila WHERE UserName = ('${username}')`;
     let _userModel = new userModel();
    await this.fetchData(sql).then( (x:any)=>{
      if(x == 0 || x == null) x='null';
      //console.log(x[0].tekila);
      let tekilaUser =  JSON.parse(JSON.stringify(x));
      _userModel.userName= tekilaUser[0].UserName;
      _userModel.userType= tekilaUser[0].UserType;
      _userModel.id= tekilaUser[0].id;
      _userModel.Password= tekilaUser[0].Password;
      _userModel.Token= tekilaUser[0].token;
      
    });
    return _userModel;
  }

       retrieveMaxId() {
     let getconnect = new createSingleConnection();
     let conn =  getconnect.createSingleConnection();
     let idi = 0;
     //let data;

     let _userModel:userModel = new userModel();
     _userModel.setId(4);
     return new Promise(function(resolve, reject) {
     
    
       let sql = (`SELECT MAX(id) as num FROM users`);
        conn.query(sql, function (err, result) {
          if (err) reject(err);
          
      //  _userModel.setId(result[0].num);
        // idi = _userModel.id;
        // console.log('insede qurey'+ idi);
         resolve(result[0].num + 1);
           return result ;
            }); 

           ///console.log("_i_"+data);
       
        });

    
    }


    fetchData(sql:string){

      let getconnect = new createSingleConnection();
      let conn =  getconnect.createSingleConnection();
    
      return new Promise(function(resolve, reject) {     
         conn.query(sql, function (err, result) {
           if (err) reject(err);
          resolve(result);
            return result ;
             }); 
        
         });


    }

}


