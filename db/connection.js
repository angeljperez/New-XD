const mysql = require('mysql');
const env = require('node-env-file');
env(__dirname + '/.env');

const connectObj= {
    host: `${process.env.MYHOST}`,
    user: `${process.env.MYUSER}`,
    password: `${process.env.MYPASSWORD}`,
    database: `${process.env.MYDATABASE}`,
    port: `${process.env.MYPORT}`

};

const dbConn = mysql.createConnection(connectObj);

try {

    dbConn.connect(function(err){
        if (err) return err;
        console.log("Base de datos corriendo");
    });
    
} catch (error) {
    return error;
}

module.exports = dbConn;