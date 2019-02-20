import React, { Component } from 'react'
import { Grommet, Box, Collapsible, ResponsiveContext, Text } from "grommet";
import Navbar from "./Containers/Navbar/navbar"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  render() {
    const open = this.state
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
            // justify="evenly"
            
          >
            <ResponsiveContext.Consumer>
              {(size) => (
                size == "medium" ?  <Box fill background="#2e3c54"  margin="none" pad="xlarge" basis="1/4" ></Box> : null 
                
              )}
            </ResponsiveContext.Consumer>
            
            <Box background="grey" pad="xlarge" margin="none" basis="1" width={"100%"} ></Box>

          </Box>
        </Grommet>
      </div>
    )
  }
}



export default App;