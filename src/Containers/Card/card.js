import React, { Component } from 'react'
// import './card.css'
import { Grommet, Box, Grid, Text ,Image,Paragraph, Anchor} from "grommet";
import * as Icons from "../../Screens/HomeScreen/homeScreenIcons"


export default class Card extends Component {
  constructor(props){
    super(props)
    this.state={}

  }
  render() {
    const {IconName, heading, link1,link2,link3} = this.props
    return (
      <div>
        <Box    
          pad="medium"
          margin="medium"
          background="rgba(209, 213, 221, 0.22)"
          direction="column"
          gap="none"
          align="center"
          alignContent="center"
          justify="end"
          width={"100%"}
          // height={"40%"}
        >
          <Image src={IconName} fit="contain" />
          <Anchor pad="none" margin="none" href="#" as="h1" primary label={heading} />
          <Anchor pad="none" margin="none" href="#" as="p" primary label={link1} />
          <Anchor pad="none" margin="none" href="#" as="p" primary label={link2} />
          <Anchor pad="none" margin="none" href="#" as="p" primary label={link3} />
      </Box>
    </div>
    )
  }
}