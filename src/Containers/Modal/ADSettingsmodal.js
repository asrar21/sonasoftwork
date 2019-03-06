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

import { Close } from 'grommet-icons';
import axios from 'axios'


class ADSettingsModal extends Component {

    constructor(props) {
        super(props)
        this.state = {

            Enable: props.Datum ? props.Datum.Enable:false,
            Azure: props.Datum ? props.Datum.Azure:false,
            Domain:props.Datum ? props.Datum.Domain:"",
            Username: props.Datum ? props.Datum.Username:"",
            Password: props.Datum ? props.Datum.Password:"",
            
            All: props.Datum ? props.Datum.All:false,
            Selected: props.Datum ? props.Datum.Selected:false,
            status: props.Datum ? props.Datum.status:true

        }

    }

    onsubmit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4001/adsettings',
            data: {
                Enable: this.state.Enable,
                Azure: this.state.Azure,
                Domain:this.state.Domain,
                Username: this.state.Username,
                Password: this.state.Password,
                
                All: this.state.All,
                Selected: this.state.Selected,
                status: this.state.status
            },
            header: { 'Content-Type': 'application/json' }
        });
    }
    changehandler=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {Enable,Azure,Domain,Username,Password,All,Selected,status}=this.state
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
                            <TextInput value={Domain} name="Domain" onChange={(e)=>{this.changehandler(e)}}/>
                        </FormField>
                        <FormField label="UserName">
                            <TextInput value={Username} name="Username" onChange={(e)=>{this.changehandler(e)}} />
                        </FormField>
                        <FormField label="Password">
                            <TextInput   value={Password}  name="Password" onChange={(e)=>{this.changehandler(e)}}/>
                        </FormField>
                        <Box direction="row"
                        >
                            <Box width="small"
                                margin={{ left: "small" }}>
                                <Text>
                                    Enable Sync:
                                         </Text>
                            </Box>
                            <Box direction="row">
                                <Box >
                                    <CheckBox
                                    value={Enable}
                                        checked={this.state.Enable}
                                        name="Enable"
                                        onChange={(e)=>{this.changehandler(e)}} />
                                </Box>

                            </Box>
                        </Box>
                        <Box direction="row"
                            margin={{ top: "small" }}>
                            <Box width="small"
                                margin={{ left: "small" }}>
                                <Text>
                                    Azure Users? :
                                         </Text>
                            </Box>
                            <Box direction="row">
                                <Box >
                                    <CheckBox
                                    value={Azure}
                                        checked={this.state.Azure}
                                        name="Azure"
                                        onChange={(e)=>{this.changehandler(e)}} />
                                </Box>

                            </Box>
                        </Box>

                        <Box margin={{ top: "medium" }}>
                            <Text>Discover Organizational units</Text>
                        </Box>
                        <Box align="" pad="" direction="row-responsive" gap="small">

                            <RadioButton
                            value={All}

                           
                                label="All"
                                name="radio"
                                checked={this.state.All}
                                name="All"
                                onChange={(e)=>{this.changehandler(e)}} />
                            
                            <RadioButton
                            value={Selected}
                                label="Selected"
                                name="radio"
                                checked={this.state.Selected}
                                name="Selected"

                                onChange={(e)=>{this.changehandler(e)}} />
                           
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