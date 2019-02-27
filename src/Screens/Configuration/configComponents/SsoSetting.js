
  

import React, { Component } from 'react';
//import components from grommet
import{ Box, 
        Grommet, 
        Heading,
        Text,
        Button,
        TextInput,
        CheckBox,
        
      } 
from "grommet"

class SSOSetting extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        ischecked:false
    }
                    } 
  
  render()
  {
    //theme of save button
    const Theme = {
      button: {
        border:  {
          radius: undefined,
          color: "#2196f3"
        },
        primary: {
          color: "#2196f3"
        },
        extend:  {
          color: "white"
      }
    }
    }
    //theme of Cancel button
    const Theme1 = {
      button: {
        border:  {
          radius: undefined,
          color: "dark-3"
        },
        primary: {
          color: "white"
        },
      }
    }
      return(
        <div>
        <Grommet>
            <Heading size ="small"></Heading>
            <Box  
            >
                
                <Box 
                direction="row"
                border={{color:"light-3"}}
                
                >
                    <Box width="medium" 
                         border={{color:"light-3"}}
                    >
                     
                     <Text>Identity Provider URL:</Text>
                      
                    </Box>
                   
                    <Box>  
                     
                        <Box direction="row">
                        <Box>
                         <TextInput></TextInput>
                        </Box>
                        
                        </Box>
                       
                    </Box>
                </Box>
                <Box 
                direction="row"
                border={{color:"light-3"}}
                
                >
                    <Box width="medium" 
                         border={{color:"light-3"}}
                    >
                     
                     <Text>Service Provider URL:</Text>
                      
                    </Box>
                   
                    <Box>  
                     
                        <Box direction="row">
                        <Box>
                         <TextInput></TextInput>
                        </Box>
                        
                        </Box>
                       
                    </Box>
                </Box>

                <Box 
                direction="row"
                border={{color:"light-3"}}
                
                >
                    <Box width="medium" 
                         border={{color:"light-3"}}
                    >
                     
                     <Text>Issuer:</Text>
                      
                    </Box>
                   
                    <Box>  
                     
                        <Box direction="row">
                        <Box>
                         <TextInput></TextInput>
                        </Box>
                        
                        </Box>
                       
                    </Box>
                </Box>
                <Box 
                direction="row"
                border={{color:"light-3"}}
                
                >
                    <Box width="medium" 
                         border={{color:"light-3"}}
                    >
                     
                     <Text>Public Certificate :</Text>
                      
                    </Box>
                   
                    <Box>  
                     
                        <Box direction="row">
                        <Box direction="row-responsive">
                         <TextInput></TextInput>
                         <Button label="Add"></Button>
                        </Box>
                        
                        </Box>
                       
                    </Box>
                </Box>

                <Box 
                direction="row"
                border={{color:"light-3"}}
                
                >
                    <Box width="medium" 
                         border={{color:"light-3"}}
                    >
                     
                     <Text>Enable:</Text>
                      
                    </Box>
                   
                    <Box>  
                     
                        <Box direction="row">
                        <Box>
                         <CheckBox
                          checked={this.state.ischecked}
                          onChange={(event) => this.setState({ischecked:event.target.checked})}
                         />
                        </Box>
                        
                        </Box>
                       
                    </Box>
                </Box>

                <Box 
                border={{color:"light-4"}} 
                align="center"
                >
                  <Box  direction="row" >
                    {/*save button*/}
                    <Grommet >
                    <Box margin="small"  >
                        <Button
                        primary
                        label="Save" 
                        onClick={() => {}} />
                    </Box>
                    </Grommet>

                    {/*run button*/}
                    <Grommet >
                    <Box margin="small" >
                     <Button
                     
                     label="Cancel" 
                     onClick={() => {}} />
                    </Box>
                    </Grommet>

                </Box>
                </Box>




                

                

                
            </Box>  
          </Grommet>
          </div>
            
      )
  }
}
export default SSOSetting


