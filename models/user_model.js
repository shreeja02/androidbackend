var db=require("../dbconnection");
var User={

    getAllUser:function(callback){
        return db.query("select * from user_and_tbl",callback);
    },
    getUserById:function(id,callback)
    {
        return db.query("select * from user_and_tbl where email_id=?",[id],callback);
    },
    addUser:function(User,callback)
    {
        return db.query("insert into user_and_tbl values(?,?,?,?,?,?)",[User.email_id,User.user_name,User.password,User.user_photo,User.mobile_no,User.gender],callback);
    },
    updateUser:function(id,User,callback)
    {
        return db.query("update user_and_tbl set user_name=?,user_photo=?,mobile_no=?,gender=? where email_id=?",[User.user_name,User.user_photo,User.mobile_no,User.gender,id],callback);

    },
    deleteUser:function(id,callback)
    {
        return db.query("delete from user_and_tbl where email_id=?",[id],callback);
    },
    deleteAllUser:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length();i++)
        {
            delarr[i]=item[i].email_id;
        }
        return db.query("delete from user_and_tbl where email_id IN (?)",[delarr],callback);

    }

};

module.exports=User;