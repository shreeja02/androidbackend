var express = require('express');
 var router = express.Router();
 var search=require('../models/question_model');


router.post('/',function(req,res,next){

console.log(req.body);
search.wherebyQuestionTitle(req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
});

module.exports=router;