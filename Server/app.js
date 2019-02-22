

const express = require('express');
 

 
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Credentials',"true");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
});
r=require('rethinkdb')
r.connect({host:'localhost',port:28015},function(err,conn){
    if(err)throw err;
    console.log(conn);
    r.db('test').tableCreate('users').run(conn,function(err,res){
        if(err) throw err;
        console.log(res);
    
    let data=[
      {name:"Syed Mohammad asrar alam",Email:"asrara@sonasoft.com",pasword:"abc123"},
      {name:"Faizan Khurshid",Email:"faizan@sonasoft.com",pasword:"faizan123"},
      {name:"Hafsa",Email:"hafsan@sonasoft.com",pasword:"hafsa123"},

    ]

        r.table('user').insert(data).run(conn,function(err,res){
            if(err) throw err;
            console.log(res);
        });
    
        app.post("/getuser" ,(req,res)=>{
            console.log("email req",req.body)
            r.table('user').filter(r.row('Email').eq(req.body.Email)).run(conn,(err,result)=>{
               
                result.toArray((err,data)=>{
                    if(data){
                    res.status(200).json({
                        data:data
                    })
                }
                if(err){
                    res.status(404).json({
                        error:'invalid'
                    })
                }
                  
                })
            })
      
    });
})

    });


         
        
               
          
     
            
app.listen(4001)