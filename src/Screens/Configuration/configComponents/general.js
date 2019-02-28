import React, { Component } from 'react'
//imported Routes from Routes folder


import { Box, Text, Button, TextInput, Grommet, Select, CheckBox } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class General extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsetemp: false,
            collapsedefault: false,
            collapseother: false,
            check:false,
            ischecked:false
        }

    }
    collapseTempSettings = () => {
        let toggle = this.state.collapsetemp
        this.setState({
            collapsetemp: !toggle
        })
    }
    collapsedefaultSettings = () => {
        let toggle = this.state.collapsedefault
        this.setState({
            collapsedefault: !toggle
        })
    }
    collapseotherSettings = () => {
        let toggle = this.state.collapseother
        this.setState({
            collapseother: !toggle
        })
    }

    render() {
        const { collapsetemp, collapsedefault, collapseother } = this.state;
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

            <Grommet>
                {/* //   for Temporary Storage */}
                <Box direction="column" >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Temporary Storage</Text>
                        <Box>
                            {collapsetemp && <FormUp onClick={() => this.collapseTempSettings()} />}
                            {!collapsetemp && <FormDown onClick={() => this.collapseTempSettings()} />}
                        </Box>
                    </Box>
                    {collapsetemp &&
                        <Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                        Site prefix:
                                        </Text>
                                </Box>
                                <Box direction="row">
                                    <Box >
                                        <TextInput ></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                        Export:
                                    </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                        <TextInput ></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="medium">
                                <Button label="save" /> <Button label="cancel" />
                            </Box>


                        </Box>}
                </Box>
                {/* //for Default Role Settings */}
                <Box direction="column"  margin={{ top: "mediumnpm start" }}>
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Default Role Settings</Text>
                        <Box>
                            {collapsedefault && <FormUp onClick={() => this.collapsedefaultSettings()} />}
                            {!collapsedefault && <FormDown onClick={() => this.collapsedefaultSettings()} />}
                        </Box>
                    </Box>
                    {collapsedefault &&
                        <Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                        Export:
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                        <Select
                                            options={['EAS USER ONLY ACCESS', 'EAS NO UI ACCESS', 'EAS GENERAL USERS', 'NO simple Search', 'No Public Folder', 'Search Exports']}
                                            
                                            onChange={({ option }) => { }}

                                        />
                                    </Box>

                                </Box>
                            </Box>
                            <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="medium">
                                <Button label="save" /> <Button label="cancel" />
                            </Box>


                        </Box>}

                </Box>
                {/* for Others Settings */}
                <Box direction="column"  >
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Others Setting</Text>
                        <Box>
                            {collapseother && <FormUp onClick={() => this.collapseotherSettings()} />}
                            {!collapseother && <FormDown onClick={() => this.collapseotherSettings()} />}
                        </Box>
                    </Box>
                    {collapseother &&
                        <Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Archive Store Rollover period for PSTUtility :
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box >
                                        <Select size="small"
                                            options={[1,2,3,4,6]}
                                           
                                            onChange={({ option }) => { }}

                                        />
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Delete TaskLogs older Than :
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                        <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Number of Emails per Export file : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                        <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Export/Forward Folder Size : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                        <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Number of Parallel Export Tasks : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                        <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Keep Export File For : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                        <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Check if Message already exists before Archiving from Journal Mailbox? : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                       <CheckBox 
                                       checked={this.state.ischecked}
                                       onChange={(event) => this.setState({ischecked:event.target.checked})}/>
                                    </Box>

                                </Box>
                            </Box>

                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Notify Retention Expiry before : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                    <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Notify if emails are not archived for more than : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                    <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Notify if public folder items are not archived for more than : 
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                    <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>

                            <Box direction="row">
                                
                                <Box width="medium"
                                 margin={{ left: "medium" }}>
                                    <Text>
                                    Maximum number of resend trials :
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%">
                                    <TextInput type="number"></TextInput>
                                    </Box>

                                </Box>
                            </Box>

                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Child DB Size:
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width={"40%"}>
                                    <TextInput value="10,240.00"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Report Error at (HH:mm) :
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width={"40%"}>
                                    <TextInput value="18.00"></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Enable WORM Journaling :
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box >
                                    <CheckBox 
                                    checked={this.state.check}
                                    onChange={(event) => this.setState({check:event.target.checked})}/>
                                    </Box>

                                </Box>
                            </Box>
                            <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="medium">
                                <Button label="save" /> <Button label="cancel" />
                            </Box>
                            
                            
                        </Box>
                    }

                </Box>






            </Grommet>
        )
    }
}
