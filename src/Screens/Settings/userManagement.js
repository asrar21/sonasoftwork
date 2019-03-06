import React, { Component } from 'react'
import { Grommet, Box, DataTable, Text, Paragraph, Button, RadioButton } from "grommet";
import { Edit, FormUp, FormDown } from "grommet-icons";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";
import UserManagementModal from "../../Containers/Modal/userManagementModal";
import axios from 'axios';

const userManagementColumn = [
      {
            property: "userName",
            header: "User Name"
      },
      {
            property: "displayName",
            header: "Display Name"
      },
      {
            property: "mailbox",
            header: "Mailbox"
      },
      {
            property: "userType",
            header: "User Type"
      },
      {
            property: "role",
            header: "Role",
      },
]

const controlleduserManagementColumn = userManagementColumn.map(col => Object.assign({}, col));

class UserManagement extends Component {
      constructor(props){
            super(props)
            this.state = {
                  AD: true,
                  UserModalOpened: true,
                  data1:[]   
            }
      }

      collapseUserManagement(){
            this.setState({
                  userManagementCollapsed: !this.state.userManagementCollapsed
            })
      }

      changeAuthenticationType(event){
            const options = ['local', 'AD']
            options.map(value => {
                  this.setState({
                        [value] : false
                  })
            })
            this.setState({
                  [event.target.value] : true
            })
      };

      openModal(){
            this.setState({
                  UserModalOpened: true
            })
      }

      closeModal(){
            this.setState({
                  UserModalOpened: false
            })
      }

      fetchData(){
        axios.get("http://localhost:4001/usermanagement")
        
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
            const { userManagementCollapsed, UserModalOpened, local, AD } = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageName="User Management" pageIcon="UserManagement" />
                        </Box>
                        {UserModalOpened && <UserManagementModal header="Add User"  update={this.fetchData()}close={() => this.closeModal()} />}
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
                                          ...controlleduserManagementColumn
                                    ].map(col => ({ ...col }))}
                                    sortable
                                    data={this.state.data1}
                              />
                              <Box direction="row" justify="center">
                                    <Button label="Add" onClick={() => this.openModal()} />
                              </Box>
                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"39%"}}>User Management Settings</Text>
                                          <Box>
                                                {!userManagementCollapsed && <FormUp onClick={() => this.collapseUserManagement()} />}
                                                {userManagementCollapsed && <FormDown onClick={() => this.collapseUserManagement()} />}
                                          </Box>
                                    </Box>
                                    { !userManagementCollapsed &&
                                          <Box>
                                                <Box align="center" fill="horizontal" direction="column">
                                                      <Box direction="row" justify="between" gap="large">
                                                            <Box>
                                                                  <Paragraph>Type :</Paragraph>  
                                                            </Box>
                                                            <Box direction="row-responsive" gap="medium" >
                                                                  <RadioButton 
                                                                        label= "AD" 
                                                                        name="authrnticationType" 
                                                                        value="AD" 
                                                                        onChange={(e) => this.changeAuthenticationType(e)} 
                                                                        checked={AD}
                                                                  />
                                                                  <RadioButton 
                                                                        label="Local" 
                                                                        name="authrnticationType" 
                                                                        value="local" 
                                                                        onChange={(e) => this.changeAuthenticationType(e)}  
                                                                        checked={local}
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
};

export default UserManagement;
