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
    DataTable,
} from "grommet";

import {  Close, FormUp, FormDown } from 'grommet-icons';
import axios from 'axios'

const mailBoxes = [
      {
            property: "availableMailboxes",
            header: "Available Mailboxes"
      }
]

const controlledColumns = mailBoxes.map(col => Object.assign({}, col));

class StubPolicyModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            notificationOption: "Notification Option",
            conditionName: "Select One",
            collapse: true,
            name:"",
            description:"",
            stubPeriod:"",
            priority:"",
            activeCheckbox:false
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
            activeCheckbox: !this.state.activeCheckbox,
            activeCheckbox:true
        })
    } 
    onsubmit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4001/stubpolicy',
            data: {
                name:this.state.name,
                description:this.state.description,
                stubPeriod:this.state.stubPeriod,
                priority:this.state.priority,
                activeCheckbox:this.state.activeCheckbox
            },
            header: { 'Content-Type': 'application/json' }
        });
    }

 
    render() {
        const { notificationOption, conditionName, collapse, activeCheckbox } = this.state
        return (
            <Layer
                position="center"
                modal
                width="xlarge"
                onClickOutside={this.props.close}
                onEsc={this.props.close}
            >
                <Box
                    as="form"
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
                    <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                        <Box border="all" pad={{top:"medium", left: "xlarge", right: "xlarge", bottom: "medium"}} >
                              <FormField label="Stub Policy Name">
                                    <TextInput  onChange={(e)=>this.setState({name:e.target.value})}/>
                              </FormField>
                              <FormField label="Stub Policy Description">
                                    <TextInput onChange={(e)=>this.setState({description:e.target.value})}/>
                              </FormField>
                              <FormField label="Stub Period">
                                    <TextInput type="number" onChange={(e)=>this.setState({stubPeriod:e.target.value})}/>
                              </FormField>
                              <Box margin="medium">
                                    <CheckBox checked={activeCheckbox} label="Enable: " reverse={true} onChange={(e) => { this.toggleActiveCheckbox(e) }}/>
                              </Box>
                        </Box>
                        <Box>
                              <DataTable 
                                          columns={[
                                                {
                                                      property: 'checkBox',
                                                      header: <CheckBox
                                                                  checked={this.state.selectAll}
                                                                  onChange={(event) =>  this.selectAllData(event)}
                                                            />,
                                                      render: () => (
                                                            <Box>
                                                                  <CheckBox />
                                                            </Box>
                                                      )
                                                },
                                                ...controlledColumns
                                          ].map(col => ({ ...col }))}
                                          data={this.state.data}
                                          sortable
                                    />
                        </Box>
                        <Box direction="row" pad="small" margin="medium" gap="small" justify="center">
                              <Box flex={false}  margin="small" align="start">
                                    <Button
                                    label="Save"
                                    onClick={this.onsubmit}
                                    />
                              </Box>
                              <Box flex={false}  margin="small"  align="start">
                                    <Button
                                    label="Cancel"
                                    onClick={() => this.props.close()}
                                    
                                    />
                              </Box>
                        </Box>
                    </Box>   
                </Box>
            </Layer>      
        )
    }
};

export default StubPolicyModal;