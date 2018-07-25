var express = require('express');
var router = express.Router();
var data = require('../db.json');


/* GET archive page. */
router.get('/', function(req, res, next) {
  res.render('archive', {data: data.posts, messages: false, });
});


module.exports = router;