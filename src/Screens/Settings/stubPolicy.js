import React, { Component } from 'react';
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";
import { Grommet, Box, CheckBox, DataTable, Button, Text, RadioButton, Paragraph } from "grommet";
import { Close, Checkmark, Edit, FormUp, FormDown } from "grommet-icons";

const stubPolicyColumn = [
      {
            property: "name",
            header: "Name"
      },
      {
            property: "description",
            header: "Description"
      },
      {
            property: "priority",
            header: "Priority"
      },
      {
            property: "stubPeriod",
            header: "Stub Period"
      },
      {
            property: "enabled",
            header: "Enabled",
            render: datum => (
                  <Box>
                        {datum.enabled ? <Checkmark /> : <Close /> }
                  </Box>
            )
      },
]

const controlledstubPolicyColumn = stubPolicyColumn.map(col => Object.assign({}, col));

class StubPolicy extends Component {
      constructor(props){
            super(props)
            this.state = {
                  priority: true
            }
      }

      collapsestubSettings(){
            this.setState({
                  stubSettingsCollapsed: !this.state.stubSettingsCollapsed
            })
      }

      changeStubBased(event){
            const options = ['priority', 'maximumStubPeriod']
            options.map(value => {
                  this.setState({
                        [value] : false
                  })
            })
            this.setState({
                  [event.target.value] : true
            })
      };


      render() {
            const { stubSettingsCollapsed, priority, maximumStubPeriod } = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageIcon="StubPolicy" pageName="Stub Policy" />
                        </Box>

                        <Box>
                              <DataTable
                                    margin="medium" 
                                    columns= {[
                                          {
                                                property: "",
                                                header: "",
                                                render: () => (
                                                      <Box>
                                                            <CheckBox />
                                                      </Box>
                                                )
                                          },
                                          {
                                                property: "edit",
                                                header: "Edit",
                                                render: () => (
                                                      <Box>
                                                            <Edit cursor="pointer" />
                                                      </Box>
                                                )
                                          },
                                          ...controlledstubPolicyColumn
                                    ].map(col => ({ ...col }))}
                                    sortable
                                    // data={}
                              />
                              <Box direction="row" gap="medium" justify="center" margin="small">
                                    <Button label="Add" />
                                    <Button label="Enable"  />
                                    <Button label="Disable"  />
                                    <Button label="Delete"  />
                              </Box>


                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"39%"}}>Stub Policy Settings</Text>
                                          <Box>
                                                {!stubSettingsCollapsed && <FormUp onClick={() => this.collapsestubSettings()} />}
                                                {stubSettingsCollapsed && <FormDown onClick={() => this.collapsestubSettings()} />}
                                          </Box>
                                    </Box>
                                    { !stubSettingsCollapsed &&
                                          <Box>
                                                <Box align="center" fill="horizontal" direction="column">
                                                      <Box direction="row" justify="between" gap="large">
                                                            <Box>
                                                                  <Paragraph>Type :</Paragraph>  
                                                            </Box>
                                                            <Box direction="row-responsive" gap="medium" >
                                                                  <RadioButton 
                                                                        label= "Priority" 
                                                                        name="stubBased" 
                                                                        value="priority" 
                                                                        onChange={(e) => this.changeStubBased(e)} 
                                                                        checked={priority}
                                                                  />
                                                                  <RadioButton 
                                                                        label="Maximun Stub Period" 
                                                                        name="stubBased" 
                                                                        value="maximumStubPeriod" 
                                                                        onChange={(e) => this.changeStubBased(e)}  
                                                                        checked={maximumStubPeriod}
                                                                  />
                                                            </Box>
                                                            <Box></Box>
                                                      </Box>
                                                      <Box direction="row" gap="medium" justify="center" margin="small">
                                                            <Button label="Save" />
                                                            <Button label="Cancel"  />
                                                      </Box>
                                                </Box>
                                          </Box>

                                    }
                              </Box>

                        </Box>

                  </Grommet>
            )
      }
}


export default StubPolicy;