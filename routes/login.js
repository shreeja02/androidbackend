var user=require("../models/user_model");
var express=require("express");
var router=express.Router();

router.get('/:id',function(req,res,next){

    user.userLogin(req.params.id,function(err,rows){

      if(err){

          res.json(err);
      }
      else
      {
        res.json(rows);
      }
    });
});

router.post('/',function(req,res,next){

  user.userLoginCheck(req.body,function(err,count){
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