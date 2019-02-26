  import React, { Component } from 'react';
  //importing components from grommet
  import { 
    Grommet,
     Box, 
     ResponsiveContext,
     Button,
     Image, 
     Text , 
     Heading, 
     TextInput, 
     Markdown,
     Menu
    } from "grommet";
  //imported icon from assets/Icons Folder
  import sonaLogo from "../../assets/Icons/sonaLogo.png"
  //imported icon from grommeticons library
  import { Login, CircleInformation } from 'grommet-icons';


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
          {/* using Grommet to wrap all the grommet component */}
          <Grommet full theme={myTheme}>
          
        
          {/* main Box which holds all the boxes */}
            <Box
              fill
              pad="none"
              margin="none"
              direction="row"
              align="stretch"
              alignContent="stretch"
            >
            {/* to make the box responsive we used this */}
              <ResponsiveContext.Consumer>
                {(size) => (
                  size === "medium" ?  (
              // sidebar box
                  <Box 
                    fill 
                    pad="medium" 
                    background="#2e3c54"  
                    direction="column"
                    justify="center"
                    align="center"
                    basis="1/4" 
                  >
                      <Box height="small" pad="small" width="small"  >
                        <Image src={sonaLogo} fit="contain" margin="small" alignSelf="center"/>
                          <Text textAlign="center" size="small">Version 6.5.0.0</Text>
                      </Box>

                  </Box>  
                  
                  
                  )
                  : null 
                  
                )}
              </ResponsiveContext.Consumer>
            
              
              
                
              
              {/* box which contain textboxes ,labeling and icon button */}
              <Box 
                justify="start"
                align="start"
                direction="column"
                background="white" 
                pad="small" 
                margin="none" 
                basis="1" 
            
                width={"100%"} 
              
              >
            
                  
                <Box  
                    justify="between"
                    align="start"
                    width={"100%"}
                    direction="row"
                  >
                   <Menu
                    label="Configuration & Notification by Asrar"
                    items={[
                      { label: 'configuration', onClick: () => {window.location.pathname = "/configuration"} },
                      { label: 'notification', onClick: () => { window.location.pathname = "/notification"} },
                    ]}
                  />
                    <Menu
                      label="Setting's Screens By Faizan"
                      items={[
                        { label: 'Email Server', onClick: () => { window.location.pathname = "settings/emailServer"} },
                        { label: 'Content Identification Policy', onClick: () => { window.location.pathname = "settings/contentIdentificationPolicy"} },
                        { label: 'Labeling Policy', onClick: () => { window.location.pathname = "settings/labelingPolicy" } }
                      ]}
                  />
                    <CircleInformation cursor="pointer" textDecoration="none" />
                </Box>
              
                <Box 
                  height="medium" 
                  width="300px"
                  justify="end"
                  alignSelf="center" 
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
                    <TextInput size="small" type="password" placeholder="Enter your password" name="Password" onChange={(event) => {/* event.target.value */}} />
                    <Box pad ="20px">
                        <Button 
                          icon={<Login />}
                          label="sign in"
                          alignSelf="start"
                          plain="True"
                          onClick={() => this.props.history.push("/homescreen")}
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
