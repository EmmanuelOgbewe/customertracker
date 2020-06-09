var mysql = require('mysql');

var config = ({
	connectionLimit : 10,
	host: 'localhost',
	user: 'root',
	password: 'Enter you password',
	database: 'Enter your database name'
});

var pool = mysql.createPool(config);


pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
  pool.end(function(err){
	if (err) throw err;
	console.log("All connections in pool have ended");
	});
});

exports.pool = pool;
exports.config = config;

