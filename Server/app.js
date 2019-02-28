

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

     app.get('/adsettings',(req,res)=>{
         r.table('AD_setting').run(conn,(err,result)=>{
             if(err) throw err
             result.toArray((err,Data)=>{
                 if(err){
                     res.status(404).json({
                         error:"no data"

                     })
                 }
                 if(Data){
                     res.status(200).json({
                         Data
                     })
                 }
             })
         })
     })
     app.post('/adsettings',(req,res)=>{
        let data=[
            {
                Domain:req.body.Domain,
                UserName:req.body.UserName,
                Password:req.body.Password,
                Enable:req.body.Enable,
                Azure:req.body.Azure,
                All:req.body.All,
                Selected:req.body.Selected
            }

        ]
        r.table('AD_setting').insert(data).run(conn,(err,result)=>{
           
                if(err) throw err;
                if(result){
                    console.log("AD Setting data is inserted")
                }
           
        })
    })




    app.get('/notification',(req,res)=>{
        r.table('Notification').run(conn,(err,result)=>{
            if(err) throw err
            result.toArray((err,Data)=>{
                if(err){
                    res.status(404).json({
                        error:"no data"

                    })
                }
                if(Data){
                    res.status(200).json({
                        Data
                    })
                }
            })
        })
    })
    app.post('/notification',(req,res)=>{
        let data=[
            {
            Notification_type:req.body.Notification_type ,
            To:req.body.To,
           Cc:req.body.Cc
            }

        ]
        r.table('Notification').insert(data).run(conn,(err,result)=>{
           
                if(err) throw err;
                if(result){
                    console.log("data is inserted")
                }
           
        })
    })
    

})
   


         
        
               
          
     
            
app.listen(4001)