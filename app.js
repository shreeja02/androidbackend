var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var login=require('./routes/login');
var category=require('./routes/category');
var question = require('./routes/question');
var multiDeletequestion = require('./routes/multiDeletequestion');
var multiDeleteUser = require('./routes/multiDeleteUser');
var answer = require ('./routes/answer');
var delallanswer= require ('./routes/multiDeleteAnswer');
var ansque_userjoin= require('./routes/ansque_userjoin');
var answerbyquestid=require('./routes/answerbyqusid');
var qususer=require('./routes/qususerjoin');
var questionbycatid=require('./routes/questionbycatid');
var answerbyuser=require('./routes/getallanswerbyuser');
var changepass=require('./routes/changepassword');
var questionbyuser=require('./routes/getquestioinbyuser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/login',login);

app.use('/muldelanswer',delallanswer);
app.use('/question', question);
app.use('/multiDeletequestion', multiDeletequestion);
app.use('/multiDeleteUser', multiDeleteUser);
app.use('/answer',answer);
app.use('/ansque_userjoin',ansque_userjoin);
app.use('/answerbyquestid',answerbyquestid);
app.use('/qususer',qususer);
app.use('/questionbycatid',questionbycatid);
app.use('/getallanswerbyuser',answerbyuser);
app.use('/changepassword',changepass);
app.use('/category',category);
app.use('/questionbyuser',questionbyuser);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
