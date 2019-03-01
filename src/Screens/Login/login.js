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
                    label="Screens Links"
                    items={[
                      { label: 'configuration(Asrar)', onClick: () => {window.location.pathname = "/configuration"} },
                      { label: 'notification(Asrar)', onClick: () => { window.location.pathname = "/notification"} },
                      { label: 'ArchivalEmail(Asrar)', onClick: () => { window.location.pathname = "/ArchivalEmail"} },
                      { label: 'EmailStatistics(Asrar)', onClick: () => { window.location.pathname = "/EmailStatistic"} },
                      { label: 'Attachment(Asrar)', onClick: () => { window.location.pathname = "/Attachments"} },
                      { label: 'Compliance(Asrar)', onClick: () => { window.location.pathname = "/Compliances"} },
                      { label: 'AccessControl(Asrar)', onClick: () => { window.location.pathname = "/AccessControls"} },
                      { label: 'ArchiveStoreStatistics(Asrar)', onClick: () => { window.location.pathname = "/ArchiveStore"} },
                      { label: 'ConfigurationManagemnt(Asrar)', onClick: () => { window.location.pathname = "/ConfigurationManagemnt"} },
                      { label: 'DataInformationLeakagePrevention(Asrar)', onClick: () => { window.location.pathname = "/DataInformationLeakagePrevention"} },
                      { label: 'Report Retention Policy(Asrar)', onClick: () => { window.location.pathname = "/Retention_Policy"} },
                      { label: 'Report NonQualifiedEmails(Asrar)', onClick: () => { window.location.pathname = "/NonQualifiedEmails"} },
                      { label: ' Report Purge_Policy(Asrar)', onClick: () => { window.location.pathname = "/Purge_Policy"} },
                      { label: 'Email Server(Faizan)', onClick: () => { window.location.pathname = "settings/emailServer"} },
                      { label: 'Content Identification Policy(Faizan)', onClick: () => { window.location.pathname = "settings/contentIdentificationPolicy"} },
                      { label: 'Labeling Policy(Faizan)', onClick: () => { window.location.pathname = "settings/labelingPolicy" } },
                      { label: 'Retention Policy(Faizan)', onClick: () => { window.location.pathname = "settings/retentionPolicy" } },
                      { label: 'Activate Product(Hafsa)', onClick: () => { window.location.pathname = "activateProduct"} },
                      { label: 'Purge Policy(Hafsa)', onClick: () => { window.location.pathname = "purgePolicy"} },
                      { label: 'Archival Policy(Hafsa)', onClick: () => { window.location.pathname = "settings/archivalPolicy"} },
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
