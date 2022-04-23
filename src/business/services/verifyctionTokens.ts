import jwt from "jsonwebtoken";
import dotenv from 'dotenv';



export class verifyToken {


verifyToken(req:any, res:any, next:any){

  let result = dotenv.config();
  if (result.error) {
    throw result.error
  }
try{
  let acessToken = req.headers['authorization'].split('Bearer');
  const token = acessToken[1].trim();

  
  if (!token) {
     return next ="A token is required for authentication";
   }

 
   
    if( process.env.TOKEN_KEY != null){
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    }
 
  }
  
  catch (err) {
   
    return next = "Invalid Token";
  }



  return next;
};



}




