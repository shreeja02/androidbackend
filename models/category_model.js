var db=require("../dbconnection");
var Category={

    getAllCategory:function(callback){
        return db.query("select * from category_tbl",callback);
    },
    getCategoryById:function(id,callback){
        return db.query("select * from category_tbl where category_id=?",[id],callback);
    },
    addCategory:function(Category,callback){
        return db.query("insert into category_tbl values(?,?)",[Category.category_id,Category.category_name],callback);
    },
    updateCategory:function(id,Category,callback){
        return db.query("update category_tbl set category_name=? where category_id=?",[Category.category_name,id],callback);
    },
    deleteCategory:function(id,callback){
        return db.query("delete from category_tbl where category_id=?",[id],callback);
    },
    deleteAllCategory:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].category_id;
        }
        return db.query("delete from category_tbl where category_id IN (?)",[delarr],callback);
    }
};
module.exports=Category;