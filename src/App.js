import React, { Component } from 'react'
import { Grommet, Box, Collapsible } from "grommet";
import Navbar from "./Containers/Navbar/navbar"

class App extends Component {
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
            // justify="evenly"
            
          >
            
            <Collapsible direction="horizontal" open={true}>
              <Box background="#2e3c54" margin="none" pad="xlarge" ></Box>
            </Collapsible>
            
            <Box background="grey" pad="xlarge" margin="none" width={"100%"} ></Box>

          </Box>
        </Grommet>
      </div>
    )
  }
}



export default App;