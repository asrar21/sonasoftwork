import React, { Component } from 'react';
//importing components from grommet
import {
   
 
   

  
   
  
    Grid,
    Text,
    Box,
   
   
   
    TextInput,
    
    Button,
   
    CheckBox,
    
    
    

} from "grommet";




export default class Ssosetting extends Component {

    
 
    render() {
      
      return (
        <Grid
        fill
        areas={[
            { name: "nav", start: [0, 0], end: [0, 0] },
            { name: "main", start: [1, 0], end: [1, 0] }
        ]}
        columns={["small", "flex"]}
        rows={["flex"]}
        gap="small"
    >
        <Box gridArea="nav">
            <Box pad="medium" gap="">
                <Text>Identity Provider URL  </Text>
            </Box>
            <Box pad="medium" gap="">
                <Text>Service Provider URL </Text>
            </Box>
            <Box pad="medium" gap="">
                <Text>Issuer:</Text>
            </Box>
            <Box pad="medium" margin="small" gap="">
                <Text>Public Certificate :</Text>
            </Box>
            <Box pad="medium" margin="small" gap="">
                <Text>Enable </Text>
            </Box>
        </Box>

        <Box gridArea="main"  >
            <Box pad="medium" gap="">
                <TextInput></TextInput>
            </Box>
            <Box pad="medium" gap="">
                <TextInput></TextInput>
            </Box>
            <Box pad="medium" gap="">
                <TextInput></TextInput>
            </Box>

            <Box pad="medium">
                <TextInput></TextInput>

            </Box>
            <Box pad="medium">
                <Box pad="medium">
                    <CheckBox></CheckBox>
                </Box>
            </Box>
            <Box pad="" direction="row-responsive" align="center" justify="center" gap="medium">
                <Button label="Save" /><Button label="Cancel" />
            </Box>



        </Box>

    </Grid>

      
    
      )
    }
  }
  