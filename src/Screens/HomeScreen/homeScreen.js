import React, { Component } from "react";
//importing iconimages from icons floder
import information_blue from '../../assets/Icons/information_blue.png';
import identification_blue from '../../assets/Icons/identification_blue.png';
import preservation_blue from '../../assets/Icons/preservation_blue.png';
import processing_blue from '../../assets/Icons/processing_blue.png';
import review_blue from '../../assets/Icons/review_blue.png';
import analysis_blue from '../../assets/Icons/analysis_blue.png';
import production_blue from '../../assets/Icons/production_blue.png';
import reporting_blue from '../../assets/Icons/reporting_blue.png';
import profile_gray from '../../assets/Icons/profile_gray.png'
//imported some components from Gromet
import { Grommet, Box, Grid, Text ,Image,Paragraph} from "grommet";
//impoter theme from grommet
import { grommet } from "grommet/themes";

 export default class Grommets extends Component {


  render() {
   
    return (
       // wrapping all the box component in a grommet component 
      <Grommet full theme={grommet}>
      {/* using grid for positioning the header and main content */}
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
           { name: "header", start: [0, 0], end: [1, 0] },
          
            { name: "main", start: [1, 1], end: [1, 1] },
            // { name: "footer", start: [0,0], end: [1,1 ] },
            
          ]}
        >
        {/* the  header box */}
          <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="#163552"
            
            border={{side:"bottom",color:"orange" ,size:"medium"}}
          >
            
              <Text color="lightgrey"  size="xxlarge" weight="bold">SonaVault</Text>
              <Image src={profile_gray} width="50px" height="50px"/>
          
          </Box>
          
        {/* the wrapper box which contains all the 8 boxes */}
      <Box   
          
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xxsmall"
      background="transparent"
      wrap={true}
      gap="22.53px">
        {/* box for information governance */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"280px"}
        height={"250px"}
        gap="none"
      >
      <Image src={information_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> INFORMATION GOVERNANCE</Text>
       <Paragraph margin="none" color=" #362969"
               >
        DashBoard
       
        
         </Paragraph>

       <Paragraph margin="none" color=" #362969">
       Content Identification

       </Paragraph>
       <Paragraph margin="none" color=" #362969">
       Data Disposition

       </Paragraph>
       
       
      </Box>
      {/* box for identification */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"280px"}
        height={"250px"}
        
        gap="none"
      >
      <Image src={identification_blue} fit="contain" />
       
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

      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"280px"}
        height={"250px"}
        gap="none"
      >
      <Image src={preservation_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> PRESERVATION</Text>
       <Paragraph margin="none"
              color=" #362969" >
        Case
       
        
       </Paragraph>

       <Paragraph margin="none" color=" #362969">
       Legal Hold

       </Paragraph>
      
       
      </Box>
      {/* box for processing */}
      <Box
        pad="medium"
        direction="column"
        align="center"
        alignContent="center"
        background={{ color: "light-2", opacity: "strong" }}
        width={"280px"}
        height={"250px"}
        gap="none"
      >
      <Image src={processing_blue} fit="contain" />
       
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
        width={"280px"}
        height={"250px"}
        gap="none"
      >
      <Image src={review_blue} fit="contain" />
       
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
        width={"280px"}
        height={"250px"}
        gap="none"
      >
      
      <Image src={analysis_blue} fit="contain" />
       
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
        width={"280px"}
        height={"250px"}
        gap="none"
      >
      <Image src={production_blue} fit="contain" />
       
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
        width={"280px"}
        height={"250px"}
        gap="none"
      >
      <Image src={reporting_blue} fit="contain" />
       
       <Text size="small" color=" #362969"> REPORTING</Text>
       <Paragraph margin="none"
              color=" #362969" >
     
       
        
       </Paragraph>

       <Paragraph margin="none">
      

       </Paragraph>
      
       
    
        </Box>
          </Box>
         
        
        </Grid>
       
       
      </Grommet>
     
    );
  }
}


