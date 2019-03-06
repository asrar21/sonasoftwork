import React, { Component } from 'react';
//import components from grommet
import{ Box, 
        Grommet, 
        CheckBox,
        DataTable,
        Button
      } 
from "grommet"

import MailboxModal from '../../Containers/Modal/mailboxModal';

class MailboxAccess extends Component
{
    constructor(props)
    {
        super(props)
        this.state={selectAll:false,addUserModal:false}
    }
    openAddUserModal = () => {
        this.setState({
          addUserModal :!this.state.addUserModal
        })
      }
    AddUserModalClose = () => {
        this.setState({
          addUserModal : false
        })
      }

    render()
    {
    const {addUserModal}=this.state

        return(
            <Grommet>
            <div>
            {addUserModal && <MailboxModal header="Add User" close={() => this.AddUserModalClose()} /> }
                <Box margin="small">
                <DataTable
                columns={[
                    {
                    property: 'checkBox',
                    header: <CheckBox
                                checked={this.state.selectAll}
                                onChange={(event) => this.setState({selectAll: event.target.checked}) }
                            />,
                    },
                    {
                    property: 'edit',
                    header: 'Edit',
                    },
                    {
                    property: 'userlogon',
                    header: 'User Logon',
                    
                    },
                    {
                    property: "emailid",
                    header: "Email Id"
                    },
                ]}
                />
                </Box>

                <Box 
                align="center"
                >
                  {/*add button*/}
                  <Box  direction="row" >
                    <Box margin="small"  >
                        <Button
                        primary
                        label="Add" 
                        onClick={this.openAddUserModal} />
                    </Box>
                    

                    {/*remove button*/}
                    <Box margin="small" >
                     <Button
                     label="Remove" 
                     onClick={()=>{}} />
                    </Box>
                    </Box>
                </Box>
            </div>
            </Grommet>
        )
    }
} 
export default MailboxAccess
