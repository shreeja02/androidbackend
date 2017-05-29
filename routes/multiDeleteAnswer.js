var express=require("express");
var router=express.Router();
var Answer=require("../models/answer_model");

router.post('/',function(req,res,next){
    Answer.deleteAllAnswer(req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});
module.exports=router;