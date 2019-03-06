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
import axios from 'axios'


class contentPageModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            notificationOption: "Notification Option",
            conditionName: "Condition Name",
            collapse: true,
            PolicyName:"",
            Conditionalvalue:"",
            Enable:false,
            PolicyDescription:"",
            
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
  async add(){
        
        try{
    const response=await axios({
        method: 'post',
        url: 'http://localhost:4001/ContentIdentification',
        data: {
            notificationOption: this.state.notificationOption,
            conditionName: this.state.conditionName,
            
            PolicyName:this.state.PolicyName,
            Conditionalvalue:this.state.Conditionalvalue,
           
            PolicyDescription:this.state.PolicyDescription,
           
              name: this.state.PolicyName,
            notificationType:this.state.notificationOption,
            notificationDelay: "-",
             enabled: this.state.Enable,

        },
        header:{'Content-Type': 'application/json'}
      });
      if(response){
          this.props.update()
      }
    }
    catch (e){
        console.log(e)
    }
    }
    render() {
        const { notificationOption, conditionName, collapse } = this.state
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
                            <TextInput onChange={(e)=>{this.setState({PolicyName:e.target.value})}} />
                        </FormField>
                        <FormField label="Policy Description">
                            <TextInput onChange={(e)=>{this.setState({PolicyDescription:e.target.value})}}/>
                        </FormField>
                        <Box margin="medium">
                            <CheckBox label="Enable: " reverse={true} onChange={(event) => {this.setState({Enable:"true"})}}/>
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
                                ]} 
                            />
                        </Box>
                        <Box margin="medium" border={{side: "all", size: "xsmall", color: "grey"}}>
                            <Menu dropBackground={{color: "#f0f2f7"}}  label="Condition Type" items={[
                                    {label: "Select One", onClick: (e) => {this.changeNotificationOption("Select One")}},
                                ]} />
                        </Box>

                        <FormField label="Condition Value">
                            <TextInput  onChange={(e)=>{this.setState({Conditionalvalue:e.target.value})}}/>
                        </FormField>
                        
                        <Box direction="row" border="bottom" justify="between">
                            <Box > 
                                <Box flex={false}  margin="small" align="start">
                                    <Button
                                        label="Add"
                                        onClick={()=>this.add()}
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

export default contentPageModal;
  
  