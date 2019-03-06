import React, { Component } from 'react';
//import components from grommet
import{ Box, 
        Grommet, 
        Heading,
        Text,
        Button,
        TextInput,
        CheckBox,
        RadioButton,
        Select
      } 
from "grommet"

class PurgePolicy extends Component {
  
  constructor(props){
    super(props)
    this.state = {
                  //for checkbox
                  ischecked: false,
                  //for periods 
                  selectperiod:"",
                  //if grace period is selected
                  selectedgraceperiod:"",
                  //days picker
                  days:"Days" 
                 }
                    } 
  
  render()
  {
      return(
        <div>
        <Grommet>
            <Heading size ="small">Purge Policy</Heading>
            <Box  
            >
                
                <Box 
                direction="row"
                pad="medium"
                
                >
                    <Box width="medium"
                    >
                      {/*radio buttons*/}
                      <RadioButton 
                      label="As soon as Retention Period Expired"
                      value="retention period" 
                      checked={this.state.selectperiod==="retention period"} 
                      onChange={(event)=>this.setState({selectperiod: event.target.value})}
                      />
                      <RadioButton 
                      label="Grace Period"
                      value="grace period" 
                      checked={this.state.selectperiod==="grace period"}
                      onChange={(event)=>this.setState({selectperiod: event.target.value})}
                      />
                    </Box>
                    {/*if grace period is selected*/}
                    <Box >  
                      {this.state.selectperiod==="grace period"?
                        <Box direction="row">
                        <Box>
                          <RadioButton 
                          label="In Grace Period"
                          value="in grace period" 
                          checked={this.state.selectedgraceperiod==="in grace period"} 
                          onChange={(event)=>this.setState({selectedgraceperiod: event.target.value})}
                          />
                          <RadioButton 
                          label="Expired"
                          value="expired" 
                          checked={this.state.selectedgraceperiod==="expired"}
                          onChange={(event)=>this.setState({selectedgraceperiod: event.target.value})}
                          />
                        </Box>
                        <Box width="small">
                        <Select
                        options={['1', '2', '3']}
                        value={this.state.days}
                        onChange={({ option }) => this.setState({ days: option })}
                        />
                        </Box>
                        </Box>
                        :""}
                    </Box>
                </Box>

                <Box 
                direction="row" 
                pad="medium"
                
                >
                    <Box width="medium" 
                    >
                      <Text size="medium">Schedule:</Text>
                      <br/>
                    </Box>
                    <Text>Purge Daily at (time in HH:mm format) :</Text>
                    <Box width="xxsmall" >
                      <TextInput
                      value="03:20"
                      onChange={(event) => {/* event.target.value */}}
                      />
                    </Box>
                </Box>

                <Box 
                direction="row"
                pad="medium"
                
                >
                    <Box width="medium">
                        <Text size="medium">Enabled:</Text>
                    </Box>
                    <CheckBox
                    checked={this.state.ischecked}
                    onChange={(event) => this.setState({ischecked:event.target.checked})}
                    />
                </Box>

                <Box  
                align="center"
                
                >
                  <Box  direction="row" >
                    {/*save button*/}
                    <Box margin="small"  >
                        <Button
                        primary
                        label="Save" 
                        onClick={() => {}} />
                    </Box>

                    {/*run button*/}
                    <Box margin="small" >
                     <Button
                     label="Run" 
                     onClick={() => {}} />
                    </Box>
                  </Box>
                <Box/>
              </Box>
            </Box>  
          </Grommet>
          </div>
            
      )
  }
}
export default PurgePolicy