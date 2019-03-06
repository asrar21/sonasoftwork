

const express = require('express');



const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    next();
});
r = require('rethinkdb')
r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
    if (err) throw err;
    console.log(conn);


//userapi
    app.post("/getuser", (req, res) => {
        console.log("email req", req.body)
        r.table('user').filter(r.row('Email').eq(req.body.Email)).run(conn, (err, result) => {

            result.toArray((err, data) => {
                if (data) {
                    res.status(200).json({
                        data: data
                    })
                }
                if (err) {
                    res.status(404).json({
                        error: 'invalid'
                    })
                }

            })
        })

    })
//ADSetting api
    app.get('/adsettings', (req, res) => {
        r.table('AD_setting').run(conn, (err, result) => {
            if (err) throw err
            result.toArray((err, Data) => {
                if (err) {
                    res.status(404).json({
                        error: "no data"

                    })
                }
                if (Data) {
                    res.status(200).json({
                        Data
                    })
                }
            })
        })
    })
    app.post('/adsettings', (req, res) => {
        let data = [
            {
                Enable: req.body.Enable,
                Azure: req.body.Azure,
                Domain: req.body.Domain,
                Username: req.body.Username,
                Password: req.body.Password,

                All: req.body.All,
                Selected: req.body.Selected,
                status: req.body.status
            }

        ]
        r.table('AD_setting').insert(data).run(conn, (err, result) => {

            if (err) throw err;
            if (result) {
                console.log("AD Setting data is inserted")
            }

        })
    })



//Notification api
    app.get('/notification', (req, res) => {
        r.table('Notification').run(conn, (err, result) => {
            if (err) throw err
            result.toArray((err, Data) => {
                if (err) {
                    res.status(404).json({
                        error: "no data"

                    })
                }
                if (Data) {
                    res.status(200).json({
                        Data
                    })
                }
            })
        })
    })
    app.post('/notification', (req, res) => {
        let data = [
            {
                Notification_type: req.body.Notification_type,
                To: req.body.To,
                Cc: req.body.Cc
            }

        ]
        r.table('Notification').insert(data).run(conn, (err, result) => {

            if (err) throw err;
            if (result) {
                res.status(200).json({
                    result
                })
            }

        })
    })

    //Email Server
    // r.db('test').tableCreate('EmailServer').run(conn, (err,res)=>{
    //     if(err) throw err;
    //     console.log(res)
    app.post('/EmailServer', (req, res) => {
        let data = [
            {
                domainName: req.body.domainName,
                exchangeVersion: req.body.exchangeVersion,
                exchangeServicePack: req.body.exchangeServicePack,
                emailServer: req.body.emailServer,
                JournalMailbox: req.body.JournalMailbox,

                JournalPassword: req.body.JournalPassword,
                Frequency: req.body.Frequency,
                Enable: req.body.Enable,
                archivepublicFolder: req.body.archivepublicFolder,
                stubEnabled: req.body.stubEnabled,
                excludeHours: req.body.excludeHours,
                journalLogon: req.body.journalLogon,
                status: req.body.status
            },

        ]
        r.table('EmailServer').insert(data).run(conn, (err, result) => {

            if (err) throw err;
            if (result) {
                res.status(200).json({
                    result
                })
            }

        })
    });
    app.get('/EmailServer', (req, res) => {
        r.table('EmailServer').run(conn, (err, result) => {
            if (err) throw err
            result.toArray((err, Data) => {
                if (err) {
                    res.status(404).json({
                        error: "no data"

                    })
                }
                if (Data) {
                    res.status(200).json({
                        Data
                    })
                }
            })
        })
    })





    //content identification
    // r.db('test').tableCreate('ContentIdentification').run(conn, (err,res)=>{
    //     if(err) throw err;
    //     console.log(res)
    app.post('/ContentIdentification', (req, res) => {
        let data = [
            {
                notificationOption: req.body.notificationOption,
                conditionName: req.body.conditionName,

                PolicyName: req.body.PolicyName,
                Conditionalvalue: req.body.Conditionalvalue,

                PolicyDescription: req.body.PolicyDescription,
                PolicyName: req.body.PolicyName,
                name: req.body.PolicyName,
                notificationType: req.body.notificationOption,
                notificationDelay: "-",
                enabled: req.body.enabled,
            },

        ]
        r.table('ContentIdentification').insert(data).run(conn, (err, result) => {

            if (err) throw err;
            if (result) {
                res.status(200).json({
                    result
                })
            }

        })
    })
    app.get('/ContentIdentification', (req, res) => {
        r.table('ContentIdentification').run(conn, (err, result) => {
            if (err) throw err
            result.toArray((err, Data) => {
                if (err) {
                    res.status(404).json({
                        error: "no data"

                    })
                }
                if (Data) {
                    res.status(200).json({
                        Data
                    })
                }
            })
        })






        
        app.post('/LabelingPolicy', (req, res) => {
            let data = [
                {
                    policyName: req.body.policyName,
                    LabelName: req.body.LabelName,
                    status: req.body.status,
                    conditionName: req.body.conditionName,
                    Enable: req.body.Enable,
                    Conditionvalue: req.body.Conditionvalue
                },

            ]
            r.table('LabelingPolicy').insert(data).run(conn, (err, result) => {

                if (err) throw err;
                if (result) {
                   res.status(200).json({
                       result
                   })
                }

            })
        })

        app.get('/LabelingPolicy', (req, res) => {
            r.table('LabelingPolicy').run(conn, (err, result) => {
                if (err) throw err
                result.toArray((err, Data) => {
                    if (err) {
                        res.status(404).json({
                            error: "no data"

                        })
                    }
                    if (Data) {
                        res.status(200).json({
                            Data
                        })
                    }
                })
            })








            
            app.post('/retentionPolicyData', (req, res) => {
                let data = [
                    {
                        notificationOption: req.body.notificationOption,
                        conditionName: req.body.conditionName,

                        retentionPeriod: req.body.retentionPeriod,
                        name: req.body.name,
                        retentionGracePeriod: req.body.retentionGracePeriod,
                        conditionValue: req.body.conditionValue,
                        status: req.body.status
                    },

                ]
                r.table('RetentionPolicy').insert(data).run(conn, (err, result) => {

                    if (err) throw err;
                    if (result) {
                       res.status(200).json({
                           result
                       })
                    }

                })
            })

            app.get('/retentionPolicyData', (req, res) => {
                r.table('RetentionPolicy').run(conn, (err, result) => {
                    if (err) throw err
                    result.toArray((err, Data) => {
                        if (err) {
                            res.status(404).json({
                                error: "no data"

                            })
                        }
                        if (Data) {
                            res.status(200).json({
                                Data
                            })
                        }
                    })
                })
            })
        })
    })





