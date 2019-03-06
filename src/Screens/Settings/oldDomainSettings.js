import React, { Component } from 'react';
//import components from grommet
import{ Box, 
        Grommet, 
        CheckBox,
        DataTable,
        Button
      } 
from "grommet"

import OldDomainModal from '../../Containers/Modal/oldDomainModal';

class OldDomainSettings extends Component
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
            {addUserModal && <OldDomainModal header="Add Domain" close={() => this.AddUserModalClose()} /> }
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
                    property: 'olddomainname',
                    header: 'Old Domain Name',
                    
                    },
                    {
                    property: "description",
                    header: "Description"
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
                    

                    {/*delete button*/}
                    <Box margin="small" >
                     <Button
                     label="Delete" 
                     onClick={()=>{}} />
                    </Box>
                    </Box>
                </Box>
            </div>
            </Grommet>
        )
    }
} 
export default OldDomainSettings
