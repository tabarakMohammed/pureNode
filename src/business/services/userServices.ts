import { userInsert } from "../../database/crad/users/Insert";
import { userRetrieve } from "../../database/crad/users/retrieve";
import { userUpdate } from "../../database/crad/users/update";
import { userModel } from "../../database/model/users";
export class userServices{

//   _userInsert:userInsert = new userInsert();
 
//   userServices(userInsert:userInsert){
//       this._userInsert =userInsert;
//   }

   

   insertNewUser(user:userModel):number{
      let _userInsert:userInsert = new userInsert();
    let  id:number =  _userInsert.insertNew(user); 
     return  id;
  }

  updateUserToken(userId:number, userToken:string):string{
    let _userUpdate:userUpdate = new userUpdate();
   
   return  _userUpdate.updateToken(userId,userToken); 
}

getMaxId(){
  let  _userRetrieve:userRetrieve = new userRetrieve();
  return   _userRetrieve.retrieveMaxId();
}

getByusername(userName:string):Promise<userModel>{
  let  _userRetrieve:userRetrieve = new userRetrieve();
  return   _userRetrieve.retrieveByusername(userName);
}


}