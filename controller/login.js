var express = require('express');
var router = express.Router();
router.post('/reg', function(req, res, next) {
  console.log(req.body);
  if(!req.body.userAccount){
    res.send({message:'用户名不能为空'});
    return false;
  }
  if(!req.body.userPassword){
    res.send({message:'密码不能为空'});
    return false;
  }
  useMysql.searchOne(useSql.common.search('user',{
    userAccount:req.body.userAccount,
  }),function(err , data){
    if(data){
      res.send({message:'用户名已存在'});
      return false;
    }
    useMysql.add(useSql.common.add('user',{
      userAccount:req.body.userAccount,
      userPassword:req.body.userPassword,
    }),function(err , data){
      res.sendSqlData(err , data);
    });
  })
});
router.post('/', function(req, res, next) {
  useMysql.searchOne(useSql.common.search('user',{
    userAccount:req.body.userAccount,
  }),function(err , data){
    if(!data){
      res.send({message:'用户名或密码错误'});
      return false;
    }
    if(data.userPassword !== req.body.userPassword){
      res.send({message:'用户名或密码错误'});
      return false;
    }
    res.sendSqlData(err , data);
  })
});
exports.router = router;

exports.__path = '/login';
