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
    Text
} from "grommet";

import { Close, FormUp, FormDown } from 'grommet-icons';
import axios from 'axios'


class RetentionPolicyModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notificationOption: "Notification Option",
            conditionName: "Condition Name",
            collapse: true,
            retentionPeriod: "",
            name: "",
            retentionGracePeriod: "",
            conditionValue: "",
            status: ""

        }
    }

    changeNotificationOption(value) {
        this.setState({
            notificationOption: value
        })
    }

    changeConditionName(value) {
        this.setState({
            conditionName: value
        })
    }

    collapsePolicySettings() {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    toggleActiveCheckbox() {
        this.setState({
            activeCheckbox: !this.state.activeCheckbox
        })
    }
    onsubmit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4001/retentionPolicyData',
            data: {
                notificationOption:this.state.notificationOption,
                conditionName: this.state.conditionName,
                
                retentionPeriod: this.state.retentionPeriod,
                name:this.state.name,
                retentionGracePeriod: this.state.retentionGracePeriod,
                conditionValue: this.state.conditionValue,
                status: this.state.status
            },
            header: { 'Content-Type': 'application/json' }
        });
    }

    render() {
        const {  conditionName, collapse, activeCheckbox } = this.state
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
                    pad={{ left: "xlarge", right: "xlarge", top: "meium" }}
                    onSubmit={this.props.close}
                >
                    <Box flex={false} direction="row" justify="between">
                        <Heading level={2} margin="none">
                            {this.props.header}
                        </Heading>
                        <Button icon={<Close />} onClick={this.props.close} />
                    </Box>
                    <Box flex="grow" align="center">
                        <Text weight="bold">Policy Details</Text>
                    </Box>
                    <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                        <Box border="all" pad={{ top: "medium", left: "xlarge", right: "xlarge", bottom: "medium" }} >
                            <FormField label="Policy Name">
                                <TextInput onChange={(e) => { this.setState({ name: e.target.value }) }}  />
                            </FormField>
                            <FormField label="Retention Period (Days)">
                                <TextInput type="number" onChange={(e) => { this.setState({ retentionPeriod: e.target.value }) }} ></TextInput>
                            </FormField>
                            <FormField label="Retention Grace Period (Days)">
                                <TextInput type="number" onChange={(e) => { this.setState({ retentionGracePeriod: e.target.value }) }}></TextInput>
                            </FormField>
                            <Box margin="medium">
                                <CheckBox checked={activeCheckbox} label="Active: " reverse={true} onChange={(e) => { this.toggleActiveCheckbox(e) }} />
                            </Box>
                        </Box>
                        <Box border="all" pad={{ top: "medium", left: "xlarge", right: "xlarge", bottom: "medium" }} margin={{ top: 'medium' }} >
                            <Box margin="medium" border={{ side: "all", size: "xsmall", color: "grey" }}>
                                <Menu dropBackground={{ color: "#f0f2f7" }} label={conditionName} items={[
                                    { label: "Sender", onClick: () => { this.changeConditionName("Sender") } },
                                    { label: "Sender Date", onClick: (e) => { this.changeConditionName("Sender Date") } },
                                    { label: "Subject", onClick: (e) => { this.changeConditionName("Subject") } },
                                    { label: "Mail Size", onClick: (e) => { this.changeConditionName("Mail Size") } },
                                    { label: "Priority", onClick: (e) => { this.changeConditionName("Priority") } },
                                    { label: "Received Date", onClick: (e) => { this.changeConditionName("Received Date") } },
                                    { label: "Attachement Count", onClick: (e) => { this.changeConditionName("Attachement Count") } },
                                    { label: "Lock Option", onClick: (e) => { this.changeConditionName("Lock Option") } },
                                    { label: "Public Folder Option", onClick: (e) => { this.changeConditionName("Public Folder Option") } },
                                    { label: "Message Expiry Option", onClick: (e) => { this.changeConditionName("Message Expiry Option") } },
                                    { label: "To", onClick: (e) => { this.changeConditionName("To") } },
                                    { label: "Cc", onClick: (e) => { this.changeConditionName("Cc") } },
                                    { label: "Bcc", onClick: (e) => { this.changeConditionName("Bcc") } },
                                    { label: "Label", onClick: (e) => { this.changeConditionName("Label") } },
                                    { label: "Body", onClick: (e) => { this.changeConditionName("Body") } },
                                    { label: "Attachment Name", onClick: (e) => { this.changeConditionName("Attachment Name") } },
                                    { label: "Attachement Size", onClick: (e) => { this.changeConditionName("Attachement Size") } },
                                    { label: "Attachement", onClick: (e) => { this.changeConditionName("Attachement") } },
                                    { label: "Expiry Date", onClick: (e) => { this.changeConditionName("Expiry Date") } },
                                    { label: "Standard Body", onClick: (e) => { this.changeConditionName("Standard Body") } },
                                ]}
                                />
                            </Box>
                            <Box margin="medium" border={{ side: "all", size: "xsmall", color: "grey" }}>
                                <Menu dropBackground={{ color: "#f0f2f7" }} label="Condition Type" items={[
                                    { label: "Select One", onClick: (e) => { this.changeNotificationOption("Select One") } },
                                ]} />
                            </Box>
                            <Box>
                                <FormField label="Condition Value">
                                    <TextInput onChange={(e) => { this.setState({ conditionValue: e.target.value }) }} />
                                </FormField>
                            </Box>

                            <Box direction="row" justify="center">
                                <Box>
                                    <Box flex={false} margin="small" align="start">
                                        <Button
                                            label="Add"
                                            onClick={this.onsubmit}
                                        />
                                    </Box>
                                    <Box flex={false} margin="small" align="start">
                                        <Button
                                            label="Cancel"
                                            onClick={() => this.props.close()}

                                        />
                                    </Box>
                                </Box>

                                <Box >
                                    <Box flex={false} margin="small" align="start">
                                        <Button
                                            label="And"
                                        />
                                    </Box>
                                    <Box flex={false} margin="small" align="start">
                                        <Button
                                            label="OR"
                                        />
                                    </Box>
                                </Box>

                                <Box >
                                    <Box flex={false} margin="small" align="start">
                                        <Button
                                            label="("
                                        />
                                    </Box>
                                    <Box flex={false} margin="small" align="start">
                                        <Button
                                            label=")"
                                        />
                                    </Box>
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

