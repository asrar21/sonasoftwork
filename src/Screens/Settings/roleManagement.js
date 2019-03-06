import React, { Component } from 'react';
import { Grommet, Box, CheckBox, DataTable, Button, Text, RadioButton, Paragraph,Select, TextInput } from "grommet";
import { Close, Checkmark, Edit, FormUp, FormDown } from "grommet-icons";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";
import RoleManagementModal from "../../Containers/Modal/roleManagementModal";
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
                  superReviewers: [],
                  roleManagementData:[],
                  assignRoleCollapsed: false,
                  userRoleCollapsed: true,
                  role: "EAS SUPER REVIEWER",
                  accessAllMailboxes: false,      
                  roleManagementModalopen:false

            }
      }

      collapseassign (){
            this.setState({
                  assignRoleCollapsed : !this.state.assignRoleCollapsed 
            })
      }

      collapseUserRole (){
        this.setState({
            userRoleCollapsed : !this.state.userRoleCollapsed 
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

      RoleManagementModalClose(){
            this.setState({
                roleManagementModalopen: false
            })
      }
    //   componentDidMount(){
    //         axios.get("http://localhost:4001/stubpolicy")
            
    //           .then(response=>{
    //               console.log("AD response",response.data.Data)
    //                this.setState({
    //                 roleManagementData:response.data.Data
    //                })
          
    //           })
              
    //           .catch(error=>{
    //               console.log("error",error)
    //           })
    //       }
    //       componentDidUpdate(){
    //         axios.get("http://localhost:4001/stubpolicy")
            
    //           .then(response=>{
    //               console.log("AD response",response.data.Data)
    //                this.setState({
    //                 roleManagementData:response.data.Data
    //                })
          
    //           })
              
    //           .catch(error=>{
    //               console.log("error",error)
    //           })
    //       }
          

      render() {
            const { assignRoleCollapsed, roleManagementModalopen ,userRoleCollapsed, role, accessAllMailboxes} = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageIcon="RoleMngmt" pageName="Role Management" />
                        </Box>
                        {roleManagementModalopen && <RoleManagementModal header="Add Role" close={() => this.RoleManagementModalClose()} />}
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
                                    data={this.state.roleManagementData}
                              />
                              <Box direction="row" gap="medium" justify="center" margin="small">
                                    <Button label="Add" onClick={() => this.RoleManagementModalopen()}/>
                                    <Button label="Enable"  />
                                    <Button label="Disable"  />
                                    <Button label="Delete"  />
                              </Box>


                              <Box direction="column" margin="medium" justify="center">
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"45%"}}>Assign Role</Text>
                                          <Box>
                                                {!assignRoleCollapsed && <FormUp onClick={() => this.collapseassign()} />}
                                                {assignRoleCollapsed && <FormDown onClick={() => this.collapseassign()} />}
                                          </Box>
                                    </Box>
                                          {!assignRoleCollapsed &&
                                                <Box align="center" justify="center" direction="column" gap="medium">
                                                <Box direction="row-responsive" gap="xlarge" margin={{ left: "medium" }}>
                                                            <Box justify="center" margin={{bottom : "medium"}}>
                                                                  <Text>Role :</Text>
                                                            </Box>
                                                            <Box direction="column" gap="small">
                                                                  
                                                                  <Select
                                                                        options={['EAS USER ONLY ACCESS', 'EAS SUPER REVEIWER', 'EAS NO UI ACCESS', 'EAS GENERAL USERS', 'NO simple Search', 'No Public Folder', 'Search Exports']}
                                                                        value = {role}
                                                                        onChange={({ option }) => { this.setState({ role: option}) }}
                                                                  />
                                                                  <CheckBox label="Access all Mailboxes" checked={accessAllMailboxes} onChange={() => this.setState({ accessAllMailboxes: !this.state.accessAllMailboxes })}/>
                                                            </Box>        
                                                      </Box>
                                                      <Box direction="row-responsive" align="center" gap="xlarge" margin={{right: "medium"}}>     
                                                            
                                                                  <Text>
                                                                  Assign to (User Logon) :
                                                                  </Text>
                                                            
                                                            <Box direction="row">
                                                                  <Box direction="row" gap="small">
                                                                        <TextInput size="large"/>
                                                                        <Button label="Add"/>
                                                                  </Box>

                                                            </Box> 
                                                      </Box>
                              
                                                      <Box direction="row-responsive" justify="center" gap="small">
                                                            <Button label="Assign" primary={true}/>
                                                            <Button label="Cancel"/>
                                                      </Box>
                                                </Box>
                                          }
                              </Box>

                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"37%"}}>User List for EAS Super Reveiwer Role.</Text>
                                          <Box>
                                                {!userRoleCollapsed && <FormUp onClick={() => this.collapseUserRole()} />}
                                                {userRoleCollapsed && <FormDown onClick={() => this.collapseUserRole()} />}
                                          </Box>
                                    </Box>
                                    {!userRoleCollapsed &&
                                          <Box>
                                                <DataTable
                                                      
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
                                                      data={this.state.superReviewers}
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