var question=require("../models/question_model");
var express=require("express");
var router=express.Router();

router.get('/:id?',function(req,res,next){

    if(req.params.id)
    {
        question.getQuestionById(req.params.id,function(err,rows){

            if(err)
            {
             res.json(err);
            }
            else
            {
             res.json(rows);
            }
        });
    }
    else
    {

    question.getAllQuestion(function(err,rows){

        if(err)
        {
             res.json(err);
        }
        else
        {
             res.json(rows);
        }
    });
    }
});

router.post('/',function(req,res,next){

    question.addQuestion(req.body,function(err,count){

  
        if(err)
        {
                res.json(err);
        }
        else
        {
                res.json(count);
        }
    });
});

router.put('/:id',function(req,res,next){

question.updateQuestion(req.params.id,req.body,function(err,count){
  if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
});
});

router.delete('/:id',function(req,res,next){

    question.deleteQuestion(req.params.id,function(err,rows){

  if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }


    });
});
module.exports=router;