const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",

    user: "root",
    password: "abc121",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) console.log(err.stack);
    else console.log("Connected on thread :", connection.threadId);
});

module.exports = connection;