

var mongodb = require("mongodb");

var MongoClient = mongodb.MongoClient;

// var DB_CONN_STR = "mongodb://localhost:27017/cd1706";
var DB_CONN_STR = "mongodb://120.78.188.31:27017/picture";
module.exports = {
    conn:function(callback){
        MongoClient.connect(DB_CONN_STR,(err,db)=>{
            if(err){
                console.log("数据库访问失败");
                
                callback(err,null);
            }else{
                console.log("数据库连接成功Q");
                callback(null,db);
            }
        })
    }
}