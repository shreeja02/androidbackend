var express=require("express");
var router=express.Router();
var Category=require("../models/category_model");

router.post('/',function(req,res,next){
    Category.deleteAllCategory(req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});
module.exports=router;