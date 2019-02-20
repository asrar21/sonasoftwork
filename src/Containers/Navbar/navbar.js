import React, { Component } from 'react'
import { Grommet, Box, Heading } from "grommet";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Grommet>
          <Box
            pad="small"
            background="#163552"
            border={{side: "bottom",
            color: "#EE8031",
            size: "medium"}}
          >
          <Heading margin="none" level="3" size="medium" style={{fontSize: "30px"}}>SonaVault</Heading>

          </Box>
        </Grommet>               
      </div>
    )
  }
}



export default Navbar;