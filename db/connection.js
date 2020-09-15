const mysql = require('mysql');
const env = require('node-env-file');
env(__dirname + '/.env');

const connectObj= {
    host: `${process.env.MYHOST}`,
    user: `${process.env.MYUSER}`,
    password: `${process.env.MYPASSWORD}`,
    database: `${process.env.MYDATABASE}`,
    port: `${process.env.MYPORT}`,
   

};

let dbConn = mysql.createConnection(connectObj);


try {

    dbConn.connect(function(err){
        if (err) { 
             if (err === 'PROTOCOL_CONNECTION_LOST'){
                dbConn = mysql.createConnection(connectObj);
                console.log("Base de datos corriendo");
             }
                       
            throw err;
         }else{
        console.log("Base de datos corriendo");
        
        }
    });
    
    
} catch (error) {
    return error;
}


module.exports = dbConn;