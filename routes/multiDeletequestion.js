var express=require("express");
var router=express.Router();
var Question=require("../models/question_model");

router.post('/',function(req,res,next){
    Question.deleteAllQuestion(req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});
module.exports=router;