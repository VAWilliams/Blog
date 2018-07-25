var express = require('express');
var router = express.Router();
var data = require('../db.json');

let signedIn = false;
let messages = "";


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});


module.exports = router;