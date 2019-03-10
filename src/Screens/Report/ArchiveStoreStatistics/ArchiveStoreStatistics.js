import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/SecondaryNavbar';
import { Box, Text, Button,  Grommet,  TextArea, } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class ArchiveStoreStatistics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseArchiveStoreStatistics: false,
            

        }

    }
    CollapseArchiveStoreStatistics = () => {
        let toggle = this.state.collapseArchiveStoreStatistics
        this.setState({
            collapseArchiveStoreStatistics: !toggle
        })
    }

    render() {
        const { collapseArchiveStoreStatistics } = this.state;
        

        return (

            <Grommet>
                <SecondaryNavBar pageName="Archive Store Statistics" pageIcon="ArchiveStore" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseArchiveStoreStatistics && <FormUp onClick={() => this.CollapseArchiveStoreStatistics()} />}
                            {!collapseArchiveStoreStatistics && <FormDown onClick={() => this.CollapseArchiveStoreStatistics()} />}
                        </Box>
                    </Box>
                    {collapseArchiveStoreStatistics &&
                        <Box>
                            <Box direction="row"
                               border={{ color: "light-3" }} >
                                <Box width="large"
                                   border={{ color: "light-3" }}  margin={{ left: "medium" }} direction="row-responsive" gap="small">
                                   <Box >
                                            <Text>Archive Store:</Text>
                                            </Box>
                                   

                                </Box>
                                
                                    <Box direction="row">
                                        <Box  direction="row-responsive" gap="small" >
                                            
                                            <Box width="medium" height="small">
                                            <TextArea ></TextArea>
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
