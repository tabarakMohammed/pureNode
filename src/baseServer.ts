
import * as http from 'http';
import { exit } from 'process';
import { adminController } from './controllers/adminController';
import { authServer } from './controllers/authController';
import { homeController } from './controllers/homeController';



export class baseServer{

   getServer()  {
   return http.createServer(function (req, res) {  
           
     let authChecker,homeChecker,adminChecker = false;
     
     let  regexp = new RegExp('/auth\w*\\?*');
     let xurl = req.url? req.url: "x";
     console.log(xurl);
     authChecker = regexp.test(xurl);
     console.log(authChecker);
      if(!authChecker){
        regexp = new RegExp('/home\w*');
        xurl = req.url? req.url: "x";
        homeChecker = regexp.test(xurl);
      } if(!homeChecker){
        regexp = new RegExp('/admin\w*');
        xurl = req.url? req.url: "x";
        adminChecker = regexp.test(xurl);
      }else {
          exit;
      }

      
  
        if (authChecker) {  
          let url = req.url?.split('='); 
          // if(url!=null){         console.log(url[2])
          // }
            let auth =  new authServer;
            auth.Controller(url,req,res);
        }else if (homeChecker) {   
            let home = new homeController;
            home.Controller(req,res);
        } else if (adminChecker) {
            let admin = new adminController;
           admin.Controller(req,res); 
        }
        else
            res.end('Invalid Request!');
    
    });



}



}

 

