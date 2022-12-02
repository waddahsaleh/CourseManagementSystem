const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "Kentrell",
    password: "abc123",
    database: "coursemanagement"

    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "coursemanagement"
})

module.exports = db;
