import React, { Component } from 'react'
import { Grommet, Box, ResponsiveContext, Image, Paragraph } from "grommet";
import sonaLogo from "./assets/images/sonaLogo.png"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div>
        <Grommet full>
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
                size == "medium" ?  (
                
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
                  <Image src={sonaLogo} fit="contain" margin="medium" width="150px"/>
                  <Paragraph>Version 6.5.0.0</Paragraph>
                </Box>  
                
                
                )
                : null 
                
              )}
            </ResponsiveContext.Consumer>
            
            <Box 
              background="grey" 
              pad="xlarge" 
              margin="none" 
              basis="1" 
              width={"100%"} 
            >
            </Box>

          </Box>
        </Grommet>
      </div>
    )
  }
}



export default App;