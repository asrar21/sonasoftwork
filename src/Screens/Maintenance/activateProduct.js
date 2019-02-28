import React, { Component } from 'react';
//import components from grommet
import{ Box,
        Heading,
        Text,
        Button,
        Grommet
      } 
from "grommet"

class ActivateProduct extends Component {
  
  constructor(props){
    super(props)
    this.state = {}
                    }
  
  render() {
    //theme of choose file button
    const Theme = {
      button: {
        border: {
          radius: undefined,
          color: "light-4"
        },
        primary: {
          color: "light-4"
        }
      }
    }
    //theme of upload license button
    const Theme1 = {
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
    
        return(
            <div>
                <Grommet>
                <Heading size ="small">Activate Product</Heading>
                <Box
                    border={{color:"light-4"}}
                >
                    <Text size="large">Warning :</Text>
                    <br/>
                    <Text >License will Expire On 31-Dec-2019.</Text>
                    <br/>
                    <Text size="large">Authorization Key :</Text>
                    <Text >3pHYITTOXCcJV8I7hbo11A==</Text>
                    <Text size="large">License Information :</Text>
                    <br/>
                    <Text>Licensed To=Sonasoft Corp</Text>
                    <Text>Expiry Date=31-Dec-2019</Text>
                    <Text>Mailbox(es)=5500</Text>
                    <Text>Active Directories=10</Text>
                    <Text>Email Server(s)=10</Text>
                    <br/>

                    <Box margin="xsmall" 
                     width="medium"
                     border={{color:"dark-2"}}
                    >
                        <Box margin="xxsmall" 
                        border={{color:"dark-2"}}
                        >
              
                            <Box gap="xsmall" >

                            <Grommet theme={Theme}>
                            {/*choose file button*/}
                            <Box width="small" margin="small">
                            <Button
                            primary
                            label="Choose File"
                            onClick={() => {}}
                            />
                            </Box>
                            </Grommet>

                            <Grommet theme={Theme1}>
                            {/*upload license key button*/}
                            <Box width="300px">
                            <Button 
                            primary
                            label="Upload License Key"
                            onClick={() => {}} />
                            </Box>
                            </Grommet>

                            </Box>
                        </Box>
                     </Box>
                </Box>
                </Grommet>
            </div>
        )
  }
}
export default ActivateProduct