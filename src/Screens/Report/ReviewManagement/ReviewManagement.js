import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/SecondaryNavbar'
import { Box, Text, Button, Grommet, TextArea, TextInput } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class ReviewManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseReviewManagement: false,


        }

    }
    CollapseReviewManagement = () => {
        let toggle = this.state.collapseReviewManagement
        this.setState({
            collapseReviewManagement: !toggle
        })
    }

    render() {
        const { collapseReviewManagement } = this.state;


        return (

            <Grommet>
                <SecondaryNavBar pageName="Review Management " pageIcon="ReviewMgmt.Report" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseReviewManagement && <FormUp onClick={() => this.CollapseReviewManagement()} />}
                            {!collapseReviewManagement && <FormDown onClick={() => this.CollapseReviewManagement()} />}
                        </Box>
                    </Box>
                    {collapseReviewManagement &&
                        <Box>
                            <Box direction="row"
                            border={{ color: "light-3" }}>
                                <Box width="large"
                                    border={{ color: "light-3" }} margin={{ left: "medium" }} direction="row-responsive" >
                                    <Box  justify="center" align="center">
                                        <Text>User:</Text>
                                    </Box>



                                </Box>
                                <Box>

                                </Box>

                                <Box direction="row">
                                    <Box direction="row-responsive" gap="small" >

                                        <Box width="medium" height="small" justify="center" align="center">
                                            <TextArea ></TextArea>
                                        </Box>

                                    </Box>

                                </Box>


                            </Box>

                            <Box
                                direction="row" margin={{bottom:"xxlarge"}}
                                border={{ color: "light-3" }} >
                                <Box width="large"
                                   border={{ color: "light-3" }} margin={{ left: "medium" }}
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
