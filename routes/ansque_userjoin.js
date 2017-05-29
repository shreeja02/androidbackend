var express = require('express');
var router = express.Router();
var ansque_userjoin=require('../models/answer_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
ansque_userjoin.getAnswerByIduserjoin(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
ansque_userjoin.getAllAnswerqueuserjoin(function(err,rows){
 
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

 module.exports=router;
