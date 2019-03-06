import React, { Component } from 'react';
import { Grommet, Box, CheckBox, DataTable, Button, Text, RadioButton, Paragraph } from "grommet";
import { Close, Checkmark, Edit, FormUp, FormDown } from "grommet-icons";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/SecondaryNavbar";
import StubPolicyModal from "../../Containers/Modal/stubPolicyModal";
import axios from 'axios'

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
                  priority: true,
                  data1:[]
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

      openStubPolicyModal(){
            this.setState({
                  stubPolicyModalOpen: true
            })
      }

      closeStubPolicyModal(){
            this.setState({
                  stubPolicyModalOpen: false
            })
      }
      fetchData(){
            axios.get("http://localhost:4001/stubpolicy")
            
              .then(response=>{
                  
                   this.setState({
                    data1:response.data.Data
                   })
          
              })
              
              .catch(error=>{
                  console.log("error",error)
              })
          }
          componentDidMount(){
            this.fetchData()
          }
          

      render() {
            const { stubSettingsCollapsed, priority, maximumStubPeriod, stubPolicyModalOpen } = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageIcon="StubPolicy" pageName="StubPolicy" />
                        </Box>
                        {stubPolicyModalOpen && <StubPolicyModal header="Add New Stub Policy" update={this.fetchData()} close={() => this.closeStubPolicyModal()} />}
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
                                    data={this.state.data1}
                              />
                              <Box direction="row" gap="medium" justify="center" margin="small">
                                    <Button label="Add" onClick={() => this.openStubPolicyModal()}/>
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