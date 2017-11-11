var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Mras*9969",
    database: "burgers_db"
  });  

}

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