var user_change=require("../models/user_model");
var express=require("express");
var router=express.Router();

router.post('/:id',function(req,res,next){

    user_change.changePassword(req.params.id,req.body,function(err,rows){

      if(err){

          res.json(err);
      }
      else
      {
        res.json(rows);
      }
    });
});
module.exports=router;