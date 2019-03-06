import React, {Component} from "react"
//import components from grommet
import{ Box, 
    Grommet, 
    Heading,
    Text,
    Button,
    TextInput,
    CheckBox,
    RadioButton,
    Select,
    TextArea
  } 
from "grommet"
class FolderSyncPolicy extends Component
{
    constructor(props)
        {
            super(props)
            this.state={selectServer: "Select Value"}
        }
    render()
    {
        
        return(
            <div>
                <Box pad="small">
                        <Heading size ="small">Folder Sync Policy</Heading>
                        <Box 
                        pad="small"
                        border="bottom"
                        >
                        <Text>Mailboxes as per configured archival policy</Text>
                        </Box>
                        
                        <Box 
                            direction="row"
                            pad="small"
                            >
                                <Box  
                                width="large" 
                                >
                                Server:
                                </Box>

                                <Box fill >
                                <Select
                                options={['Distribution Group','MAIL2010','outlook.office365.com', 'Security Group','WIN-IF6DPGSF7FJ']}
                                value={this.state.selectServer}
                                onChange={({ option }) => this.setState({ selectServer: option })}
                                />
                                </Box>
                        </Box>
                        
                        <Box 
                            direction="row"
                            pad="small"
                            >
                                <Box  
                                width="large"
                                >
                                Available Mailboxes
                                </Box>
                                <Box  
                                >
                                Selected  Mailboxes
                                </Box>
                        </Box>
                        
                        <Box
                            direction="row"
                            pad="small"
                            >
                            <Box
                            width="medium"
                            >
                            <Box height="small" overflow="auto" border={{color:"dark-5"}}>
                            <Box pad="xlarge"></Box>
                            <Box pad="xlarge"></Box>
                            </Box>
                            </Box>
                            
                            <Box
                            width="medium"
                            >
                            </Box>

                            <Box
                            width="medium"
                            >
                            <Box height="small" overflow="auto" border={{color:"dark-5"}}>
                            <Box pad="xlarge"></Box>
                            <Box pad="xlarge"></Box>
                            </Box>
                            </Box>
                        </Box>
                        
                        <Box 
                            align="center"
                            >
                                <Box  direction="row" >
                                {/*save button*/}
                                <Box margin="small"  >
                                    <Button
                                    primary
                                    label="Save" 
                                    onClick={() => {}} />
                                </Box>

                                {/*refresh button*/}
                                <Box margin="small" >
                                    <Button
                                    label="Refresh" 
                                    onClick={()=>{}} />
                                </Box>
                                </Box>
                        </Box>
                </Box>

            </div>
        )
    }
}
export default FolderSyncPolicy