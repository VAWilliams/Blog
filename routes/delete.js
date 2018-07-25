var express = require('express');
var router = express.Router();
var data = require('../db.json');
var request = require("request");

router.get('/:i', function(req, res, next){
    
    var n = req.params.i;

    //make a post request to our database
    request({
        //try using `http://localhost:8080/posts${n}`
        url: `http://localhost:8080/posts/${n}`,
        method: "DELETE"
    })

    req.flash('success', 'Successfully deleted!');
    res.redirect('/');

});

module.exports = router;