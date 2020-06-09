var express = require('express');
var router = express.Router();

// require modules 
var customer_controller = require('../controllers/customers_controller');

// customer routes 

//get home page 
router.get('/', customer_controller.index);

//GET request for getting all customers 
// router.get('/customers', customer_controller.get_all_customers);


module.exports = router;

