var Customer = require('../models/appmodel');

exports.index = function(req, res, next) {
	Customer.get_all_customers(function (err, customers){
		if (err) {
			console.log(err);
		};
		// Successful 
		res.render('index', {customers : customers});
	});
};

// exports.get_all_customers = function(req,res) {
// 	Customer.get_all_customers(function(err,customer){
// 		console.log('controller');
// 		if(err) 
// 			res.send(err);
// 			console.log('res', customer);
// 		res.send(customer);
// 	});
// };	

exports.addNewCustomer = function(req, res){
	var new_customer = new Customer(req.body);
	if (!new_customer){
		res.status(400).send({ error:true, message: 'Please provide customer' });
	} else {
		Customer.addNewCustomer(new_customer, function(err, customer){
			if(err)
				res.send(err);
			res.json(customer);
		});
	}
};




