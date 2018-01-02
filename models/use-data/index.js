module.exports = {
    init:function(call){
        this.req = {session:{},body:{},query:{},headers:{'x-forwarded-for':'127.0.0.1'}};
        this.res = {};
        call && call();
    }
};


