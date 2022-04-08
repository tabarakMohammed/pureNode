import {baseServer} from './baseServer'

const hostname = "127.0.0.1";
const port = 3000;

let _baseServer = new baseServer();

_baseServer.getServer().listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });


// var trigger = "/auth/kk",
// regexp = new RegExp('/auth\w*'),
// test = regexp.test(trigger);
// console.log(test + ""); // will display true