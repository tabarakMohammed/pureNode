import { userServices } from "../business/services/userServices";
import { userInsert } from "../database/crad/users/Insert";
import { userModel } from "../database/model/users";


export class authServer{


    Controller(url:any,req :any, res: any): any{

        if (req.url == '/auth') { 
             res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
            
             res.write("ok Auth");
             res.end();
             return res;
         
         }
         else if (url[0] == "/auth/reg") {

       

          if (req.method == 'POST') {
           let data = '';
          req.on('data',(chunk: any) => {
            data += chunk;
          })
          req.on('end', () => {
            console.log(JSON.parse(data).userName + JSON.parse(data).studentId ); 
           
            let datetime = new Date();
             let _userServices = new userServices();
             let _userModel:userModel = new userModel();
             _userModel.setUserName(JSON.parse(data).userName);
             _userModel.setStudentID(JSON.parse(data).studentId);
             _userModel.setRegisterDate(datetime.toLocaleString());
             _userModel.setUserType(JSON.parse(data).userType);
            // _userServices.insertNewUser(_userModel);
            res.end(data);
          })
        } else {
          res.end('Invalid Request!');
                }

        
        }
        else if (req.url == "/auth/admin") {
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is admin Page.</p></body></html>');
            res.end();
        
        }
        else
            res.end('Invalid Request!');
    
    }

    }

  








 
 //6 - listen for any incoming requests

