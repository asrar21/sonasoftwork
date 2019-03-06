import React, { Component } from 'react'


import SecondaryNavBar from '../../../Containers/SecondaryNavbar/SecondaryNavbar'
import { Box, Text, Button,  Grommet, TextInput,Select } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class NonQualifiedEmails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseNonQualifiedEmails: false,
            

        }

    }
    CollapseNonQualifiedEmails = () => {
        let toggle = this.state.collapseNonQualifiedEmails
        this.setState({
            collapseNonQualifiedEmails: !toggle
        })
    }

    render() {
        const { collapseNonQualifiedEmails } = this.state;
        

        return (

            <Grommet>
                <SecondaryNavBar pageName="Non-Qualified Emails" pageIcon="NQM" />

                {/* //   Search */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Search Criteria</Text>
                        <Box>
                            {!collapseNonQualifiedEmails && <FormUp onClick={() => this.CollapseNonQualifiedEmails()} />}
           
                            {collapseNonQualifiedEmails && <FormDown onClick={() => this.CollapseNonQualifiedEmails()} />}
                        </Box>
                    </Box>
                    {!collapseNonQualifiedEmails &&
                        <Box>
                             <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Sender :
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} width="medium">
                                        <TextInput></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Recipients : 
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} width="medium">
                                        <TextInput></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Subject : 
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} width="medium">
                                        <TextInput></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Sent Between : 
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} direction="row-responsive">
                                    <Box><TextInput type="date"></TextInput>
                                    </Box>
                                        <Box justify="center" align="center">
                                        <Text>And</Text>
                                        </Box>
                                        <Box>
                                        <TextInput type="date"></TextInput>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Received Between  : 
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} direction="row-responsive">
                                    <Box><TextInput type="date"></TextInput>
                                    </Box>
                                        <Box justify="center" align="center">
                                        <Text>And</Text>
                                        </Box>
                                        <Box>
                                        <TextInput type="date"></TextInput>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Audited Between : 
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} direction="row-responsive">
                                    <Box><TextInput type="date"></TextInput>
                                    </Box>
                                        <Box justify="center" align="center">
                                        <Text>And</Text>
                                        </Box>
                                        <Box>
                                        <TextInput type="date"></TextInput>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Agent Type : 
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} direction="row-responsive">
                                    
                                        <Box>
                                        <Select size="large"
                                            options={["Journal","Pst"]}
                                           
                                            onChange={({ option }) => { }}

                                        />
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="large"
                                     margin={{ left: "xlarge" }}>
                                     <Box margin={{top:"small"}}>
                                    <Text>
                                    Agent Name : 
                                         </Text>
                                         </Box>
                                </Box>
                                <Box direction="row" >
                                    <Box margin={{top:"small"}} direction="row-responsive">
                                    
                                        <Box>
                                        <Select size="large"
                                            options={["mail2010","outlook.office365.com","HQEXCH16"]}
                                           
                                            onChange={({ option }) => { }}

                                        />
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row-responsive" align="center" justify="center" gap="small"margin={{top:"small"}}>

                                <Button
                                label="Submit"
                                />
                                <Button
                                label="Clear"
                                />
                                </Box>
                           
                           
                        </Box>}
                </Box>


            </Grommet>
        )
    }
}
