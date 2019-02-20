import React, { Component } from 'react';
import { Grommet, Box, ResponsiveContext,Button,Image, Text , Heading, TextInput, Markdown} from "grommet";
import sonaLogo from "../src/images/sonaLogo.png"
import { Login,CircleInformation } from 'grommet-icons';

class LogIn extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  render() {
    const myTheme = {
      global:{
        font: {
          family: 'Roboto',
        },
        control:{
          border:{
            width: "2px",
          },
        },
      },
    }
    return (
      <div>
        <Grommet full theme={myTheme}>
          <Box
            fill
            pad="none"
            margin="none"
            direction="row"
            align="stretch"
            alignContent="stretch"
          >
          
            <ResponsiveContext.Consumer>
              {(size) => (
                size === "medium" ?  (
                
                <Box 
                  fill 
                  margin="none" 
                  pad="medium" 
                  background="#2e3c54"  
                  direction="column"
                  justify="center"
                  align="center"
                  alignContent="start"
                  basis="1/4" >
                  <Box height="small" width="small"  >
                  <Image src={sonaLogo} fit="contain" margin="xsmall" alignSelf="center"/>
                  <Text textAlign="center">Version 6.5.0.0</Text>
                  </Box>
                </Box>  
                
                
                )
                : null 
                
              )}
            </ResponsiveContext.Consumer>
            
            <Box 
            
              justify="end"
              align="center"
              background="white" 
              pad="xlarge" 
              margin="none" 
              basis="1" 
              width={"100%"} 
            >
              <Box >
                <CircleInformation color='plain' size='medium' /> 
              </Box>
              <Box 
                basis="1" 
                height="medium" 
                width="300px" 
              >
                <Heading  
                  size="small" 
                  alignSelf ="start" 
                >
                <Markdown>**SonaVault Login**</Markdown>
                </Heading>
                <Text alignSelf="start"  size="medium">Email :</Text>
                <TextInput size="small" placeholder="Enter your email" name="Email" onChange={(event) => {/* event.target.value */}} />
                <Text  alignSelf="start"  size="medium">Password :</Text>
                <TextInput size="small" placeholder="Enter your password" name="Password" onChange={(event) => {/* event.target.value */}} />
                <Box pad ="20px">
                  <Button 
                    icon={<Login />}
                    label="sign in"
                    alignSelf="start"
                    plain="True"
                    onClick={() => {}}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grommet>
      </div>
    )
  }
}

export default LogIn;
