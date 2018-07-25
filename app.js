var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
var flash = require('connect-flash');
var session = require('express-session');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(session({
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

var indexRouter = require('./routes/index');

var createRouter = require('./routes/create');
var viewRouter = require('./routes/view');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');
var contactRouter = require('./routes/contact');
var archiveRouter = require('./routes/archive');



app.use('/', indexRouter);

app.use('/create', createRouter);
app.use('/view', viewRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/contact', contactRouter);
app.use('/archive', archiveRouter);


app.use(function (req, res, next) {
    next(createError(404));
})

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};
    res.status(err.status || 500);
    res.render('error');
})

module.exports = app;
