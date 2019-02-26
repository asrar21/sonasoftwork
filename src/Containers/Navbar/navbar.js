import React, { Component } from 'react'

import { Grommet, Box, Text } from "grommet";

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
                    size: "medium"
                  }}
          >
              <Text color="lightgrey"  size="xxlarge" weight="bold">SonaVault</Text>

          </Box>
        </Grommet>               

      </div>
    )
  }
}

export default Navbar;

