import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/SecondaryNavbar'
import { Box, Text, Button, Grommet, TextArea, TextInput } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class Attachment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseAttachment: false,


        }

    }
    CollapseAttachment = () => {
        let toggle = this.state.collapseAttachment
        this.setState({
            collapseAttachment: !toggle
        })
    }

    render() {
        const { collapseAttachment } = this.state;


        return (

            <Grommet>
                <SecondaryNavBar pageName="Attachment" pageIcon="Attachment" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseAttachment && <FormUp onClick={() => this.CollapseAttachment()} />}
                            {!collapseAttachment && <FormDown onClick={() => this.CollapseAttachment()} />}
                        </Box>
                    </Box>
                    {collapseAttachment &&
                        <Box>
                            <Box direction="row"
                            >
                                <Box width="large"
                                    margin={{ left: "medium" }} direction="row-responsive" >
                                    <Box >
                                        <Text>Archive Store:</Text>
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
