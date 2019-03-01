import React, { Component } from 'react';
//importing components from grommet
import {
    Layer,
    Box,
    Heading,
    FormField,
    TextInput,
    Button,
    
} from "grommet";

import {  Close } from 'grommet-icons';
import axios from 'axios'
import { Z_DEFAULT_COMPRESSION } from 'zlib';


class NotificationSideModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            Notification_type:"",           
             To:"",
            Cc:"",
            error:""
        };
    }

    changehandlernoti=(e)=>{
        e.preventDefault();
        console.log("notification",e.target.value)
        this.setState({
            Notification_type:e.target.value
        })
    }
    changehandlerTo=(e)=>{
        e.preventDefault();
        console.log("To",e.target.value)
        this.setState({
            To:e.target.value
        })
    }
    changehandlerCc=(e)=>{
        e.preventDefault();
        console.log("Cc",e.target.value)
        this.setState({
            Cc:e.target.value
        })
    }
    ssubmit=()=>{
        
        
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
   
    render(){
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
                    <Box flex={false} direction="row" justify="between">
                        <Heading level={2} margin="none">
                            {this.props.header}
                        </Heading>
                        
                        <Button icon={<Close />} onClick={this.props.close} />
                    </Box>
                    <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                        <FormField label="Notification type">
                            <TextInput  onChange={(e)=>this.changehandlernoti(e)} value={this.props.Datum.Notification_type}/>
                        </FormField>
                        <FormField label="To">
                            <TextInput onChange={(e)=>this.changehandlerTo(e)} value={this.props.Datum.To}/>
                        </FormField>
                        <FormField label="Cc">
                            <TextInput  onChange={(e)=>this.changehandlerCc(e)} value={this.props.Datum.Cc}/>
                        </FormField>
                        
                        
                    </Box>
                    
                   
                    <Box direction="row-responsive">
                        <Box flex={false} as="footer" align="start">
                            <Button
                                type="save"
                                label="Save"
                                onClick={this.ssubmit}
                                primary
                            />
                        </Box>
                        <Box flex={false} as="footer" align="start">
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