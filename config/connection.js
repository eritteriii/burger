var mysql = require("mysql");
var connection;

connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ear16721",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
});

module.exports = connection;
