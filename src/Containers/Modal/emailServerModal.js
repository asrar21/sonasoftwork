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

import { Close } from 'grommet-icons';
import axios from 'axios'

class emailServerModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            domainName: "Domain Name",
            exchangeVersion: "Exchange Version",
            exchangeServicePack: "Exchange Service Pack",
            emailServer: "",
            JournalMailbox: "",
            JournalLogin: "",
            JournalPassword: "",
            Frequency: "",
            stubEnabled: false,
            archivepublicFolder: false,
           
            excludeHours: false,
            status:true
        }
    }

    changeDomainName(value) {
        this.setState({
            domainName: value
        })
    }

    changeExchangeVersion(value) {
        this.setState({
            exchangeVersion: value
        })
    }

    changeExchangeServicePack(value) {
        this.setState({
            exchangeServicePack: value
        })
    }
  async  onsubmit()  {

    try{
       const response=await axios({
            method: 'post',
            url: 'http://localhost:4001/EmailServer',
            data: {
                domainName: this.state.domainName,
                exchangeVersion: this.state.exchangeVersion,
                exchangeServicePack: this.state.exchangeServicePack,
                emailServer: this.state.emailServer,
                JournalMailbox: this.state.JournalMailbox,
                
                JournalPassword: this.state.JournalPassword,
                Frequency: this.state.Frequency,
                Enable: this.state.Enable,
                archivepublicFolder: this.state.archivepublicFolder,
                stubEnabled: this.state.stubEnabled,
                excludeHours: this.state.excludeHours,
                emailServer: this.state.domainName,
                journalLogon: this.state.JournalLogin,
               status:this.state.status
            },
            header: { 'Content-Type': 'application/json' }
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
        const { domainName, exchangeVersion, exchangeServicePack } = this.state;
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
                        <Box margin="medium" border={{ side: "all", size: "xsmall", color: "grey" }}>
                            <Menu dropBackground={{ color: "#f0f2f7" }} label={domainName} items={[
                                { label: "SONASOFT.ONMICROSOFT.COM", onClick: (e) => { this.changeDomainName("SONASOFT.ONMICROSOFT.COM") } },
                                { label: "SONASAFE", onClick: (e) => { this.changeDomainName("SONASAFE") } }
                            ]} />
                        </Box>
                        <FormField label="Email Server">
                            <TextInput onChange={(e) => { this.setState({ EmailServer: e.target.value }) }} />
                        </FormField>
                        <Box margin="medium" border={{ side: "all", size: "xsmall", color: "grey" }}>
                            <Menu dropBackground={{ color: "#f0f2f7" }} label={exchangeVersion} items={[
                                { label: "SONASOFT.ONMICROSOFT.COM", onClick: (e) => { this.changeExchangeVersion("SONASOFT.ONMICROSOFT.COM") } },
                                { label: "SONASAFE", onClick: (e) => { this.changeExchangeVersion("SONASAFE") } }
                            ]} />
                        </Box>
                        <Box margin="medium" border={{ side: "all", size: "xsmall", color: "grey" }}>
                            <Menu dropBackground={{ color: "#f0f2f7" }} label={exchangeServicePack} items={[
                                { label: "SONASOFT.ONMICROSOFT.COM", onClick: (e) => { this.changeExchangeServicePack("SONASOFT.ONMICROSOFT.COM") } },
                                { label: "SONASAFE", onClick: (e) => { this.changeExchangeServicePack("SONASAFE") } }
                            ]} />
                        </Box>
                        <FormField label="Journal Mailbox">
                            <TextInput onChange={(e) => { this.setState({ JournalMailbox: e.target.value }) }} />
                        </FormField>
                        <FormField label="Journal Login">
                            <TextInput onChange={(e) => { this.setState({ JournalLogin: e.target.value }) }} />
                        </FormField>
                        <FormField label="Journal Password">
                            <TextInput onChange={(e) => { this.setState({ JournalPassword: e.target.value }) }} />
                        </FormField>
                        <FormField label="Frequency(Seconds)">
                            <TextInput type="number" onChange={(e) => { this.setState({ Frequency: e.target.value }) }} />
                        </FormField>
                        <Box margin="medium">
                            <CheckBox label="Enable: " reverse={true} onChange={(event) => { this.setState({ Enable: true }) }} />
                        </Box>
                        <Box margin="medium">
                            <CheckBox label="Archive Public Folder:" reverse={true} onChange={(event) => { this.setState({ Archive: true }) }} />
                        </Box>
                        <Box margin="medium">
                            <CheckBox label="Enable Stub: " reverse={true} onChange={(event) => { this.setState({ EnableStub: true }) }} />
                        </Box>
                        <Box margin="medium">
                            <CheckBox label="Exclude Hours: " reverse={true} onChange={(event) => { this.setState({ Exclude: true }) }} />
                        </Box>


                    </Box>
                    <Box direction="row" justify="between">
                        <Box >
                            <Box flex={false} as="footer" margin="small" align="start">
                                <Button
                                    label="Add"
                                    onClick={()=>this.onsubmit()}
                                />
                            </Box>
                            <Box flex={false} as="footer" margin="small" align="start">
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

export default emailServerModal;

