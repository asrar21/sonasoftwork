import React, { Component } from 'react';
//importing components from grommet
import {
    Layer,
    Box,
    Heading,
    FormField,
    TextInput,
    Button,
    Menu,
    Text,
    Paragraph
} from "grommet";

import {  Close, FormUp } from 'grommet-icons';


class UserManagementModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            role: "EAS General User",
            exchangeVersion: "Exchange Version",
            exchangeServicePack: "Exchange Service Pack"
        }
    }

    changeDomainName(value){
        this.setState({
            role: value
        })
    }

    changeExchangeVersion(value){
        this.setState({
            exchangeVersion: value
        })
    }

    changeExchangeServicePack(value){
        this.setState({
            exchangeServicePack: value
        })
    }
    
 
    render() {
        const { role, exchangeVersion, exchangeServicePack } = this.state;
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
                        <FormField label="User Type">
                            <TextInput />
                        </FormField>
                        <FormField label="User Name">
                            <TextInput />
                        </FormField>
                        <FormField label="Display Name">
                            <TextInput />
                        </FormField>
                        <FormField label="Email Address">
                            <TextInput />
                        </FormField>
                        
                        <Box  justify="around" direction="row">
                                <Paragraph>Role:</Paragraph>
                                <Menu icon={<FormUp />} dropAlign={{"bottom": "bottom", "right": "right"}}dropBackground={{color: "#f0f2f7"}} label={role} items={[
                                        {label: "EAS General User", onClick: (e) => {this.changeDomainName("EAS General User")}},
                                        {label: "EAS Super Reviewer", onClick: (e) => {this.changeDomainName("EAS Super Reviewer")}},
                                        {label: "EAS Reviewer", onClick: (e) => {this.changeDomainName("EAS Reviewer")}},
                                        {label: "EAS Read Only Access", onClick: (e) => {this.changeDomainName("EAS Read Only Access")}},
                                        {label: "EAS No UI Access", onClick: (e) => {this.changeDomainName("EAS No UI Access")}},
                                        {label: "EAS Auditor", onClick: (e) => {this.changeDomainName("EAS Auditor")}},
                                        {label: "EAS Administrator", onClick: (e) => {this.changeDomainName("EAS Administrator")}},
                                        {label: "No Simple Search", onClick: (e) => {this.changeDomainName("No Simple Search")}},
                                        {label: "No Public Folder", onClick: (e) => {this.changeDomainName("No Public Folder")}},
                                        {label: "Search Export", onClick: (e) => {this.changeDomainName("Search Export")}},
                                ]}/>
                        </Box>
                        
                        <Box direction="row" justify="center" margin="small" align="center" gap="medium">                            
                            <Button
                                label="Add"
                            />
                            <Button
                                label="Cancel"
                                onClick={() => this.props.close()}
                                
                            />
                        </Box>

                    </Box>
                </Box>
            </Layer>
        )
    }
};

export default UserManagementModal;
  
