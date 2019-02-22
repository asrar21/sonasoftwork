import React, { Component } from "react";
//imported some components from Gromet
import { Grommet, Box} from "grommet";
//impoter theme from grommet
import { grommet } from "grommet/themes";
import Navbar from "../../Containers/Navbar/navbar";
import Card from "../../Containers/Card/card"

 class HomeScreen extends Component {
  render() {
    return (
       // wrapping all the box component in a grommet component 
      <Grommet full theme={grommet}>
          {/* conatiner for navbar */}
          <Box pad="none" >
            <Navbar />
          </Box>
          
          {/*container for 8 cards */}
          <Box direction="row" justify="center" wrap={true} >
              {/* Card is a component made using grommet box*/}
              <Card iconName="information_blue" heading="INFORMATION GOVERNANCE" link1="Dashboard" link2="Content identification" link3="Data Dispostion" />
              <Card iconName="identification_blue" heading="IDENTIFICATION" link1="Search Archive" link2="My Archived Email" />
              <Card iconName="preservation_blue" heading="PRESERVATION" link1="Case" link2="Legal Hold" />
              <Card iconName="processing_blue" heading="PROCESSING" />
              <Card iconName="review_blue" heading="REVIEW" />
              <Card iconName="analysis_blue" heading="ANALYSIS" />
              <Card iconName="production_blue" heading="PRODUCTION" link1="Export" />
              <Card iconName="reporting_blue" heading="REPORTING" />

          </Box>
          
      </Grommet>
     
    );
  }
}


export default HomeScreen;