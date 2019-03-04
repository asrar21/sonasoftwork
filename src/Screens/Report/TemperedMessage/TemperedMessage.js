import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/SecondaryNavbar'
import { Box, Text, Button,  Grommet, TextInput, } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class TemperedMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseTemperedMessage: false,
            

        }

    }
    CollapseTemperedMessage = () => {
        let toggle = this.state.TemperedMessage
        this.setState({
            collapseTemperedMessage: !toggle
        })
    }

    render() {
        const { collapseTemperedMessage } = this.state;
        

        return (

            <Grommet>
                <SecondaryNavBar pageName="Tampared Messages" pageIcon="TamparedReport" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {collapseTemperedMessage && <FormUp onClick={() => this.CollapseTemperedMessage()} />}
                            {!collapseTemperedMessage && <FormDown onClick={() => this.CollapseTemperedMessage()} />}
                        </Box>
                    </Box>
                    {collapseTemperedMessage &&
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
