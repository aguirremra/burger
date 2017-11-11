var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err){
  	console.error("error connecting: " + err.stack);
  	return;
  }
  console.log("connected as id " + connection.threadId + "\n");
  var sql = "CREATE TABLE IF NOT EXISTS burgers"+
            "(id INTEGER(11) AUTO_INCREMENT NOT NULL, "+
            "burger_name VARCHAR(50), "+
            "devoured BOOLEAN DEFAULT FALSE, "+
            "currdatetime DATETIME DEFAULT CURRENT_TIMESTAMP, "+
            "PRIMARY KEY (id));";        
  connection.query(sql, function (err, result) {
    if (err){
     console.log(err); 
    }
  });
});

module.exports = connection;