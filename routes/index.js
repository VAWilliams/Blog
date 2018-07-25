var express = require('express');
var router = express.Router();
var data = require('../db.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data: data.posts, messages: false, });
});


module.exports = router;