

export class authServer{


    Controller(req :any, res: any): any{

        if (req.url == '/auth') { 
             res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
            
             res.write("ok Auth");
             res.end();
             return res;
         
         }
         else if (req.url == "/auth/student") {
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is student Page.</p></body></html>');
            res.end();
        
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

