import { userServices } from "../business/services/userServices";
import { userInsert } from "../database/crad/users/Insert";
import { userModel } from "../database/model/users";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


export class authServer{


    async Controller(url:any,req :any, res: any): Promise<any>{

              let result = dotenv.config();
                if (result.error) {
                  throw result.error
                }

         if (req.url == '/auth') { 
             res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
              let _userServices = new userServices();
              let _userModel:userModel = new userModel();

              let queryData = await _userServices.getByusername('two');    
              
              console.log(queryData.Password);
              console.log(queryData.userName);
              console.log(queryData.Token);
             // console.log(queryData.getToken);

             res.write("ok Auth");
             res.end();


            // try {
            //   // Get user input
            //   const { email, password } = req.body;
          
            //   // Validate user input
            //   if (!(email && password)) {
            //     res.status(400).send("All input is required");
            //   }
            //   // Validate if user exist in our database
            //   const user =  User.findOne({ email });
          
            //   if (user && ( bcrypt.compare(password, user.password))) {
            //     // Create token
            //     const token = jwt.sign(
            //       { user_id: user._id, email },
            //       process.env.TOKEN_KEY,
            //       {
            //         expiresIn: "2h",
            //       }
            //     );
          
            //     // save user token
            //     user.token = token;
          
            //     // user
            //     res.status(200).json(user);
            //   }
            //   res.status(400).send("Invalid Credentials");
            // } catch (err) {
            //   console.log(err);
            // }

            //  return res;
         
          }
          /*** regester section */
         else if (url[0] == "/auth/reg") {
        //  let datetime = new Date();

          //datetime.toLocaleString()

          if (req.method == 'POST') {
           let data = '';
          req.on('data',(chunk: any) => {
            data += chunk;
          })
          req.on('end', async () => {

         
            if (!(JSON.parse(data).username && JSON.parse(data).password && JSON.parse(data).usertype)) {
              res.status(400).send("All input is required");
            }
            let _userServices = new userServices();

            // check if user already exist
            // Validate if user exist in our database

         /** const oldUser =  _userServices.findOne(JSON.parse(data).username);
        
            if (oldUser) {
              return res.status(409).send("User Already Exist. Please Login");
            }
        */
            
             let encryptedPassword =  bcrypt.hash(JSON.parse(data).password, 10);
             let queryData = _userServices.getMaxId();    
             let _userModel:userModel = new userModel();
           
             queryData.then(async x=>{
               if(x==0 || x == null) x=1;
               console.log(x);
               
              _userModel.setId(x);
             _userModel.setUserName(JSON.parse(data).username);
             _userModel.setPassword(await encryptedPassword);
             _userModel.setUserType(JSON.parse(data).usertype);


             let username =JSON.parse(data).userName;

            
             try{

              if( process.env.TOKEN_KEY != null){
              
             const token = jwt.sign(
              { user_id: _userModel.getId(), user_name:username },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            );
            _userModel.setToken(token);
            _userServices.insertNewUser(_userModel);
              }
            } catch(err)
            
            { }

            res.end();
          });
        });
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

