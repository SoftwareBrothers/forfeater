require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var oauthServer = require('node-oauth2-server');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vendorsRouter = require('./routes/vendors');
var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');
var choicesRouter = require('./routes/choices');

const mySqlConnection = require('./databaseHelpers/mySqlWrapper');
const accessTokenDBHelper = require('./databaseHelpers/accessTokensDBHelper')(mySqlConnection)
const userDBHelper = require('./databaseHelpers/userDBHelper')(mySqlConnection);

var oAuthModel = require('./oauth/models')(userDBHelper, accessTokenDBHelper);
var app = express();
app.oauth = oauthServer({
    model: require('./oauth/models_v2'),
    grants: ['password'],
    debug: true
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var authRouter = require('./routes/auth')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/vendors', vendorsRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/choices', choicesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(app.oauth.errorHandler());

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
