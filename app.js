
var express = require('express'),
	path = require('path'),
	logger = require('morgan'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	app = express();
global.__ROOT__ = __dirname;
global.publicDir = process.env.NODE_ENV?'dist':'dist';
global.viewDir = process.env.NODE_ENV?'dist':'dist';
app.use(function(req , res , next){
	var method = req.method;
	//非get post不进入后面逻辑
	if(method != 'GET' && method != 'POST'){
		res.status(useCodeEnum.HTTP_CODE_405[0]).end();
		return;
	}
	next();
});
//静态文件目录
app.use(express.static(path.join(__dirname, publicDir)));

app.use(session({
  secret: 'young',
  resave: false,
  cookie: {
    expires:24 * 3600
  }
}));
//记录请求时间过长的链接  总时间
app.use(function(req,res,next){
	//带。的链接 在静态文件目录找不到的情况下 直接返回404
	if(req.path.indexOf('.') != -1){
		console.log('file url 404');
		res.status(useCodeEnum.HTTP_CODE_404[0]).end();
		return
	}
	var startTime = new Date();
	var calResponseTime = function () {
		var deltaTime = new Date() - startTime;
		if(deltaTime > 5000){
			console.log(req.baseUrl + req.path + '  deltaTime ' + deltaTime);
		}
	};
	res.once('finish', calResponseTime);
	res.once('close', calResponseTime);
	return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('views', path.join(__dirname, viewDir));
app.engine('.htm',require('ejs').__express);
app.set('view engine', 'htm');
//不需要打印静态文件请求
app.use(logger('dev'));

process.on('uncaughtException', function (err) {
	console.error('process uncaughtException');
	console.error(err);
});
process.on('error', function (err) {
	console.error('process error');
	console.error(err);
});
var useModel = global.useModel = require('./models');


useModel.init(app , function(){
});

module.exports = app;
