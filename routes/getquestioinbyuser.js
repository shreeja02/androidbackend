var question=require("../models/question_model");
var express=require("express");
var router=express.Router();

router.get('/:id',function(req,res,next){

    
        question.getQuestionByUser(req.params.id,function(err,rows){

            if(err)
            {
             res.json(err);
             console.log(err);
            }
            else
            {
                console.log(rows);
             res.json(rows);
            }
        });
    });
    module.exports=router;
