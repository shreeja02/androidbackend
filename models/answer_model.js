var db=require("../dbconnection");
var Answer={

     getAllAnswer:function(callback){
        return db.query("select * from answer_tbl",callback);
    },

getAllAnswerByUser:function(id,callback){
        return db.query("select * from answer_tbl where fk_email_id=?",[id],callback);
    },

    getAllAnswerqueuserjoin:function(callback){
        return db.query("select q.*,a.*,u.* from answer_tbl as a,question_tbl as q,user_and_tbl as u where a.fk_que_id=q.question_id and a.fk_email_id=u.email_id",callback);
    },
    getAnswerById:function(id,callback){
        return db.query("select * from answer_tbl where answer_id=?",[id],callback);
    },

getAnswerByEmailId:function(id,callback){
        return db.query("select * from answer_tbl where fk_email_id=?",[id],callback);
    },
    getAnswerByIduserjoin:function(id,callback){
        return db.query("select q.*,a.*,u.* from answer_tbl as a,question_tbl as q,user_and_tbl as u where a.fk_que_id=q.question_id and a.fk_email_id=u.email_id and answer_id=?",[id],callback);
    },


    addAnswer:function(Answer,callback){
        var dt=new Date();
        var x=dt.getDate()+"-";
        x+=(dt.getMonth()+1)+"-";
        x+=dt.getFullYear();
        return db.query("insert into answer_tbl values(?,?,?,?,?)",[Answer.answer_id,Answer.answer,Answer.fk_que_id,Answer.fk_email_id,x],callback);
    },

    updateAnswer:function(id,Answer,callback){

        var dt=new Date();
        var x=dt.getDate()+"-";
        x+=(dt.getMonth()+1)+"-";
        x+=dt.getFullYear();

        return db.query("update answer_tbl set answer=?,fk_que_id=?,fk_email_id=?,date=? where answer_id=?",[Answer.answer,Answer.fk_que_id,Answer.fk_email_id,x,id],callback);
    },

    deleteAnswer:function(id,callback){
        return db.query("delete from answer_tbl where answer_id=?",[id],callback);
    },

    deleteAllAnswer:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
            delarr[i]=item[i].answer_id;
        }
        return db.query("delete from answer_tbl where answer_id IN (?)",[delarr],callback);
    },

    getAnswerByQueId:function(id,callback){

    return db.query("select a.*,u.* from answer_tbl as a,user_and_tbl as u where a.fk_email_id=u.email_id and a.fk_que_id=?",[id],callback);
    }

};
module.exports=Answer;