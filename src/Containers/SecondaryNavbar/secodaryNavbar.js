import React, { Component } from 'react'
import { Grommet, Box, Text, Paragraph, Image } from "grommet";
import { CircleInformation, User } from 'grommet-icons';

class secodaryNavbar extends Component {
      constructor(props){
            super(props)
            this.state = {}

      }
      render() {
            const { pageName, pageIcon } = this.props
            console.log(`../../assets/otherIcons/${pageIcon}.png`)
      return (
            <Grommet>
                  <Box
                  pad="xsmall"
                  direction="row"
                  justify="between"
                  border={{side: "bottom", color: "black", size:"xsmall"}}
                  >
                        <Box direction="row">
                              <Image src={require(`../../assets/otherIcons/${pageIcon}.png`)} />
                              <Text size="large" weight="bold">{pageName}</Text>
                        </Box>
                  <Box direction="row" gap="10px" >

                        <CircleInformation cursor="pointer" textDecoration="none" />
                        <Paragraph margin="none" >Help</Paragraph>
                        <Image src={require(`../../assets/Icons/profile_purple.png`)} width="25px" height="25px" />

                  </Box>
                  </Box>
            </Grommet>
            
      )
      }
}

export default secodaryNavbar; 