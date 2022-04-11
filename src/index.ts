import {baseServer} from './baseServer'
import  {createSingleConnection}  from './database/config/mysqlConnection'
  
const hostname = "127.0.0.1";
const port = 3000;

let _baseServer = new baseServer();


_baseServer.getServer().listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });
