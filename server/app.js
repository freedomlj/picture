var express  =  require("express");

var cookieParser = require('cookie-parser');   // 方便操作cookies
var bodyParser = require('body-parser');   //  获取 请求的参数  
var async = require("async");

var app = express();   //获取所有express 对象

var server  = require("http").createServer(app);

var host = "localhost";

// var host = "192.169.1.1";  // 开发环境

// var host = "172.18.83.147" ;  // 内网地址

var port = 7100;


app.use(bodyParser.json());    // 接口  http://localhost:7000/login?username=qwer  ajax  req.body 
app.use(bodyParser.urlencoded({ extended: false })); // form 表单提交 
app.use(cookieParser());

// 处理跨域方法 jsonp
app.all('*',function(req,res,next){
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});

var getDb = require("./db");

app.get("/recommend",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var recommend = db.collection("recommend");
        recommend.find({},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            res.send(result[0]);
            db.close();
        })
    })
})

app.get("/new",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var news = db.collection("new");
        news.find({},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            res.send(result[0]);
            db.close();
        })
    })
})

app.get("/classify",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var classify = db.collection("classify");
        classify.find({},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            res.send(result[0]);
            db.close();
        })
    })
})

app.get("/Lhot",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var Lhot = db.collection("Lhot");
        Lhot.find({},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            res.send(result[0]);
            db.close();
        })
    })
})

app.get("/Lclassify",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var Lclassify = db.collection("Lclassify");
        Lclassify.find({},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            res.send(result[0]);
            db.close();
        })
    })
})

app.get("/Lnew",(req,res)=>{
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var Lnew = db.collection("Lnew");
        Lnew.find({},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            res.send(result[0]);
            db.close();
        })
    })
})

app.get("/tag",(req,res)=>{
    console.log(req.query)
    var id = req.query.id;
    console.log(id)
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var tag = db.collection("tag");
        tag.find({"res.album.id":id},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            console.log(result)
            res.send(result);
            db.close();
        })
    })
})

app.get("/classDetail",(req,res)=>{
    var collection = req.query.collection;
    console.log(collection)
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var classify = db.collection(collection);
        classify.find({},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log("查询成功");
            res.send(result[0]);
            db.close();
        })
    })
})

app.get("/dianzan",(req,res)=>{   // 点赞
    var collection = req.query.collection;
    var id = req.query.id;
    console.log(collection)
    console.log(id)
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据连接成功")
        var classify = db.collection(collection);
        console.log(collection.slice(0,1))
        if(collection.slice(0,1)=="L"){
            classify.update({"res.wallpaper.id":id},{
                $inc:{"res.wallpaper.$.favs":1}
            },(err,result)=>{
                console.log("点赞成功11")
                res.send("111")
            })
        }else{
            classify.update({"res.vertical.id":id},{
                $inc:{"res.vertical.$.favs":1}
            },(err,result)=>{
                console.log("点赞成功11")
                res.send("111")
            })
        }
        
            
        // async.series([
        //     function(callback){
        //         console.log(id)
        //         classify.find({},{"res.vertical":1}).forEach((item)=>{
        //             console.log(item.id)
        //             if(item.id==id){
        //               console.log("id================="+item.id)
                
        //                 item.favs++;
        //             }
        //             classify.save(item)
        //         })
        //         callback(null)
        //     },
        //     function(callback){
        //         classify.find({_id:0}).toArray((err,result)=>{
        //             if(err)throw err;
        //             callback(null,result)
                    
        //         })
        //     }
        // ],
        //     function(err,result){
        //         if(err) throw err;
        //         res.send(result);
        //         db.close()
        // })
    })
})

app.get("/udianzan",(req,res)=>{
    var email = req.query.email;
    console.log("==========")
    console.log(req.query);
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var user = db.collection("udianzan");
            var data = {email:email}
            user.find(data,{_id:0}).toArray((err,result)=>{
                if(err) throw err;
                console.log("udianzan数据查询成功");
                console.log(result);
                res.send(result);
                db.close();
            })
        }
    })
})

app.post("/udianzan",(req,res)=>{
    var email = req.body.params.email;
    var id = req.body.params.id;
    console.log("==========")
    console.log(req.body);
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var user = db.collection("udianzan");
            async.waterfall([
                function(callback){
                    console.log("888888888")
                    user.find({email:email},{_id:0}).toArray((err,result)=>{
                        if(err) throw err;
                        if(result.length>0){
                            callback(null,"1")   // 1 点过赞
                        }else{
                            callback(null,"0")   //  0 没点过
                        }
                    })
                }
            ],function(err,result){
                if(result=="1"){
                    user.update({email:email},{
                        $push:{zan:{id:id}}
                    },(err,result)=>{
                        console.log("插入成功111");
                    })
                }else{
                    user.insert({email:email,zan:[{id:id}]},(err,result)=>{
                        console.log("点赞成功222");
                    })
                }
            })
        }
    })
})