//archiveHistory api

    app.get('/archivehistory', (req, res) => {
        r.table('ArchiveHistory').run(conn, (err, result) => {
            if (err) throw err
            result.toArray((err, Data) => {
                if (err) {
                    res.status(404).json({
                        error: "no data"

                    })
                }
                if (Data) {
                    res.status(200).json({
                        Data
                    })
                }
            })
        })
    })
//archive Store api
    app.get("/archiveStore", (req, res) => {
        r.table('ArchiveStore').run(conn, (err, response) => {
            if (err) throw err
            response.toArray((err, data) => {
                res.status(200).json({
                    data
                })
            })
        })
    })

    //Stub Policy
    app.post("/stubpolicy", (req, res) => {
        let data = [{
            name: req.body.name,
            description: req.body.description,
            stubPeriod: req.body.stubPeriod,
            priority: req.body.priority,
            activeCheckbox: req.body.activeCheckbox
        }


        ]
        r.table("StubPolicy").insert(data).run(conn, (err, result) => {
            if (err) throw err
           res.status(200).json({
               result
           })

        })
    })
    app.get("/stubpolicy", (req, res) => {
        r.table("StubPolicy").run(conn, (err, response) => {
            if (err) throw err
            response.toArray((err, Data) => {
                res.status(200).json({
                    Data

                })
            })
        })
    })
    //StubPolicyAvailableMailbox


        
      
    app.get("/stubpolicyavailablemailbox", (req, res) => {
        r.table("StubPolicyAvailableMailbox").run(conn, (err, response) => {
            if (err) throw err
            response.toArray((err, Data) => {
                res.status(200).json({
                    Data

                })
            })
        })
    })
    //usermanagement
    app.post("/usermanagement", (req, res) => {
        let data = [{
            role:req.body.role ,
           
            userName:req.body.userName,
            displayName:req.body.displayName,
            userType:req.body.userType,
            mailbox:req.body.mailbox
        }


        ]
        r.table("UserManagement").insert(data).run(conn, (err, result) => {
            if (err) throw err
           res.status(200).json({
               result
           })

        })
    })
    app.get("/usermanagement", (req, res) => {
        r.table("UserManagement").run(conn, (err, response) => {
            if (err) throw err
            response.toArray((err, Data) => {
                res.status(200).json({
                    Data

                })
            })
        })
    })





})














app.listen(4001)