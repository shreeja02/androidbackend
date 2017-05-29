var express=require("express");
var router=express.Router();
var user=require("../models/user_model");

router.post('/',function(req,res,next){
    user.deleteAllUser(req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});
module.exports=router;