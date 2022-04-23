import { verifyToken } from "../business/services/verifyctionTokens";


export class homeController{


    Controller(req :any, res: any): any{
        let veryToken = new verifyToken();
        
                     /*** homeeeeeeeeeeeeeeeeeeeeeeeeeee ===================> */
        if (req.url == '/home') { 

            if (req.method == 'POST') {

                let next = "welcome to home";
                let s = veryToken.verifyToken(req,res,next);
              
               if(s == next){
                 let data = '';
                req.on('data',(chunk: any) => {
                  data += chunk;
                  console.log("ddddd" + data)
                })
        
                try{
                req.on('end', async () => {
                   console.log("ddddd"+JSON.parse(data).token)
                });
                
                return res.end("kk");

                 } catch(err){ return res.end("theres is an error");}
               }

               else {res.statusCode = 401;
                   return res.end(s);}

             } else {  
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');

            return res.end("was not post");
                    }
         }

                     /*** studeeeeeeeeeeeeeeeeeent ===================> */
         else if (req.url == "/home/student") {
            
            if (req.method == 'POST') {

                let next = "welcome to student home";
                let s = veryToken.verifyToken(req,res,next);
                res.end(s);
            }else{
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            return res.end("was not post");
                  }
        }

                 /*** admiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin ===================> */

        else if (req.url == "/home/admin") {
            
            if (req.method == 'POST') {

                let next = "welcome to admin home";
                let s = veryToken.verifyToken(req,res,next);
                res.end(s);
            } else { 
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            return res.end("was not post");
                  }
        }
        else
            res.end('Invalid Request!');
    
    }

    }

  








 

