import React, { Component } from 'react';
import { Grommet, Box, CheckBox, DataTable, Button, Text, RadioButton, Paragraph,Select, TextInput } from "grommet";
import { Close, Checkmark, Edit, FormUp, FormDown } from "grommet-icons";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/SecondaryNavbar";
import StubPolicyModal from "../../Containers/Modal/stubPolicyModal";
import axios from 'axios'

const assignRoleColumn = [
      {
            property: "role",
            header: "Role"
      },
      {
            property: "description",
            header: "Description"
      },
      
      {
            property: "status",
            header: "Status",
            render: datum => (
                  <Box>
                        {datum.status ? <Checkmark /> : <Close /> }
                  </Box>
            )
      },
]
const userRoleColumn = [
    {
          property: "emailId",
          header: "EmailId"
    },
    {
          property: "userLogon",
          header: "UserLogon"
    },
    
   
]

const controlleduserRole = userRoleColumn.map(col => Object.assign({}, col));

const controlledassignRole = assignRoleColumn.map(col => Object.assign({}, col));

class RoleManagement extends Component {
      constructor(props){
            super(props)
            this.state = {
                  
                  data1:[],
                 assignRole:true,
                 userRole:true,

                 roleManagementModalopen:false

            }
      }

      collapseassign (){
            this.setState({
                assignRole : !this.state.assignRole 
            })
      }

      collapseUserRole (){
        this.setState({
            userRole : !this.state.userRole 
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

      RoleManagementModalopen(){
            this.setState({
                  roleManagementModalopen: true
            })
      }

      RoleManagementModal(){
            this.setState({
                roleManagementModalopen: false
            })
      }
    

      render() {
            const { assignRole, priority, maximumStubPeriod, roleManagementModalopen ,userRole} = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageIcon="RoleMngmt" pageName="Role Management" />
                        </Box>
                        {roleManagementModalopen && <StubPolicyModal header="Add New Stub Policy" close={() => this.RoleManagementModal()} />}
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
                                          ...controlledassignRole
                                    ].map(col => ({ ...col }))}
                                    sortable
                                    data={this.state.data1}
                              />
                              <Box direction="row" gap="medium" justify="center" margin="small">
                                    <Button label="Add" onClick={() => this.RoleManagementModalopen()}/>
                                    <Button label="Enable"  />
                                    <Button label="Disable"  />
                                    <Button label="Delete"  />
                              </Box>


                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"39%"}}>Assign Role</Text>
                                          <Box>
                                                {! assignRole && <FormUp onClick={() => this.collapseassign()} />}
                                                {assignRole && <FormDown onClick={() => this.collapseassign()} />}
                                          </Box>
                                    </Box>
                                    { !assignRole &&
                                          <Box>
                                               <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Role :
                                         </Text>
                                </Box>
                                <Box direction="column">
                                    <Box width="200%">
                                        <Select
                                            options={['EAS USER ONLY ACCESS', 'EAS NO UI ACCESS', 'EAS GENERAL USERS', 'NO simple Search', 'No Public Folder', 'Search Exports']}
                                            
                                            onChange={({ option }) => { }}

                                        />
                                        <CheckBox/>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                    <Text>
                                    Assign to (User Logon) :
                                         </Text>
                                </Box>
                                <Box direction="row">
                                    <Box width="200%"direction="row" gap="small">
                                        <TextInput/>
                                        <Button label="Add"/>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                >
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                   
                                </Box>
                                <Box direction="column">
                                    <Box width="200%" gap="small">
                                    <Text>User Logon:Current</Text>
                                    <Box direction="row" gap="small">

                                    <Select
                                            options={['EAS USER ONLY ACCESS', 'EAS NO UI ACCESS', 'EAS GENERAL USERS', 'NO simple Search', 'No Public Folder', 'Search Exports']}
                                            
                                            onChange={({ option }) => { }}

                                        />
                                        
                                        <Button label="Remove"/>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row-responsive" align="center" justify="center" margin={{top:"small"}}>
                                <Button label="Assign"
                                primary={true}/>
                                <Button label="Cancel"/>
                                </Box>
                            
                            
                                          </Box>

                                    }
                              </Box>

                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"39%"}}>user list for EAS SUPER REVIEWER Role</Text>
                                          <Box>
                                                {! userRole && <FormUp onClick={() => this.collapseUserRole()} />}
                                                {userRole && <FormDown onClick={() => this.collapseUserRole()} />}
                                          </Box>
                                    </Box>
                                    { !userRole &&
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
                                          
                                          ...controlleduserRole
                                    ].map(col => ({ ...col }))}
                                    sortable
                                    data={this.state.data1}
                              />
                             

                                          </Box>

                                    }
                              </Box>

                        </Box>

                  </Grommet>
            )
      }
}


export default RoleManagement;