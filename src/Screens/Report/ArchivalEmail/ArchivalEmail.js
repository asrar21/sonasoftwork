import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/secondaryNavbar'
import { Box, Text, Button, RadioButton, Grommet, TextInput,Select } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class ArchivalEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseArchiveEmail: false,
            check: true,
            ischeck: false,
            Bydate: true,
            Bymonth: false

        }

    }
    CollapseArchiveEmail = () => {
        let toggle = this.state.collapseArchiveEmail
        this.setState({
            collapseArchiveEmail: !toggle
        })
    }

    render() {
        const { collapseArchiveEmail, } = this.state;
        const Theme = {
            button: {
                border: {
                    radius: undefined,
                    color: "#2196f3"
                },
                primary: {
                    color: "#2196f3"
                },
                extend: {
                    color: "white"
                }
            }
        }
        //theme of Cancel button
        const Theme1 = {
            button: {
                border: {
                    radius: undefined,
                    color: "dark-3"
                },
                primary: {
                    color: "white"
                },
            }
        }
        let bydate = this.state.Bydate
        let bymonth = this.state.Bymonth


        return (

            <Grommet>
                <SecondaryNavBar pageName="Archival Emails" pageIcon="ArchivalEmail" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseArchiveEmail && <FormUp onClick={() => this.CollapseArchiveEmail()} />}
                            {!collapseArchiveEmail && <FormDown onClick={() => this.CollapseArchiveEmail()} />}
                        </Box>
                    </Box>
                    {collapseArchiveEmail &&
                        <Box>
                            <Box direction="row"
                                border={{ color: "light-3" }}>
                                <Box width="medium"
                                    border={{ color: "light-3" }} margin={{ left: "medium" }} direction="row-responsive" gap="small">
                                    <RadioButton
                                        label="By Date"
                                        checked={this.state.check}
                                        onChange={(event) => this.setState({ check: event.target.checked, ischeck: false, Bydate: !bydate, Bymonth: false })}
                                    />
                                    <RadioButton
                                        label="By Months"
                                        checked={this.state.ischeck}
                                        onChange={(event) => this.setState({ ischeck: event.target.checked, check: false, Bymonth: !bymonth, Bydate: false })}
                                    />

                                </Box>
                                {this.state.Bydate === true ?
                                    <Box direction="row">
                                        <Box width="" direction="row-responsive" gap="small">
                                            <TextInput type="date"></TextInput>
                                            <Box align="center" justify="center">
                                            <Text>To</Text>
                                            </Box>
                                            <TextInput type="date"></TextInput>
                                        </Box>

                                    </Box> : null
                                }
                                {this.state.Bymonth === true ?
                                    <Box direction="row">
                                        <Box width="" direction="row-responsive" gap="small">

                                            <Select size="small"
                                                options={['jan', 'Feb', 'March ','April','May ','june','july','August','September']}
                                                value={'jan'}
                                                onChange={({ option }) => { }}
                                            />
                                            <Box width={"20%"}>
                                            <TextInput type="number" value={2019}></TextInput>
                                            </Box>
                                            <Box align="center" justify="center">
                                            <Text>To</Text>
                                            </Box>
                                            <Box width={"20%"}>
                                            <TextInput type="number" value={2019}></TextInput>
                                            </Box>
                                            <Select size="small"
                                                options={['jan', 'Feb', 'March ','April','May ','june','july','August','September']}
                                                value={'jan'}
                                                onChange={({ option }) => { }}
                                            />


                                        </Box>

                                    </Box> : null
                                }
                            </Box>

                            <Box align="center" justify="center" direction="row-responsive" gap="small" pad="medium">
                                <Button label="Submit" /> <Button label="Clear" />
                            </Box>


                        </Box>}
                </Box>


            </Grommet>
        )
    }
}
