import React, { Component } from 'react';
import { Grommet, Box, CheckBox, Button, Text, RadioButton, Paragraph } from "grommet";
import { Close, Checkmark, Edit, FormUp, FormDown } from "grommet-icons";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";
import StubPolicyModal from "../../Containers/Modal/stubPolicyModal";
import CustomDataTable from "../../Containers/DataTable/dataTable";
import axios from 'axios'

const stubPolicyColumn = [
      {
            property: "name",
            header: "Name",
            search: "name",
            
      },
      {
            property: "description",
            header: "Description",
            search: "description"
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
                        {datum.activeCheckbox ? <Checkmark /> : <Close /> }
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
                    data1:response.data.Data,
                    edited: true
                   })
          
              })
              
              .catch(error=>{
                  console.log("error",error)
              })
          }

          componentDidMount(){
            this.fetchData()
          }

      editDone(){
            console.log("edit done")
            this.setState({
                  edited: false 
            })
      }
          

      render() {
            console.log("stub policy render running")
            const { stubSettingsCollapsed, priority, edited, maximumStubPeriod, stubPolicyModalOpen } = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageIcon="StubPolicy" pageName="StubPolicy" />
                        </Box>
                        {stubPolicyModalOpen && <StubPolicyModal header="Add New Stub Policy" update={() => this.fetchData()} close={() => this.closeStubPolicyModal()} />}
                        <Box>
                              {/*instructions on how to USE CUSTOMDATATABLE Component*/}
                              {/* INSERTING COLUMN : pass your columns array column to columns prop except checkbox and edit column, if you want checkbox column add checkbox prop, 
                              if you want edit column add edit prop, for data, 
                              INSERTING DATA: pass the data in data prop
                              UPDATING DATATABLE: one important thing to be able to to update the table without refreshing create a edited state with default value 
                              of false and pass this state to edited prop in CustomDataTable, and set this edited state to true in fetchData function with setState 
                              method,create a function editDone,inside it set the edited state to false using setState method and pass this function to editDone prop 
                              in CustomDataTable 
                              SEARCHING: to make a column searchable,just add search: {property} in that particular column, see name and description column
                              */}

                              <CustomDataTable columns= {controlledstubPolicyColumn} data={this.state.data1} edited={edited} editDone={() => this.editDone()} edit checkBox />
                              <Box direction="row" gap="medium" justify="center" margin="small">
                                    <Button label="Add" primary onClick={() => this.openStubPolicyModal()}/>
                                    <Button label="Enable"  />
                                    <Button label="Disable"  />
                                    <Button label="Delete"  />
                              </Box>


                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"42%"}}>Stub Policy Settings</Text>
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
                                                      <Box direction="row" gap="small" justify="center" margin="small">
                                                            <Button label="Save" primary />
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