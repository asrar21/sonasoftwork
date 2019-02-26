import React, { Component } from 'react'
//imported Routes from Routes folder


import { Box, Text,  Button, TextInput, Grommet,Select, CheckBox } from "grommet";
import { FormUp, FormDown } from 'grommet-icons';
export default class General extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsetemp: false,
            collapsedefault: false,
            collapseother:false
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
        const { collapsetemp, collapsedefault,collapseother } = this.state

        return (

            <Grommet>
                {/* //   for Temporary Storage */}
                <Box direction="column" border={{  size: "small" }}>
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Temporary Storage</Text>
                        <Box>
                            {collapsetemp && <FormUp onClick={() => this.collapseTempSettings()} />}
                            {!collapsetemp && <FormDown onClick={() => this.collapseTempSettings()} />}
                        </Box>
                    </Box>
                    {collapsetemp &&
                        <Box>
                            <Box direction="column">
                                <Box>
                                    <Box justify="center" direction="row-responsive">
                                        <Text>Archive:</Text>



                                        <Box justify="center" width={"70%"} margin={{ left: "large" }}>
                                            <TextInput></TextInput>
                                        </Box>
                                    </Box>
                                    <Box justify="center" margin={{ top: "large" }} direction="row-responsive" >
                                        <Text>Export:</Text>



                                        <Box justify="center" width={"70%"} margin={{ left: "55px" }}>
                                            <TextInput></TextInput>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                            <Box direction="row" gap="medium" justify="center" margin="medium">
                                <Button label="Save" />
                                <Button label="Cancel" />
                            </Box>
                        </Box>}
                </Box>
                {/* //for Default Role Settings */}
                <Box direction="column" border={{  size: "small" }} margin={{top:"mediumnpm start"}}>
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Default Role Settings</Text>
                        <Box>
                            {collapsedefault && <FormUp onClick={() => this.collapsedefaultSettings()} />}
                            {!collapsedefault && <FormDown onClick={() => this.collapsedefaultSettings()} />}
                        </Box>
                    </Box>
                    {collapsedefault &&
                        <Box>
                            <Box direction="column">
                                <Box>
                                    <Box justify="center" direction="row-responsive">
                                        <Text>Role:</Text>



                                        <Box justify="center" width={"70%"} margin={{ left: "large" }}>
                                            <Select
                                                options={['EAS USER ONLY ACCESS', 'EAS NO UI ACCESS', 'EAS GENERAL USERS','NO simple Search','No Public Folder','Search Exports']}
                                                value={'EAS GENERAL USERS'}
                                                onChange={({ option }) => {}}
                                                
                                            />
                                        </Box>
                                    </Box>

                                </Box>

                            </Box>
                            <Box direction="row" gap="medium" justify="center" margin="medium">
                                <Button label="Save" />
                                <Button label="Cancel" />
                            </Box>
                        </Box>


                    }

                </Box>
                {/* for Others Settings */}
                <Box direction="column" border={{ size: "small" }} margin={{top:"medium"}}>
                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                        <Text margin={{ left: "40%" }}>Others Setting</Text>
                        <Box>
                            {collapseother && <FormUp onClick={() => this.collapseotherSettings()} />}
                            {!collapseother && <FormDown onClick={() => this.collapseotherSettings()} />}
                        </Box>
                    </Box>
                    {collapseother &&
                       <Box>
                       <Box direction="column">
                           <Box>
                               <Box justify="center" direction="row-responsive">
                                   <Text>Archive Store Rollover period for PSTUtility :</Text>



                                   <Box justify="center" width={"70%"} margin={{ left: "large" }} direction="row-responsive">
                                      <Select
                                      options={[1,2,3,4]}
                                      value={1}
                                      />
                                      <Box justify="center" align="center">
                                      <Text >Months</Text>
                                      </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Delete Task Logs older than :</Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"420px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>Days</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Number of Emails per Export file :</Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"380px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>count</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Export/Forward Folder Size: </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"420px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>MB</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Number of Parallel Export Tasks : </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"390px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>Count</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Keep Export File for :  </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"472px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>Days</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Check if Message already exists before Archiving from Journal Mailbox? :  </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"" }} direction="row-responsive">
                                       <CheckBox/>
                                       
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Notify Retention Expiry before : </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"400px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>Days</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Notify if emails are not archived for more than : </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"280px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>Minutes</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Notify if public folder items are not archived for more than :  </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"170px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justigy="center" align="center">
                                       <Text>Days</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Maximum number of resend trials :   </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"380px" }} direction="row-responsive">
                                       <TextInput type="number"></TextInput>
                                       <Box justify="center" align="center">
                                       <Text>Count</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Child DB Size:   </Text>
                                   </Box>



                                   <Box justify="center" width={"15%"} margin={{ left:"550px" }} direction="row-responsive">
                                       <TextInput value="10,240.0"></TextInput>
                                       <Box jsutify="center" align="center">
                                       <Text>MBS</Text>
                                       </Box>
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Report Error at (HH:mm) :    </Text>
                                   </Box>



                                   <Box justify="center" width={"15%"} margin={{ left:"460px" }} direction="row-responsive">
                                       <TextInput value="18.00"></TextInput>
                                      
                                   </Box>
                               </Box>
                               <Box justify="start" margin={{ top: "large" }} direction="row-responsive" >
                               <Box margin={{left:"100px"}}>
                                   <Text>Enable WORM Journaling :  </Text>
                                   </Box>



                                   <Box justify="center" width={"25%"} margin={{ left:"300px" }} direction="row-responsive">
                                       <CheckBox/>
                                       
                                   </Box>
                               </Box>
                               
                           </Box>

                       </Box>
                       <Box direction="row" gap="medium" justify="center" margin="medium">
                           <Button label="Save" />
                           <Button label="Cancel" />
                       </Box>
                   </Box>
                    }

                </Box>






            </Grommet>
        )
    }
}
