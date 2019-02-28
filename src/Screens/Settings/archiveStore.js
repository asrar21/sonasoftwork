import React, { Component } from 'react'
import { Grommet, Box } from "grommet";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";

class archiveStore extends Component {
  render() {
    return (
      <Grommet>
            <Box>
                  <SecondaryNavbar pageName="Archive Store" pageIcon="ArchiveStore" />
            </Box>
      </Grommet>
    )
  }
};

export default archiveStore;
