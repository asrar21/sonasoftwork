import React, { Component } from "react";
//imported some components from Gromet
import { Grommet, Box} from "grommet";
//impoter theme from grommet
import { grommet } from "grommet/themes";
import Navbar from "../../Containers/Navbar/navbar";
import HomeScreenCard from "../../Containers/homescreenCard/homeScreenCard"

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

              {/* HomeScreenCard is a component made using grommet box*/}
              <HomeScreenCard iconName="information_blue" heading="INFORMATION GOVERNANCE" link1="Dashboard" link2="Content identification" link3="Data Dispostion" />
              <HomeScreenCard iconName="identification_blue" heading="IDENTIFICATION" link1="Search Archive" link2="My Archived Email" />
              <HomeScreenCard iconName="preservation_blue" heading="PRESERVATION" link1="Case" link2="Legal Hold" />
              <HomeScreenCard iconName="processing_blue" heading="PROCESSING" />
              <HomeScreenCard iconName="review_blue" heading="REVIEW" />
              <HomeScreenCard iconName="analysis_blue" heading="ANALYSIS" />
              <HomeScreenCard iconName="production_blue" heading="PRODUCTION" link1="Export" />
              <HomeScreenCard iconName="reporting_blue" heading="REPORTING" />

          </Box>
          
      </Grommet>
     
    );
  }
}


export default HomeScreen;