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
    CheckBox
} from "grommet";

import {  Close } from 'grommet-icons';


class UserManagementModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            role: "Role",
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
                        <Box margin="medium" border={{side: "all", size: "xsmall", color: "grey"}}>
                                <Menu dropBackground={{color: "#f0f2f7"}} label={role} items={[
                                        {label: "SONASOFT.ONMICROSOFT.COM", onClick: (e) => {this.changeDomainName("SONASOFT.ONMICROSOFT.COM")}},
                                        {label: "SONASAFE", onClick: (e) => {this.changeDomainName("SONASAFE")}}
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
  
