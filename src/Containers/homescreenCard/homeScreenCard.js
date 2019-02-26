import React, { Component } from 'react'
import { Box, Image, Anchor} from "grommet";

export default class Card extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }
  render() {
    const {iconName, heading, link1,link2,link3} = this.props
    return (
      <div>
        <Box
          align="center"    /* making sure components are centered on both x and axes */
          justify="center"
          background="rgba(209, 213, 221, 0.22)"
          width={"280px"} /* make  sure all cards have same size and height */
          height={"250px"}
          margin="small" /*used to make sure cards are have fine gap from everywhere */
          /* gap(in the parent box) can used insted of magin but we needed to make sure cards 
          always ditance from every side even in small screens,therefore used margin */

        >
          <Image src={require(`../../assets/Icons/${iconName}.png`)} fit="contain" />
          <Anchor color="black" href="#"  primary label={heading} />
          <Anchor color="black" href="#" primary label={link1}/>
          <Anchor color="black" href="#" primary label={link2} />
          <Anchor color="black" href="#" primary label={link3} />
      </Box>
    </div>
    )
  }
}