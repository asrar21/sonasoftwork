import React, { Component } from 'react';
//importing components from grommet
import {
    Text,
    Box,
    TextInput,
    Button,
    CheckBox,
    Heading

} from "grommet";




export default class SMTPconfiguration extends Component {


    constructor(props) {
        super(props);
        this.state = {

            ischecked:false,
            
        };
    }




    render() {
        //theme of save button
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


        return (
            <div>
                <Box direction="row"
                    margin={{top:"small"}}>
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box >
                        <Text>
                            Senders Email:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box >
                            <TextInput ></TextInput>
                        </Box>

                    </Box>
                    </Box>

                    <Box direction="row"
                   margin={{top:"small"}} >
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box margin={{top:"small"}}>
                        <Text>
                            SMTP Host:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box margin={{top:"small"}}>
                            <TextInput ></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box direction="row"
                    margin={{top:"small"}}>
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box margin={{top:"small"}}>
                        <Text>
                            Port:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box  width={"20%"} margin={{top:"small"}}>
                            <TextInput ></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box direction="row"
                    margin={{top:"small"}}>
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box margin={{top:"small"}}>
                        <Text>
                            Authenthication Required:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box margin={{top:"small"}}>
                           <CheckBox
                             checked={this.state.ischecked}
                             onChange={(event) => this.setState({ischecked:event.target.checked})}/>
                        </Box>

                    </Box>
                    </Box>
                     <Box margin={{left:"small"}}>
                                <Heading size="small">Cerendials</Heading>
                            </Box>

                            <Box direction="row"
                    margin={{top:"small"}}>
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box margin={{top:"small"}}>
                        <Text>
                            UserName:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box margin={{top:"small"}}>
                           <TextInput ></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box direction="row"
                    margin={{top:"small"}}>
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box margin={{top:"small"}}>
                        <Text>
                            Password:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box margin={{top:"small"}}>
                           <TextInput ></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box justify="center" align="center" direction="row-responsive" margin={{top:"small"}} gap="small">
                        <Button label="Save">

                        </Button>
                        <Button label="Cancel">

                        </Button>
                    </Box>

                    

                   



           

              
            </div>

        )
    }
}
