module.exports = function(err , req , res , next){
    console.log('error');
    console.log(req.url);
    console.log(err.stack || err);
    try{
        if(req.xhr || req.body.__isAjax){
            res.send({ message: err.message || err ,stack : err.stack });
        }else{
            res.send(err);
        }
    }catch(e){

    }
};

