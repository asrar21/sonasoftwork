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
    this.state = {date:"31-Dec-2019",
                  authKey:"3pHYITTOXCcJV8I7hbo11A==",
                  licensedto:"Sonasoft Corp",
                  expire:"31-Dec-2019",
                  mailboxes:"5500",
                  activeDirectories:"10",
                  emailServer:"10"

                }
                    }
  
  render() {    
        return(
            <div>
                <Grommet>
                <Heading size ="small">Activate Product</Heading>
                <Box
                    border={{color:"light-4"}}
                    pad="small"
                >
                    <Text size="large">Warning :</Text>
                    <br/>
                    <Text >License will Expire On {this.state.date}.</Text>
                    <br/>
                    <Text size="large">Authorization Key :</Text>
                    <Text >{this.state.authKey}</Text>
                    <Text size="large">License Information :</Text>
                    <br/>
                    <Text>Licensed To={this.state.licensedto}</Text>
                    <Text>Expiry Date={this.state.expire}</Text>
                    <Text>Mailbox(es)={this.state.mailboxes}</Text>
                    <Text>Active Directories={this.state.activeDirectories}</Text>
                    <Text>Email Server(s)={this.state.emailServer}</Text>
                    <br/>

                    <Box margin="xsmall" 
                     width="medium"
                     border={{color:"dark-2"}}
                    >
                        <Box margin="xxsmall" 
                        border={{color:"dark-2"}}
                        >
              
                            <Box gap="xsmall" >

                            {/*choose file button*/}
                            <Box width="small" margin="small">
                            <Button
                            primary
                            label="Choose File"
                            onClick={() => {}}
                            />
                            </Box>

                            {/*upload license key button*/}
                            <Box width="small">
                            <Button 
                            primary
                            label="Upload License Key"
                            onClick={() => {}} />
                            </Box>
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