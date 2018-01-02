module.exports = function(req , res , next){
    useData.getUserInfo(req.session , function(userInfo){
        if(userInfo && userInfo.subscribe - 0 === 1){
            next();
        }else{
            res.send({
                message:'请先关注公众号！',
            });
        }
    } , req , res);
};