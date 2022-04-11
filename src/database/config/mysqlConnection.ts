import * as mysql from 'mysql';



export class createSingleConnection{

    createSingleConnection():mysql.Connection {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'tito',
            password: 'passWord123@',
            database: 'node_schoolx'
        });

          connection.connect(function(err) {
            if (err) {
              return console.error('error: ' + err.message);
            }
            console.log('Connected to the MySQL server.');
          });
          return connection;
    }

static  getConection()   {

    if(createSingleConnection != null) {
       return  new createSingleConnection();
    } else {
        
        console.log(' disconnected to the MySQL server , not opend');

    }

}


}