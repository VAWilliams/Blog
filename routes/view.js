var express = require('express');
var router = express.Router();
var data = require('../db.json');

let arrayData = data.posts;




/* GET view page. */
router.get('/:i', function(req, res, next) {

  for (let m = 0; m < arrayData[arrayData.length-1].id; m++) {
    if (arrayData[m].id == req.params.i) {
        
      res.render('view', { selected: arrayData[m] });

    }
  }

});


module.exports = router;