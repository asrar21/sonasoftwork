import React, { Component } from 'react';
//importing components from grommet
import {
    Layer,
    Box,
    Heading,
    FormField,
    RadioButton,
    TextInput,
    Button,
    CheckBox,
    Text
} from "grommet";

import {  Close } from 'grommet-icons';
import axios from 'axios';


class ADSettingsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
           Domain:"",
           UserName:"",
           Password:"",
           Enable:false,
           Azure:false,
           All:false,
           Selected:false,
           status:true
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
    onsubmit=()=>{
        axios({
            method: 'post',
            url: 'http://localhost:4001/adsettings',
            data: {
                Domain:this.state.Domain,
           UserName:this.state.UserName,
           Password:this.state.Password,
           Enable:this.state.Enable,
           Azure:this.state.Azure,
           All:this.state.All,
           Selected:this.state.Selected,
           status:this.state.status
            },
            header:{'Content-Type': 'application/json'}
          });
        }
 
    render() {
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
                    onSubmit={this.onClose}>
                    <Box flex={false} direction="row" justify="between">
                        <Heading level={2} margin="none">
                            {this.props.header}
                        </Heading>
                        <Button icon={<Close />} onClick={this.props.close} />
                    </Box>
                    <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                        <FormField label="Domain">
                            <TextInput onChange={(e)=>this.setState({Domain:e.target.value})} value={this.props.Datum.Domain} />
                        </FormField>
                        <FormField label="UserName">
                            <TextInput onChange={(e)=>this.setState({UserName:e.target.value})} value={this.props.Datum.UserName}/>
                        </FormField>
                        <FormField label="Password">
                            <TextInput type="password" onChange={(e)=>this.setState({Password:e.target.value})} value={this.props.Datum.Password}  />
                        </FormField>
                        <Box direction="row-responsive">
                        <Text>Enable Sync:</Text>

                        
                            <CheckBox  checked={this.state.Enable}
                                  onChange={(event) => this.setState({ Enable:true ,  })} value={this.props.Datum.Enable}/>
                            </Box>
                           < Box direction="row-responsive">
                        <Text>Azure Users?:</Text>

                        
                            <CheckBox checked={this.state.Azure}
                                  onChange={(event) => this.setState({ Azure:'Azure user' ,  })} value={this.props.Datum.Azure}/>
                            </Box>
                        <Box> 
                            <Text>Discover Organizational units</Text>
                            <Box align="" pad="" >
                                <RadioButton
                                    label="All"
                                    name="radio"
                                    checked={this.state.All}
                                  onChange={(event) => this.setState({ All:'All' ,  })}
                                />
                                <RadioButton
                                    label="Selected"
                                    checked={this.state.Seleted}
                                   onChange={(event) => this.setState({ Selected: 'Selected',  })}
                                />
                            </Box>
                            </Box>
                    </Box>
                    <Box direction="row-responsive">
                        <Box flex={false} as="footer" align="start">
                            <Button
                                type="save"
                                label="Save"
                                onClick={this.onsubmit}
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
  
export default ADSettingsModal;