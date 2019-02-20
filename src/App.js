import React, { Component } from 'react'
import { Grommet, Box, ResponsiveContext, Image, Paragraph } from "grommet";
import sonaLogo from "./assets/images/sonaLogo.png" // SonaVAult Logo

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div>
        <Grommet full>   {/*to apply grommet UI*/}
          <Box        /*used as an alternative to div in grommet*/
            fill        /* so that the box takes full height of conatainer*/
            pad="none"  /*padding*/
            margin="none" 
            direction="row"  /*direction of child components*/
            align="stretch"   /*so that child components mus be stretched on y-axis*/
            alignContent="stretch"    /*so that child components mus be stretched on y-axis*/
          >
            <ResponsiveContext.Consumer> 
              {/*component used for customizing child components on the basis of size of screen*/}      
              {(size) => (
                size == "medium" ?  (   /*check if size of screen is medium i.e laptop screen*/
                
                <Box                   /*then render the side menu with sonavault logo */
                  fill 
                  margin="none" 
                  pad="medium" 
                  background="#2e3c54"  
                  direction="column"
                  justify="center"
                  align="center"
                  alignContent="start"
                  basis="1/4"             /*so that side bar covers 1/4 area of screen*/ 
                >
                  <Image src={sonaLogo} fit="contain" margin="medium" width="130px"/>
                  <Paragraph margin="none" size="small" >Version 6.5.0.0</Paragraph>
                </Box>  
                
                
                )
                : null /*if screen is not medium i.e. small mobile or tablet view,don't render the sidebar*/
                
              )}
            </ResponsiveContext.Consumer>
            
            <Box 
              background="grey" 
              pad="xlarge" 
              margin="none" 
              basis="1" 
              width={"100%"} 
            >
            </Box>

          </Box>
        </Grommet>
      </div>
    )
  }
}



export default App;