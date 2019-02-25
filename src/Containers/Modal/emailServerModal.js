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


class emailServerModal extends Component {

    
 
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
            onSubmit={this.props.close}
        >
            <Box flex={false} direction="row" justify="between">
                <Heading level={2} margin="none">
                    {this.props.header}
                  </Heading>
                <Button icon={<Close />} onClick={this.props.close} />
            </Box>
            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                <FormField label="Email Server">
                    <TextInput />
                </FormField>
                <FormField label="Journal Mailbox">
                    <TextInput />
                </FormField>
                <FormField label="Journal Login">
                    <TextInput />
                </FormField>
                <FormField label="Journal Password">
                    <TextInput />
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
  };

  export default emailServerModal;
  
