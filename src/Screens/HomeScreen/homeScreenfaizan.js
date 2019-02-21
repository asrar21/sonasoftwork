import React, { Component } from 'react'
//importing iconimages from icons floder
import * as Icons from "./homeScreenIcons"
//imported some components from Gromet
import { Grommet, Box, Grid, Text ,Image,Paragraph, Anchor} from "grommet";
import Card from "../../Containers/Card/card"
//impoter theme from grommet
import { grommet } from "grommet/themes";
import Navbar from "../../Containers/Navbar/navbar";

class homeScreen extends Component {
  render() {
    return (
      <div>
          <Grommet full theme={grommet}>
            <Grid
            fill
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            
            { name: "cardsContainer", start: [0, 1], end: [1, 1] },
            // { name: "card", start: [1,1], end: [1,1 ] },
            
            
            ]}
            
            >
                <Box pad='none' margin="none" gridArea="header" >
                    <Navbar />
                </Box>

                <Box 
                    pad="xlarge"
                    background="red"
                    direction="row-responsive"
                    justify="start"
                    
                    alignContent="center"
                    align="center"
                    gap="xlarge"
                    wrap="wrap"
                    
                >
                    
                    <Card iconName={Icons.identification_blue} heading="INFORMATION GOVERNANCE" link1="DashBoard" link2="Content Identification" link3="Data Disposition" />
                    <Card iconName={Icons.identification_blue} heading="IDENTIFICATION" link1="Search Archived" link2="My Archived Email" link3="" />
                    <Card iconName={Icons.preservation_blue} heading="PRESERVATION" link1="Case" link2="Legal Hold" link3="" />
                    <Card iconName={Icons.processing_blue} heading="PROCESSING" link1="" link2="" link3="" />
                    <Card iconName={Icons.review_blue} heading="REVIEW" link1="" link2="" link3="" />
                    <Card iconName={Icons.analysis_blue} heading="ANALYSIS" link1="" link2="" link3="" />
                    <Card iconName={Icons.production_blue} heading="PRODUCTION" link1="" link2="" link3="" />
                    <Card iconName={Icons.reporting_blue} heading="REPORTING" link1="" link2="" link3="" />
                    

                </Box>
            </Grid>
          </Grommet>
      </div>
    )
  }
}



export default homeScreen
