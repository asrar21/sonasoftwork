import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/secondaryNavbar'
import { Box, Text, Button, Grommet, TextArea, TextInput } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class Compliance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseCompliance: false,


        }

    }
    CollapseCompliance = () => {
        let toggle = this.state.collapseCompliance
        this.setState({
            collapseCompliance: !toggle
        })
    }

    render() {
        const { collapseCompliance } = this.state;


        return (

            <Grommet>
                <SecondaryNavBar pageName="Compliance" pageIcon="Compliance" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseCompliance && <FormUp onClick={() => this.CollapseCompliance()} />}
                            {!collapseCompliance && <FormDown onClick={() => this.CollapseCompliance()} />}
                        </Box>
                    </Box>
                    {collapseCompliance &&
                        <Box>
                            <Box direction="row"
                            >
                                <Box width="large"
                                    margin={{ left: "medium" }} direction="row-responsive" >
                                    <Box >
                                        <Text>Compliance Type</Text>
                                    </Box>



                                </Box>
                                <Box>

                                </Box>

                                <Box direction="row">
                                    <Box direction="row-responsive" gap="small" >

                                        <Box width="medium" height="small">
                                            <TextArea ></TextArea>
                                        </Box>

                                    </Box>

                                </Box>


                            </Box>

                            <Box
                                direction="row" margin={{bottom:"xxlarge"}}
                                                 >
                                <Box width="large"
                                    margin={{ left: "medium" }}
                                >
                                    <Box direction="row-responsive">

                                        <Text>From:</Text>
                                        <Box width="small">
                                            <TextInput type="date"></TextInput>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box>

                                    <Box direction="row" >
                                        <Box direction="row-responsive">
                                            <Text>To:</Text>
                                            <TextInput type="date"></TextInput>
                                        </Box>

                                    </Box>

                                </Box>
                            </Box>

                            <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="medium">
                                <Button label="Submit" /> <Button label="Clear" />
                            </Box>


                        </Box>}
                </Box>



            </Grommet>
        )
    }
}
