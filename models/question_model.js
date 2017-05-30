var db=require("../dbconnection");
var Question={

getAllQuestion:function(callback){

    return db.query("select * from question_tbl",callback);
},
questionByCategoryId:function(id,callback){

    return db.query("select * from question_tbl where fk_category_id=?",[id],callback);
},
getQuestionById:function(id,callback){

    return db.query("select * from question_tbl where question_id=?",[id],callback);
},
addQuestion:function(Question,callback)
{

        var dt=new Date();
        var x=dt.getDate()+"-";
        x+=(dt.getMonth()+1)+"-";
        x+=dt.getFullYear();

    return db.query("insert into question_tbl(question_title,question_desc,fk_category_id,date,apporve,fk_email_id) values(?,?,?,?,?,?)",[Question.question_title,Question.question_desc,Question.fk_category_id,x,Question.apporve,Question.fk_email_id],callback);
},
updateQuestion:function(id,Question,callback)
{

     var dt=new Date();
        var x=dt.getDate()+"-";
        x+=(dt.getMonth()+1)+"-";
        x+=dt.getFullYear();

    return db.query("update question_tbl set question_title=?,question_desc=?,fk_category_id=?,date=?,apporve=? where question_id=?",[Question.question_title,Question.question_desc,Question.fk_category_id,x,Question.apporve,id],callback);
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
