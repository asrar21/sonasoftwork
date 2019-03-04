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
    Menu,
    DataTable,
    Text,
    Paragraph
} from "grommet";

import {  Close, FormUp, FormDown } from 'grommet-icons';


class RetentionPolicyModel extends Component {
    constructor(props){
        super(props)
        this.state = {
            notificationOption: "Notification Option",
            conditionName: "Select One",
            collapse: true
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

    collapsePolicySettings(){
        this.setState({
              collapse: !this.state.collapse
        })
    }

    toggleActiveCheckbox(){
        this.setState({
            activeCheckbox: !this.state.activeCheckbox
        })
    }
 
    render() {
        const { notificationOption, conditionName, collapse, activeCheckbox } = this.state
        return (
            <Layer
                position="center"
                // full
                modal
                width="xlarge"
                onClickOutside={this.props.close}
                onEsc={this.props.close}
            >
                <Box
                    as="form"
                    // fill
                    overflow="auto"
                    width="xlarge"
                    pad={{left: "large", right: "large", top: "meium"}}
                    onSubmit={this.props.close}
                >
                    <Box flex={false} direction="row" margin="small" justify="between">
                        <Heading level={2} margin="none">
                            {this.props.header}
                        </Heading>
                        <Button icon={<Close />} onClick={this.props.close} />
                    </Box>
                    <Box flex="grow" align="center">
                        <Text weight="bold">Policy Details</Text>
                    </Box>
                    <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                        <Box border="all" pad={{top:"medium", left: "xlarge", right: "xlarge", bottom: "medium"}} >
                              <FormField label="Policy Name">
                                    <TextInput />
                              </FormField>
                              <FormField label="Retention Period (Days)">
                                    <TextInput type="number"></TextInput>
                              </FormField>
                              <FormField label="Retention Grace Period (Days)">
                                    <TextInput type="number"></TextInput>
                              </FormField>
                              <Box margin="medium">
                                    <CheckBox checked={activeCheckbox} label="Active: " reverse={true} onChange={(e) => { this.toggleActiveCheckbox(e) }}/>
                              </Box>
                        </Box>
                        <Box border="all" pad={{top:"medium", left: "xlarge", right: "xlarge", bottom: "medium"}} margin={{top: 'medium'}} >
                              <Box direction="row-responsive" justify="between" width="medium"  >
                              <Paragraph>Condition Name:</Paragraph>
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
                                    ]} 
                              />
                              </Box>
                              <Box  direction="row" justify="between" width="medium"  >
                              <Paragraph>Condition Type</Paragraph>
                              <Menu dropBackground={{color: "#f0f2f7"}}  label="Select One" items={[
                                          {label: "Select One", onClick: (e) => {this.changeNotificationOption("Select One")}},
                                    ]} />
                              </Box>
                            </Box>
                              <Box direction="row" pad="small" margin="small" justify="around">
                                    <Box flex={false}  margin="small" align="start">
                                        <Button
                                        label="Add"
                                        />
                                    </Box>
                                    <Box flex={false}  margin="small"  align="start">
                                        <Button
                                        label="Cancel"
                                        onClick={() => this.props.close()}
                                        
                                        />
                                    </Box>
                                    <Box flex={false}  margin="small"  align="start">
                                        <Button
                                        label="And"
                                        />
                                    </Box>
                                    <Box flex={false}  margin="small" align="start">
                                            <Button
                                            label="OR"
                                            />
                                    </Box>
                        
                                    <Box flex={false}  margin="small"  align="start">
                                            <Button
                                            label="("
                                            />
                                    </Box>
                                    <Box flex={false}  margin="small" align="start">
                                            <Button
                                            label=")"
                                            />
                                    </Box>
                            
                              </Box>
                        
                        
                        <Box direction="column">
                            <Box justify="end" direction="row" pad="small" margin="small" background="#d3d9e2">    
                                {collapse && <FormUp onClick={() => this.collapsePolicySettings()} />}
                                {!collapse && <FormDown onClick={() => this.collapsePolicySettings()} />}
                            </Box> 
                            {collapse && 
                                <div>
                                    <Box overflow="auto" margin="small" justify="between" >
                                        <DataTable 
                                            overflow="auto"
                                            size="xsmall"
                                            columns={[
                                                {
                                                    property: "edit",
                                                    header: "Edit",
                                                },
                                                {
                                                    property: "conditionName",
                                                    header: "Condition Name",
                                                },
                                                {
                                                    property: "conditionType",
                                                    header: "Condition Type",
                                                },
                                                {
                                                    propert: "conditionValue",
                                                    header: "Condition Value",
                                                }
                                            ]}
                                        />
                                    </Box>
                                    <Box width="200px" alignSelf="center" pad="small" height="200px" >
                                        <Button label="Remove Last Criterea" />
                                    </Box>
                                </div>
                            }
                        </Box>
                    </Box>   
                </Box>
            </Layer>      
        )
    }
};

export default RetentionPolicyModel;
  
  