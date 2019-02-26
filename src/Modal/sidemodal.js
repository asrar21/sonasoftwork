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
} from "grommet";

import {  Close } from 'grommet-icons';


export default class SideModal extends Component {

    
 
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
                    <TextInput />
                </FormField>
                <FormField label="UserName">
                    <TextInput />
                </FormField>
                <FormField label="Password">
                    <TextInput />
                </FormField>
                <FormField label="Enable Sync">
                    <CheckBox />
                </FormField>
                <FormField label="Azure Users?">
                    <CheckBox />
                </FormField>
                <FormField label="Discover Organizational units">
                    <Box align="" pad="" >
                        <RadioButton
                            label="All"
                            name="radio"
                            
                          
                        />
                        <RadioButton
                            label="Selected"
                            name="radio"
                           
                           
                        />
                    </Box>
                </FormField>
            </Box>
            <Box direction="row-responsive">
                <Box flex={false} as="footer" align="start">
                    <Button
                        type="save"
                        label="Save"
                        onClick={this.onClose}
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
  }
  