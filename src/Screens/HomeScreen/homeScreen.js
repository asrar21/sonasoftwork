import React, { Component } from "react";
//importing iconimages from icons floder
import * as Icons from "./homeScreenIcons"
//imported some components from Gromet
import { Grommet, Box, Grid, Text ,Image,Paragraph} from "grommet";
//impoter theme from grommet
import { grommet } from "grommet/themes";
import Navbar from "../../Containers/Navbar/navbar";

 export default class Grommets extends Component {


  render() {
   
    return (
       // wrapping all the box component in a grommet component 
      <Grommet full theme={grommet}>
      {/* using grid for positioning the header and main content */}
        {/* <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
           { name: "header", start: [0, 0], end: [1, 0] },
          
            { name: "main", start: [1, 1], end: [1, 1] },
            // { name: "footer", start: [0,0], end: [1,1 ] },
            
          ]}
        > */}
        {/* the  header box */} 
          <Box
          gridArea="header"
          pad="none"
          >
            <Navbar />
          </Box>
          {/* <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="#163552"
            
            border={{side:"bottom",color:"orange" ,size:"medium"}}
          >
            
              <Text color="lightgrey"  size="xxlarge" weight="bold">SonaVault</Text>
              <Image src={Icons.profile_gray} width="50px" height="50px"/>
          
          </Box> */}
          
        {/* the wrapper box which contains all the 8 boxes */}
      <Box   
          
      direction="row"
      justify="start"
      align="center"
      // pad={{left:"medium"}}
      // pad="medium"
      margin="none"
      pad="none"
      border={{side:"all", color:"orange", size:"small"}}
      background="transparent"
      wrap={true}
      fill
      gap="100px"
      >
        {/* box for information governance */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        margin="none"
        // margin={{left:"40px"}}
        height={"235px"}
        gap="none"
      >
      <Image src={Icons.information_blue} fit="contain" />
       
       <Text size="small" color=" #362969" border={{side:"bottom", color: "orange"}}> INFORMATION GOVERNANCE</Text>
       <Paragraph size="small" margin="none" color=" #362969"
               >
        DashBoard
       
        
         </Paragraph>

       <Paragraph size="small" margin="none" color=" #362969">
       Content Identification

       </Paragraph>
       <Paragraph size="small" margin="none" color=" #362969">
       Data Disposition

       </Paragraph>
       
       
      </Box>
       {/*box for identification */}
      <Box
        pad="small"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        // margin={{left:"33px"}}
        margin="none"
        height={"235px"}
        
        gap="none"
      >
      <Image src={Icons.identification_blue} fit="contain" />
       
       <Text size="small"  color=" #362969"> IDENTIFICATION</Text>
       <Paragraph margin="none"
               color=" #362969">
        Search Archived
       
         </Paragraph>
        <Paragraph margin="none"
               color=" #362969">
        My  Archived Email
       
        </Paragraph>

       
       
      </Box>
      {/* box for preservation */}

      {<Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        // margin={{left:"33px"}}
        margin="none"
        height={"235px"}
        gap="none"
      >
      <Image src={Icons.preservation_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> PRESERVATION</Text>
       <Paragraph margin="none"
              color=" #362969" >
        Case
       
        
       </Paragraph>

       <Paragraph margin="none" color=" #362969">
       Legal Hold

       </Paragraph>
      
       
      </Box>
      /* box for processing */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        // margin={{left:"33px"}}
        margin="none"
        height={"235px"}
        gap="none"
      >
      <Image src={Icons.processing_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> PROCESSING</Text>
       <Paragraph margin="none"
               >
     
       
        
       </Paragraph>

       <Paragraph margin="none">
      

       </Paragraph>
      
       
      </Box>
     
   {/* box for review */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        // margin={{left:"33px"}}
        margin="none"
        height={"235px"}
        gap="none"
      >
      <Image src={Icons.review_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> REVIEW</Text>
       <Paragraph margin="none"
               >
     
       
        
       </Paragraph>

       <Paragraph margin="none">
      

       </Paragraph>
      
       
      </Box>
      {/* box for analysis */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        // margin={{left:"33px"}}
        margin="none"
        height={"235px"}
        gap="none"
      >
      
      <Image src={Icons.analysis_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> ANALYSIS</Text>
       <Paragraph margin="none"
               >
     
       
        
       </Paragraph>

       <Paragraph margin="none">
      

       </Paragraph>
      
       
      </Box>
      {/* box for production  */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        // margin={{left:"33px"}}
        margin="none"
        height={"235px"}
        gap="none"
      >
      <Image src={Icons.production_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> PRODUCTION</Text>
       <Paragraph margin="none"
               color=" #362969">
               Export
     
       
        
       </Paragraph>

       <Paragraph margin="none">
      

       </Paragraph>
      
       
      </Box>
      {/* box for reporting */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"235px"}
        // margin={{left:"33px"}}
        margin="none"
        height={"235px"}
        gap="none"
      >
      <Image src={Icons.reporting_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> REPORTING</Text>
       <Paragraph margin="none"
              color=" #362969" >
     
       
        
       </Paragraph>

       <Paragraph margin="none">
      

       </Paragraph>
      
       
    
        </Box> 
          </Box>
         
        
        {/* </Grid> */}
       
       
      </Grommet>
     
    );
  }
}


