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
    
} from "grommet";

import {  Close, FormUp, FormDown } from 'grommet-icons';
import axios from 'axios';
import CustomDataTable from "../DataTable/dataTable";

const mailBoxes = [
    
    {
        property: "name",
        header: "Available Mailboxes",
        search: "name"
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
            activeCheckbox:true,
            data1:[]
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

    async onsubmit() {
        try{
            
        const response = await axios({
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
        if(response){
            this.props.close()
            this.props.update()
        }
    }
    catch(e){
        console.log(e)
    }
    }
    componentDidMount(){
        axios.get("http://localhost:4001/stubpolicyavailablemailbox")
        .then(response => {
            console.log("data1",response.data.Data)
              this.setState({
                    data1: response.data.Data
              })

        })

        .catch(error => {
              console.log("error", error)
        })

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
                        <Box border="all" pad="small" >
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
                                    <CheckBox checked={activeCheckbox} label="Enable: " reverse={true} onChange={() => { this.setState({ activeCheckbox: !this.state.activeCheckbox}) }}/>
                              </Box>
                        </Box>
                        <Box>
                            {/*instructions to use CustomDataTable as dataselector */}
                            {/* use it same as used for Datatable except don't pass editOpen function, but just pass selector={true} prop */}
                            <CustomDataTable  columns={controlledColumns} checkBox data={this.state.data1} selector={true} />
                        </Box>
                        <Box direction="row" margin="medium" gap="small" justify="center">
                              <Box flex={false}  align="start">
                                    <Button
                                    label="Save"
                                    primary
                                    onClick={()=>this.onsubmit()}
                                    />
                              </Box>
                              <Box flex={false} align="start">
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
