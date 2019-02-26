import React, { Component } from 'react';
//importing components from grommet
import {
    Layer,
    Box,
    Heading,
    FormField,
    TextInput,
    Button,
    CheckBox,
    Menu
} from "grommet";

import {  Close } from 'grommet-icons';


class contentPageModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            notificationOption: "Notification Option",
            conditionName: "Condition Name"
        }
    }

    changeNotificationOption(value){
        this.setState({
            notificationOption: value
        })
    }

    changeConditionName(value){
        this.setState({
            conditionName: value
        })
    }
 
    render() {
        const { notificationOption, conditionName } = this.state
      return (
        <Layer
            position="right"
            full="vertical"
            modal
            onClickOutside={this.props.close}
            onEsc={this.props.close}
        >
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
                <FormField label="Policy Name">
                    <TextInput />
                </FormField>
                <FormField label="Policy Description">
                    <TextInput />
                </FormField>
                <Box margin="medium">
                    <CheckBox label="Enable: " reverse={true} onChange={(event) => {/* event.target.checked */}}/>
                </Box>
                <FormField></FormField>
                <Box margin="medium" border={{side: "all", size: "xsmall", color: "grey"}}>
                    <Menu dropBackground={{color: "#f0f2f7"}} label={notificationOption} items={[
                            {label: "Don't Notify", onClick: (e) => {this.changeNtificationOption(e)}},
                            {label: "Notify Immediately", onClick: () => {}},
                            {label: "Delayed Notification", onClick: () => {}}
                        ]} />
                </Box>
                <Box margin="medium" border={{side: "all", size: "xsmall", color: "grey"}}>
                    <Menu dropBackground={{color: "#f0f2f7"}} label={conditionName} items={[
                            {label: "Sender", onClick: () => {this.changeConditionName("Sender")}},
                            {label: "Sender Date", onClick: (e) => {this.changeConditionName("Sender Date")}},
                            {label: "Subject", onClick: (e) => {this.changeConditionName("Subject")}},
                            {label: "Mail Size", onClick: (e) => {this.changeConditionName("Mail Size")}},
                            {label: "Priority", onClick: (e) => {this.changeConditionName("Priority")}},
                            {label: "Received Date", onClick: (e) => {this.changeConditionName("Received Date")}},
                            {label: "Attachement Count", onClick: (e) => {this.changeConditionName("Attachement Count")}},
                            {label: "Lock Option", onClick: (e) => {this.changeConditionName("Lock Option")}},
                            {label: "Public Folder Option", onClick: (e) => {this.changeConditionName("Public Folder Option")}},
                            {label: "Message Expiry Option", onClick: (e) => {this.changeConditionName("Message Expiry Option")}},
                            {label: "To", onClick: (e) => {this.changeConditionName("To")}},
                            {label: "Cc", onClick: (e) => {this.changeConditionName("Cc")}},
                            {label: "Bcc", onClick: (e) => {this.changeConditionName("Bcc")}},
                            {label: "Label", onClick: (e) => {this.changeConditionName("Label")}},
                            {label: "Body", onClick: (e) => {this.changeConditionName("Body")}},
                            {label: "Attachment Name", onClick: (e) => {this.changeConditionName("Attachment Name")}},
                            {label: "Attachement Size", onClick: (e) => {this.changeConditionName("Attachement Size")}},
                            {label: "Attachement", onClick: (e) => {this.changeConditionName("Attachement")}},
                            {label: "Expiry Date", onClick: (e) => {this.changeConditionName("Expiry Date")}},
                            {label: "Standard Body", onClick: (e) => {this.changeConditionName("Standard Body")}},
                        ]} />
                </Box>
                <Box margin="medium" border={{side: "all", size: "xsmall", color: "grey"}}>
                    <Menu dropBackground={{color: "#f0f2f7"}}  label="Condition Type" items={[
                            {label: "Select One", onClick: (e) => {this.changeNotificationOption("Select One")}},
                        ]} />
                </Box>

                <FormField label="Condition Value">
                    <TextInput />
                </FormField>
                
                
            </Box>
                <Box direction="row" justify="between">
                    <Box > 
                        <Box flex={false} as="footer" margin="small" align="start">
                            <Button
                                label="Add"
                            />
                        </Box>
                        <Box flex={false} as="footer" margin="small"  align="start">
                            <Button
                                label="Cancel"
                                onClick={() => this.props.close()}
                                
                            />
                        </Box>
                    </Box>

                    <Box > 
                        <Box flex={false} as="footer" margin="small"  align="start">
                            <Button
                                label="And"
                            />
                        </Box>
                        <Box flex={false} as="footer" margin="small" align="start">
                            <Button
                                label="OR"
                            />
                        </Box>
                    </Box>

                    <Box > 
                        <Box flex={false} as="footer" margin="small"  align="start">
                            <Button
                                label="("
                            />
                        </Box>
                        <Box flex={false} as="footer" margin="small" align="start">
                            <Button
                                label=")"
                            />
                        </Box>
                    </Box>
            </Box>
            
        </Box>
    </Layer>
      
    
      )
    }
  };

  export default contentPageModal;
  
  