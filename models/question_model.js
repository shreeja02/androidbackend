var db=require("../dbconnection");
var Question={

getAllQuestion:function(callback){

    return db.query("select * from question_tbl",callback);
},
getQuestionById:function(id,callback){

    return db.query("select * from question_tbl where question_id=?",[id],callback);
},
addQuestion:function(Question,callback)
{
    return db.query("insert into question_tbl values(?,?,?,?,?,?,?)",[Question.question_id,Question.question_title,Question.question_desc,Question.fk_category_id,Question.date,Question.approve,Question.fk_email_id],callback);
},
updateQuestion:function(id,Question,callback)
{
    return db.query("update question_tbl set question_title=?,question_desc=?,fk_category_id=?,date=?,approve=? where question_id=?",[Question.question_title,Question.question_desc,Question.fk_category_id,Question.date,Question.approve,id],callback);
},
deleteQuestion:function(id,callback)
{
    return db.query("delete from question_tbl where question_id=?",[id],callback);
},
deleteAllQuestion:function(item,callback)
{
    var delarr=[];
    for(i=0;i<item.length;i++)
    {
        delarr[i]=item[i].question_id;
    }
    return db.query("select * from question_tbl where question_id IN (?)",[delarr],callback);
}
};
module.exports=Question;
