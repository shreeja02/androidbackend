var answer=require("../models/answer_model");
var express=require("express");
var router=express.Router();

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        answer.getAnswerByEmailId(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
    else{
    answer.getAllAnswer(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
});

router.post('/',function(req,res,next){
    answer.addAnswer(req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

router.put('/:id',function(req,res,next){
    answer.updateAnswer(req.params.id,req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

router.delete('/:id',function(req,res,next){
    answer.deleteAnswer(req.params.id,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

module.exports=router;