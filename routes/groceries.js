const express = require('express');
const router = express.Router();
const GroceryModel = require('../models/GroceryModel.js');

router.get('/', function(req, res, next) {
  GroceryModel.find(function(err, groceries) {
    //The .find will bring back all of the GroceryModel documents
    res.render('index', {
      groceries: groceries
    });
  });
});

router.post('/groceries', function(req, res, next) {
  var grocery = new GroceryModel({
    item : req.body.item,
    qty : req.body.qty
  });
  grocery.save(function(err, grocery) {
    res.redirect('/');
    //Redirecting back to the root will refresh the grocery list with the new item added
  });
});





module.exports = router;
