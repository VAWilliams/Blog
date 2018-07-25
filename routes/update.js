var express = require('express');
var router = express.Router();
var data = require('../db.json');
var request = require("request");

let arrayData = data.posts;



//GET update page. 
router.get('/:i', function(req, res, next){

    //checking the id of each post and when it matches the parameter, its index is used
    // if you did not do this, one a post is deleted, the indexing would break
    for (let m = 0; m < arrayData[arrayData.length-1].id; m++) {
        if (arrayData[m].id == req.params.i) {
            
          res.render('update', { selected: arrayData[m] });
    
        }
    }

});


router.post('/:i', function(req, res, next){

    var n = req.params.i;

    var date = new Date();
    var cTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var cDate = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

    var cDateFull = cTime + " " + cDate;

    //make a post request to our database
    request({
        //try using `http://localhost:8080/posts${n}`
        url: `http://localhost:8080/posts/${n}`,
        method: "PATCH",
        form: {
            title: req.body.title,
            url: req.body.url,
            content: req.body.content,
            author: req.body.author,
            date: cDateFull
        }, function(error, response, body) {
            //console.log(body);
            //send a response message
            res.render('/index', {messages: 'Successfully Updated.'});
        }
    })

    res.redirect('/');

});

module.exports = router;