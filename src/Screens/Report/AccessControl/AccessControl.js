import React, { Component } from 'react'


<<<<<<< HEAD
import SecondaryNavBar from '../../../Containers/SecondaryNavbar/secondaryNavbar'
import { Box, Text, Button,  Grommet, TextInput, } from "grommet";
=======
import SecondaryNavBar from '../../../Containers/SecondaryNavbar/SecondaryNavbar'
import { Box, Text, Button, Grommet, TextInput, Layer, Heading, Paragraph } from "grommet";
>>>>>>> 0f132a2d1c92f5bb7d80b48e342d7e98ef228bc2
import { FormUp, FormDown } from 'grommet-icons';

export default class AccessControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseAccessControl: false,
            Report: false


        }

    }
    CollapseAccessControl = () => {
        let toggle = this.state.collapseAccessControl
        this.setState({
            collapseAccessControl: !toggle
        })
    }
    Report = () => {
        let toggle = this.state.Report
        this.setState({
            Report: !toggle
        })
    }

    render() {
        const { collapseAccessControl, Report } = this.state;


        return (

            <Grommet>
                <SecondaryNavBar pageName="Access Control" pageIcon="Access.Control" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseAccessControl && <FormUp onClick={() => this.CollapseAccessControl()} />}
                            {!collapseAccessControl && <FormDown onClick={() => this.CollapseAccessControl()} />}
                        </Box>
                    </Box>
                    {collapseAccessControl &&
                        <Box>
                            <Box direction="row"
                                border={{ color: "light-3" }}>
                                <Box width="large"
                                    border={{ color: "light-3" }} margin={{ left: "medium" }} direction="row-responsive" gap="small">
                                    <Box align="center" justify="center">
                                        <Text>Form:</Text>
                                    </Box>
                                    <Box width="small">
                                        <TextInput type="date"></TextInput>
                                    </Box>

                                </Box>

                                <Box direction="row">
                                    <Box width="medium" direction="row-responsive" gap="small">

                                        <Box align="center" justify="center">
                                            <Text>To:</Text>
                                        </Box>
                                        <TextInput type="date"></TextInput>
                                    </Box>

                                </Box>


                            </Box>

                            <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="medium">
                                <Button label="Submit" onClick={this.Report} /> <Button label="Clear" />
                            </Box>


                        </Box>}
                </Box>
                {this.state.Report === true ?
                    <Box>
                        <Layer
                            position="center"
                            full="vertical"







                        >
                            <Box justify="center" align="center">
                                <Heading>
                                    Report
                    </Heading>
                            </Box>
                            <Box>
                                <Box direction="row"
                                >
                                    <Box width="large"
                                          direction="row-responsive" gap="small" align="center" justify="center">
                                        <Box >
                                        <Box >
                                            <Heading size="small" level={5} textAlign="center">





                                                SonaVault (Archiver / eDiscovery / Storage Management) (Archived Emails)
                                                </Heading>
                                                </Box>
                                                <Box >
                                                <Heading size="small" level={5} textAlign="center">





                                                Report From: 02-Mar-2019  To: 02-Mar-2019
                                                </Heading>
                                                </Box>
                                        </Box>
                                        
                                    </Box>

                                   
                                </Box>

                                


                            </Box>

                        </Layer>

                    </Box> : null}


            </Grommet>
        )
    }
}
