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
                    border={{ color: "light-3" }}>
                    <Box width="medium"
                        border={{ color: "light-3" }}>
                        <Text>
                            Senders Email:
                                    </Text>
                    </Box>
                    <Box direction="row">
                        <Box>
                            <TextInput value="bilala@sonasoft.com"></TextInput>
                        </Box>

                    </Box>
                    </Box>

                    <Box direction="row"
                    border={{ color: "light-3" }}>
                    <Box width="medium"
                        border={{ color: "light-3" }}>
                        <Text>
                            SMTP Host:
                                    </Text>
                    </Box>
                    <Box direction="row">
                        <Box>
                            <TextInput value="smtp.office365.com"></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box direction="row"
                    border={{ color: "light-3" }}>
                    <Box width="medium"
                        border={{ color: "light-3" }}>
                        <Text>
                            Port:
                                    </Text>
                    </Box>
                    <Box direction="row">
                        <Box  width={"20%"}>
                            <TextInput ></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box direction="row"
                    border={{ color: "light-3" }}>
                    <Box width="medium"
                        border={{ color: "light-3" }}>
                        <Text>
                            Authenthication Required:
                                    </Text>
                    </Box>
                    <Box direction="row">
                        <Box>
                           <CheckBox
                             checked={this.state.ischecked}
                             onChange={(event) => this.setState({ischecked:event.target.checked})}/>
                        </Box>

                    </Box>
                    </Box>
                     <Box >
                                <Heading size="small">Cerendials</Heading>
                            </Box>

                            <Box direction="row"
                    border={{ color: "light-3" }}>
                    <Box width="medium"
                        border={{ color: "light-3" }}>
                        <Text>
                            UserName:
                                    </Text>
                    </Box>
                    <Box direction="row">
                        <Box>
                           <TextInput value="bilala@sonasoft.com"></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box direction="row"
                    border={{ color: "light-3" }}>
                    <Box width="medium"
                        border={{ color: "light-3" }}>
                        <Text>
                            Password:
                                    </Text>
                    </Box>
                    <Box direction="row">
                        <Box>
                           <TextInput value="*******"></TextInput>
                        </Box>

                    </Box>
                    </Box>
                    <Box justify="center" align="center" direction="row-responsive">
                        <Button label="Save">

                        </Button>
                        <Button label="Cancel">

                        </Button>
                    </Box>

                    

                   



           

              
            </div>

        )
    }
}
