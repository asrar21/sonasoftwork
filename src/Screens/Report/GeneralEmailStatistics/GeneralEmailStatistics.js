import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/SecondaryNavbar'
import { Box, Text, Button,  Grommet, TextInput, } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class GeneralEmailStatistics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseGeneralEmailStatistics : false,
            

        }

    }
    CollapseGeneralEmailStatistics  = () => {
        let toggle = this.state.collapseGeneralEmailStatistics 
        this.setState({
            collapseGeneralEmailStatistics : !toggle
        })
    }

    render() {
        const { collapseGeneralEmailStatistics  } = this.state;
        

        return (

            <Grommet>
                <SecondaryNavBar pageName="Journal Email Statistics" pageIcon="JournalStats" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseGeneralEmailStatistics  && <FormUp onClick={() => this.CollapseGeneralEmailStatistics ()} />}
                            {!collapseGeneralEmailStatistics  && <FormDown onClick={() => this.CollapseGeneralEmailStatistics ()} />}
                        </Box>
                    </Box>
                    {collapseGeneralEmailStatistics  &&
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
