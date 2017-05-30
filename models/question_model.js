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
    return db.query("insert into question_tbl(question_title,question_desc,fk_category_id,date,apporve,fk_email_id) values(?,?,?,?,?,?)",[Question.question_title,Question.question_desc,Question.fk_category_id,Question.date,Question.apporve,Question.fk_email_id],callback);
},
updateQuestion:function(id,Question,callback)
{
    return db.query("update question_tbl set question_title=?,question_desc=?,fk_category_id=?,date=?,apporve=? where question_id=?",[Question.question_title,Question.question_desc,Question.fk_category_id,Question.date,Question.apporve,id],callback);
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
},
getQusUserJoin:function(id,callback)
{
    return db.query("Select q.*,u.* from question_tbl as q,user_and_tbl as u where q.fk_email_id=u.email_id and q.question_id=?",[id],callback);
}
};
module.exports=Question;
