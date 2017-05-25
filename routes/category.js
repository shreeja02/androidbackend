var category=require("../models/category_model");
var express=require("express");
var router=express.Router();

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        category.getCategoryById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
    }
    else{
    category.getAllCategory(function(err,rows){
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
    category.addCategory(req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});
router.put('/:id',function(req,res,next){
    category.updateCategory(req.params.id,req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});
router.delete('/:id',function(req,res,next){
    category.deleteCategory(req.params.id,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

module.exports=router;