
var sql = require('../models/db.js');
var mysql = require('mysql');

var Customer = function(customer){
	this.customer = customer;
	this.id = customer.id;
	this.name = customer.name;
	this.email = customer.email;
	this.created_at = new Date(); 

}
Customer.get_all_customers = function (result) {
	sql.query('SELECT * FROM customers',function(err, res){
		if(err){
			console.log('error' + err);
			result(null, err);
		} else {
			console.log(res);
			result(null, res);
		}
	})
}

Customer.addNewCustomer = function(customer, result){
	sql.query('INSERT INTO customers set ?', customer, function(err, res){
		if (err){
			console.log(err);
			result(err,null);
		} else {
			console.log(res.insertId);
			result(null,res.insertId)
		}
	})
}

sql = mysql.createPool(sql.config);

module.exports = Customer; 
