import React, { Component } from 'react'
import { Grommet, Box, DataTable, Text, Paragraph, TextInput, Button, RadioButton } from "grommet";
import { Edit, FormUp, FormDown } from "grommet-icons";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";

const columns = [
      {
            property: "archiveStore",
            header: "Archive Store"
      },
      {
            property: "database",
            header: "Database"
      },
      {
            property: "from",
            header: "From"
      },
      {
            property: "to",
            header: "To"
      },
      {
            property: "searchable",
            header: "Searchable ?"
      },
      {
            property: "archiveable",
            header: "Archiveable ?"
      },
      {
            property: "status",
            header: "Status"
      }
]
const controlledColumns = columns.map(col => Object.assign({}, col));

class archiveStore extends Component {
      constructor(props){
            super(props)
            this.state = {
                  
            }
      }

      collapseLocationInfo(){
            this.setState({
                  locationInfoCollapsed: !this.state.locationInfoCollapsed
            })
      }

      collapseRolloverPolicy(){
            this.setState({
                  rolloverPolicyCollapsed: !this.state.rolloverPolicyCollapsed    
            })
      }
      render() {
            const { locationInfoCollapsed, rolloverPolicyCollapsed } = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageName="Archive Store" pageIcon="ArchiveStore" />
                        </Box>
                        <Box>
                              <DataTable
                                    margin="medium" 
                                    columns= {[
                                          {
                                                property: "edit",
                                                header: "Edit",
                                                render: () => (
                                                      <Box>
                                                            <Edit cursor="pointer" />
                                                      </Box>
                                                )
                                          },
                                          ...controlledColumns
                                    ].map(col => ({ ...col }))}
                                    sortable
                                    // data={}
                              />


                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"39%"}}>Default Retention Policy (Lowest Priority)</Text>
                                          <Box>
                                                {!locationInfoCollapsed && <FormUp onClick={() => this.collapseLocationInfo()} />}
                                                {locationInfoCollapsed && <FormDown onClick={() => this.collapseLocationInfo()} />}
                                          </Box>
                                    </Box>
                                    {!locationInfoCollapsed &&
                                          <Box>
                                                <Box align="center" fill="horizontal" direction="column">
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start" >
                                                                  <Paragraph>Data File Location </Paragraph>  
                                                            </Box>
                                                            <Box width="large" >
                                                                  <TextInput value="E:\Program Files (x86)\Sonasoft\sonaarc\ArchiveStores"></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start">
                                                                  <Paragraph>Log File Location &nbsp;</Paragraph>  
                                                            </Box>
                                                            <Box width="large" >
                                                                  <TextInput value="E:\Program Files (x86)\Sonasoft\sonaarc\ArchiveStores"></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start">
                                                                  <Paragraph>Full Text Catalog&nbsp;&nbsp;&nbsp;<br /> Location</Paragraph>  
                                                            </Box>
                                                            <Box width="large" >
                                                                  <TextInput value="E:\Program Files (x86)\Sonasoft\sonaarc\ArchiveStores"></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="medium" justify="center" margin="small">
                                                            <Button label="Save" />
                                                            <Button label="Cancel" onClick={() => this.cancelEditPolicy()} />
                                                      </Box>
                                                </Box>
                                          </Box>
                                    }
                              </Box> 
                              

                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"47%"}}>Rollover Policy</Text>
                                          <Box>
                                                {!rolloverPolicyCollapsed && <FormUp onClick={() => this.collapseRolloverPolicy()} />}
                                                {rolloverPolicyCollapsed && <FormDown onClick={() => this.collapseRolloverPolicy()} />}
                                          </Box>
                                    </Box>
                                    {!rolloverPolicyCollapsed &&
                                          <Box>
                                                <Box align="center" fill="horizontal" direction="column">
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start" >
                                                                  <Paragraph>Type &nbsp;&nbsp;:</Paragraph>  
                                                            </Box>
                                                            <Box direction="row-responsive" gap="medium" >
                                                                  <RadioButton label= "Enable"  />
                                                                  <RadioButton label= "Disable"  />
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start">
                                                                  <Paragraph>Size(MB)</Paragraph>  
                                                            </Box>
                                                            <Box>
                                                                  <TextInput></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="medium" justify="center" margin="small">
                                                            <Button label="Save" />
                                                            <Button label="Cancel" onClick={() => this.cancelEditPolicy()} />
                                                      </Box>
                                                </Box>
                                          </Box>
                                    }
                              </Box> 

                        </Box>
                  </Grommet>
            )
      }
};

export default archiveStore;
