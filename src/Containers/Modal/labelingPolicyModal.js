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
    DataTable
} from "grommet";

import {  Close, FormUp, FormDown } from 'grommet-icons';


class labelingPolicyModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            label: "Label",
            conditionName: "Condition Name",
            collapse: true
        }
    }

    changeLabel(value){
        this.setState({
            label: value
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
 
    render() {
        const { label, conditionName, collapse } = this.state
        return (
            <Layer
                position="center"
                full
                modal
                onClickOutside={this.props.close}
                onEsc={this.props.close}
            >
                <Box
                    as="form"
                    fill="vertical"
                    overflow="auto"
                    pad={{left: "xlarge", right: "xlarge", top: "small"}}
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
                        <Box margin="medium" border={{side: "all", size: "xsmall", color: "grey"}}>
                            <Menu dropBackground={{color: "#f0f2f7"}} label={label} items={[
                                    {label: "Add New", onClick: (e) => {this.changeLabel("Add New")}},
                                    {label: "test", onClick: () => {this.changeLabel("test")}},
                                    {label: "test2", onClick: () => {this.changeLabel("test2")}},
                                    {label: "Crowdfunder", onClick: () => {this.changeLabel("Crowdfunder")}},
                                    {label: "ActOn", onClick: () => {this.changeLabel("ActOn")}},
                                    {label: "DELL", onClick: () => {this.changeLabel("DELL")}},
                                    {label: "King School", onClick: () => {this.changeLabel("King School")}},
                                    {label: "Daily Inspiration", onClick: () => {this.changeLabel("Daily Inspiration")}}
                                ]} />
                        </Box>
                        <Box margin="medium">
                            <CheckBox label="Enable: " reverse={true} onChange={(event) => {/* event.target.checked */}}/>
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
                                    {label: "Select One", onClick: (e) => {}},
                                ]} />
                        </Box>

                        <FormField label="Condition Value">
                            <TextInput />
                        </FormField>
                        

                        <Box direction="row" border="bottom" justify="between">
                            <Box > 
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
                            </Box>

                            <Box > 
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
                            </Box>

                            <Box > 
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
                                        <Button label="Remove Last Criterea"  primary />
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

export default labelingPolicyModal;
  
  