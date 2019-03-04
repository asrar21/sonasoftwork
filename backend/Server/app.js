

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
                Username:req.body.UserName,
                Password:req.body.Password,
                Enable:req.body.Enable,
                Azure:req.body.Azure,
                All:req.body.All,
                Selected:req.body.Selected,
                status:req.body.status
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

    //Email Server
    r.db('test').tableCreate('EmailServer').run(conn, (err,res)=>{
        if(err) throw err;
        console.log(res)
        app.post('/EmailServer',(req,res)=>{
            let data=[
                {
                    domainName: req.body.domainName,
                    exchangeVersion: req.body.exchangeVersion,
                    exchangeServicePack: req.body.exchangeServicePack,
                    emailServer:req.body.emailServer,
                    JournalMailbox:req.body.JournalMailbox,
                   
                    JournalPassword:req.body.JournalPassword,
                    Frequency:req.body.Frequency,
                    Enable:req.body.Enable,
                    archivepublicFolder:req.body.archivepublicFolder,
                    stubEnabled:req.body.stubEnabled,
                    excludeHours:req.body.excludeHours,
                    journalLogon: req.body.journalLogon,
                   status:req.body.status
                  },
    
            ]
            r.table('EmailServer').insert(data).run(conn,(err,result)=>{
               
                    if(err) throw err;
                    if(result){
                        console.log(" Email server data is inserted")
                    }
               
            })
            app.get('/EmailServer',(req,res)=>{
                r.table('EmailServer').run(conn,(err,result)=>{
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

    });
    

})
//content identification
r.db('test').tableCreate('ContentIdentification').run(conn, (err,res)=>{
    if(err) throw err;
    console.log(res)
    app.post('/ContentIdentification',(req,res)=>{
        let data=[
            {
                notificationOption: req.body.notificationOption,
            conditionName: req.body.conditionName,
            
            PolicyName:req.body.PolicyName,
            Conditionalvalue:req.body.Conditionalvalue,
           
            PolicyDescription:req.body.PolicyDescription,
            PolicyName:req.body.PolicyName,
              name: req.body.PolicyName,
            notificationType:req.body.notificationOption,
              notificationDelay: "-",
             enabled: req.body.enabled,
          },

        ]
        r.table('ContentIdentification').insert(data).run(conn,(err,result)=>{
           
                if(err) throw err;
                if(result){
                    console.log(" Contentidentification data is inserted")
                }
           
        })
        app.get('/ContentIdentification',(req,res)=>{
            r.table('ContentIdentification').run(conn,(err,result)=>{
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

});


})
//labeling policy
r.db('test').tableCreate('LabelingPolicy').run(conn, (err,res)=>{
    if(err) throw err;
    console.log(res)
    app.post('/LabelingPolicy',(req,res)=>{
        let data=[
            {
                policyName: req.body.policyName,
                LabelName: req.body.LabelName,
                status: req.body.status,
                conditionName:req.body.conditionName,
                Enable:req.body.Enable,
            Conditionvalue:req.body.Conditionvalue
          },

        ]
        r.table('LabelingPolicy').insert(data).run(conn,(err,result)=>{
           
                if(err) throw err;
                if(result){
                    console.log(" LabelingPolicy data is inserted")
                }
           
        })
        app.get('/LabelingPolicy',(req,res)=>{
            r.table('LabelingPolicy').run(conn,(err,result)=>{
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

});


})
//Retention Policy
r.db('test').tableCreate('RetentionPolicy').run(conn, (err,res)=>{
    if(err) throw err;
    console.log(res)
    app.post('/retentionPolicyData',(req,res)=>{
        let data=[
            {
                notificationOption:req.body.notificationOption,
                conditionName: req.body.conditionName,
                
                retentionPeriod: req.body.retentionPeriod,
                name:req.body.name,
                retentionGracePeriod: req.body.retentionGracePeriod,
                conditionValue: req.body.conditionValue,
                status: req.body.status
          },

        ]
        r.table('RetentionPolicy').insert(data).run(conn,(err,result)=>{
           
                if(err) throw err;
                if(result){
                    console.log("Retention Policy data is inserted")
                }
           
        })
        app.get('/retentionPolicyData',(req,res)=>{
            r.table('RetentionPolicy').run(conn,(err,result)=>{
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

});


})
r.db('test').tableCreate('user').run(conn, (err,res)=>{
    if(err) throw err;
    console.log(res)
})
r.db('test').tableCreate('AD_setting').run(conn, (err,res)=>{
    if(err) throw err;
    console.log(res)
})
r.db('test').tableCreate('Notification').run(conn, (err,res)=>{
    if(err) throw err;
    console.log(res)
})




})
   


         
        
               
          
     
            
app.listen(4001)