app.post("/ucollect",(req,res)=>{
    var email = req.body.params.email;
    var id = req.body.params.id;
    console.log("==========")
    console.log(req.body);
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var user = db.collection("udianzan");
            async.waterfall([
                function(callback){
                    console.log("888888888")
                    user.find({email:email},{_id:0}).toArray((err,result)=>{
                        if(err) throw err;
                        if(result.length>0){
                            callback(null,"1")   // 1 点过赞
                        }else{
                            callback(null,"0")   //  0 没点过
                        }
                    })
                }
            ],function(err,result){
                if(result=="1"){
                    user.update({email:email},{
                        $push:{collect:{id:id}}
                    },(err,result)=>{
                        console.log("插入成功111");
                    })
                }else{
                    user.insert({email:email,zan:[{id:id}]},(err,result)=>{
                        console.log("点赞成功222");
                    })
                }
            })
        }
    })
})



app.get("/login",(req,res)=>{
    var email = req.query.email;
    var password = req.query.password;
    console.log("==========")
    console.log(req.query);
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var user = db.collection("user");
            var data = {email:email,password:password}
            user.find(data,{_id:0}).toArray((err,result)=>{
                if(err) throw err;
                console.log("user数据查询成功");
                console.log(result);
                res.send(result);
                db.close();
            })
        }
    })
});

app.post("/register",(req,res)=>{
    var email = req.body.params.email;
    var name = req.body.params.name;
    var password = req.body.params.password;
    console.log("==========")
    console.log(req.body);
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            async.waterfall([
                function(callback){
                    var user = db.collection("user");
                    user.find({email:email},{_id:0}).toArray((err,result)=>{
                        if(err) throw err;
                        console.log("user数据查询成功");
                        console.log(result);
                        console.log(result.length);
                        if(result.length>0){  //用户名已注册
                            callback(null,"0");
                        }else{
                            callback(null,"1")    //用户名没注册
                        }
                    })
                },
                function(arg,callback){
                    if(arg=="1"){
                        var user = db.collection("user");
                        var data = {email:email,name:name,password:password,imgid:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510564291295&di=e5637533a2d98dd35017ff6908cd7fd8&imgtype=0&src=http%3A%2F%2Fdynamic-image.yesky.com%2F600x-%2FuploadImages%2Fupload%2F20140904%2Fupload%2F201409%2Ftjy5wfredwijpg.jpg"}
                        user.insert(data,(err,result)=>{
                            if(err) throw err;
                            console.log("注册成功");
                            callback(null,"1");   //注册成功
                        })
                    }else{
                        callback(null,"0");   // 注册失败
                    }
                }
            ],function(err,result){
                res.send(result);
                db.close();
            })
            
        }
    })
});


app.post("/imgid",(req,res)=>{
    var email = req.body.params.email;
    var imgid = req.body.params.imgid;
    console.log("==========")
    console.log(req.body);
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var user = db.collection("user");
            user.update({email:email},{
                $set:{
                    imgid:imgid
                }
            },(err,result)=>{
                if(err) throw err;
                console.log("img插入成功");
                res.send("1")
            })
        }
    })
})


app.get("/userinfo",(req,res)=>{
    var email = req.query.email;
    console.log("==========")
    console.log(req.query);
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            var user = db.collection("user");
            var data = {email:email}
            user.find(data,{_id:0}).toArray((err,result)=>{
                if(err) throw err;
                console.log("user数据查询成功");
                console.log(result);
                res.send(result);
                db.close();
            })
        }
    })
});












app.post("/add",(req,res)=>{
    var list = req.body.params.list;
    getDb.conn((err,db)=>{
        if(err) throw err;
        console.log("数据库连接成功")
        var demo = db.collection("demo");
        demo.insert({list:list},(err,result)=>{
            if(err) throw err;
            console.log("插入成功")
            res.send("插入成功")
            db.close();
        })
    })
})

app.get("/del",(req,res)=>{
    var list = req.query.list
    getDb.conn((err,db)=>{
        if(err){
            res.send("数据库错误");
        }else{
            console.log("数据库连接成功")
            console.log(list)
            var demo = db.collection("demo");
            demo.deleteOne({list:list},(err,result)=>{
                if(err) throw err;
                console.log("删除成功");
                res.send("删除成功")
                db.close();
            })
        }
    })
})






// vue 


// react


// angular























server.listen(port,host,()=>{
    console.log(`Server is running  at http://${host}:${port}`);
})