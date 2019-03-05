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

            Enable: false,
            Azure: false,
            Domain:"",
            Username: "",
            Password: "",
            
            All: false,
            Selected: false,
            status: true

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
                            <TextInput  onChange={(e)=>this.setState({Domain:e.target.value})}/>
                        </FormField>
                        <FormField label="UserName">
                            <TextInput  onChange={(e)=>this.setState({Username:e.target.value})} />
                        </FormField>
                        <FormField label="Password">
                            <TextInput  onChange={(e)=>this.setState({Password:e.target.value})}/>
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
                                        checked={this.state.Enable}
                                        onChange={(event) => this.setState({ Enable: true })} />
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
                                        checked={this.state.Azure}
                                        onChange={(event) => this.setState({ Azure: true })} />
                                </Box>

                            </Box>
                        </Box>

                        <Box margin={{ top: "medium" }}>
                            <Text>Discover Organizational units</Text>
                        </Box>
                        <Box align="" pad="" direction="row-responsive" gap="small">

                            <RadioButton

                           
                                label="All"
                                name="radio"
                                checked={this.state.All}
                                onChange={(event) => this.setState({ All: true })} />
                            
                            <RadioButton
                                label="Selected"
                                name="radio"
                                checked={this.state.Selected}
                                onChange={(event) => this.setState({ Selected: true })} />
                           
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