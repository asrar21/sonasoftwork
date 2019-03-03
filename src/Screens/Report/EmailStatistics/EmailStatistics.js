import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/secondaryNavbar'
import { Box, Text, Button,  Grommet, TextInput, } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class EmailStatistics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseEmailStatistics: false,
            

        }

    }
    CollapseEmailStatistics = () => {
        let toggle = this.state.collapseEmailStatistics
        this.setState({
            collapseEmailStatistics: !toggle
        })
    }

    render() {
        const { collapseEmailStatistics } = this.state;
        

        return (

            <Grommet>
                <SecondaryNavBar pageName="Email Statistics" pageIcon="EmailStatistics" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseEmailStatistics && <FormUp onClick={() => this.CollapseEmailStatistics()} />}
                            {!collapseEmailStatistics && <FormDown onClick={() => this.CollapseEmailStatistics()} />}
                        </Box>
                    </Box>
                    {collapseEmailStatistics &&
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
                                <Button label="Submit" /> <Button label="Clear" />
                            </Box>


                        </Box>}
                </Box>


            </Grommet>
        )
    }
}
