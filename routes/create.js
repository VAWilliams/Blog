var express = require('express');
var router = express.Router();
var data = require('../db.json');
var request = require("request");

var d = data.posts;


//GET create page. 
router.get('/', function(req, res, next){
    res.render('create', {title: "New Blog", message: false});
});


router.post('/', function(req, res, next){
    //test if data is coming through
    // res.send(req.body);

    //set a new dynamic id
    var id = Number(d[d.length-1].id) + 1;

    id.toString();
    console.log(id);
    console.log(d);
    

    var date = new Date();
    var cTime = date.getTime();
    var cDate = date.getDate();

    var cDateFull = cTime + cDate;

    //make a post request to our database
    request({
        url: "http://localhost:8080/posts",
        method: "POST",
        form:{
            id: id,
            title: req.body.title,
            url: req.body.url,
            content: req.body.content,
            author: req.body.author,
            date: cDateFull
        }, function(error, response, body) {
            //console.log(body);
            //send a response message
            res.render('/', {messages: 'Successfully Added.'});
        }
    })
    res.redirect('/')
});

module.exports = router;