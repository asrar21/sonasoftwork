import React, { Component } from 'react';
//importing components from grommet
import {
    Text,
    Box,
    TextInput,
    Button,
    CheckBox,

} from "grommet";




export default class SMTPconfiguration extends Component {







    render() {


        return (
            <div>
                <Box border={{ side: "all", color: "black" }}>
                    <Box direction="row-responsive" justify="center">
                        <Text>
                            Sender Email:
                                    </Text>
                        <Box width={"70%"} margin={{ left: "large" }}>
                            <TextInput value="bilala@sonasoft.com"></TextInput>
                        </Box>
                    </Box>
                    <Box direction="row-responsive" margin={{ top: "large" }} justify="center" >
                        <Text>
                            SMTP Host:
                                    </Text>
                        <Box direction="row-responsive" width={"70%"} margin={{ left: "large" }} >
                            <TextInput value="smtp.office365.com"></TextInput>

                        </Box>

                    </Box>
                    <Box direction="row-responsive" margin={{ top: "large" }} justify="start" align="center" >
                        <Box margin={{ left: "170px" }}>
                            <Text>
                                Port:
                                    </Text>
                        </Box>

                        <Box direction="row-responsive" width={"5%"} margin={{ left: "xlarge" }} >
                            <TextInput value=""></TextInput>

                        </Box>

                    </Box>
                    <Box direction="row-responsive" margin={{ top: "large" }} justify="start" align="center" >
                        <Box margin={{ left: "170px" }}>
                            <Text>
                                Authenthication Required:
                                    </Text>
                        </Box>
                        <Box direction="row-responsive" width={"25%"} margin={{ left: "large" }} >
                            <CheckBox></CheckBox>

                        </Box>

                    </Box>

                    <Box>
                        <Box margin={{ top: "large" }} border={{ side: "all", color: "black" }}>
                            <Box pad="medium" margin="medium" border={{ side: "all", color: "black" }}>
                                <Text>Cerendials</Text>
                            </Box>

                            <Box direction="row-responsive" justify="center">
                                <Text>
                                    User Name:
                                    </Text>
                                <Box width={"70%"} margin={{ left: "large" }}>
                                    <TextInput value="bilala@sonasoft.com"></TextInput>
                                </Box>
                            </Box>
                            <Box direction="row-responsive" margin={{ top: "large" }} justify="center" pad="small">

                                <Text>Password:  </Text>
                                <Box width={"70%"} margin={{ left: "large" }} justify="center">
                                    <TextInput value="*******"></TextInput>
                                </Box>
                                


                            </Box>
                            <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="">
                                <Button label="save" /> <Button label="cancel" />
                            </Box>
                            





                        </Box>
                        

                    </Box>



                </Box>

              
            </div>

        )
    }
}
