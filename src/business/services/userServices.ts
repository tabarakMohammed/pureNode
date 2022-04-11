import { userInsert } from "../../database/crad/users/Insert";
import { userModel } from "../../database/model/users";
export class userServices{

//   _userInsert:userInsert = new userInsert();
 
//   userServices(userInsert:userInsert){
//       this._userInsert =userInsert;
//   }

  insertNewUser(user:userModel){
      //this._userInsert.insertNew(user);
      let _userInsert:userInsert = new userInsert();
      _userInsert.insertNew(user);
  }



}