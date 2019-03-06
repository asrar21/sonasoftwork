import React, { Component } from 'react';
//importing components from grommet
import {
    Layer,
    Box,
    Heading,
    FormField,
    TextInput,
    Button,
    Text
    
} from "grommet";

import {  Close } from 'grommet-icons';
import axios from 'axios'



class NotificationSideModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            Notification_type: this.props.Datum ? this.props.Datum.Notification_type : "",           
            To: this.props.Datum ? this.props.Datum.To : "",
            Cc: this.props.Datum ? this.props.Datum.Cc : "",
            errorNotification:"",
            errorTo:"",
            errorCc:"",
            
        };
    }

    changehandler=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    Validate=()=>{
        let errorNotification="";
        if(!this.state.Notification_type){
            errorNotification="donot leave blank textfield";

        }  
        if(errorNotification){
            this.setState({errorNotification})
            return false;
        }
        return true;

    }

    postData = () => {
        
            axios({
                method: 'post',
                url: 'http://localhost:4001/notification',
                data: {
                    Notification_type:this.state.Notification_type ,
                    To:this.state.To,
                   Cc:this.state.Cc
                },
                header:{'Content-Type': 'application/json'}
              });
       
        

    }
    async onsubmit(){
        
        
        try{
            const respose = await axios.post('http://localhost:4001/notification', {
                Notification_type:this.state.Notification_type ,
                    To:this.state.To,
                   Cc:this.state.Cc
              });

              if(respose){
                  this.props.update();
              }
          
           
        }
        catch (e){
            console.log(e)

        }
        }
   
    render(){
        const { Notification_type, To, Cc } = this.state;
        return (
            <Layer
                position="right"
                full="vertical"
                modal
                onClickOutside={this.props.close}
                onEsc={this.props.close}>
                <Box
                    as="form"
                    fill="vertical"
                    overflow="auto"
                    width="medium"
                    pad="medium"
                    onSubmit={this.props.close}
                >
                <Box><Box flex={false} direction="row" justify="between">
                        <Heading level={2} margin="none">
                            {this.props.header}
                        </Heading>
                        
                        <Button icon={<Close />} onClick={this.props.close} />
                    </Box>
                    <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                        <FormField label="Notification type">
                            <TextInput   value={ Notification_type} name="Notification_type" onChange={(e)=>this.changehandler(e)} />
                            
                        </FormField>
                        <Text color="red">{this.state.errorNotification}</Text>
                        
                        <FormField label="To">
                            <TextInput  value={To} name="To" onChange={(e)=>this.changehandler(e)}/>
                        </FormField>
                        
                        <FormField label="Cc">
                            <TextInput   value={Cc} name="Cc" onChange={(e)=>this.changehandler(e)} />

                        </FormField>
                        
                        </Box>
                        
                    </Box>
                    
                    
                   
                    <Box direction="row-responsive" gap="small">
                        <Box  as="footer" align="start" gap="small">
                            <Button
                                type="save"
                                label="Save"
                                onClick={()=>this.onsubmit()}
                                primary
                            />
                        </Box>
                        <Box  as="footer" align="start">
                            <Button
                                type="Cancel"
                                label="Cancel"
                                onClick={this.onClose}
                                Default
                            />
                        </Box>
                    </Box>
                </Box>
        </Layer>
        )
    }
};
  
export default NotificationSideModal;