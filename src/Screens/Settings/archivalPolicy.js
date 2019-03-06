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
        Select,
        TextArea
      } 
from "grommet"

import{ FormUp, 
        FormDown 
      } 
from 'grommet-icons';

class ArchivalPolicy extends Component
{
      constructor(props){
            super(props)
            this.state ={
            isAllorSelected:"",
            isIncludedorExcluded:"",
            selectServer:"Select Value",
            selectStorage:"All", 
            mailboxStore:"All",
            collapsetemp: "false",
            ischecked:"false"
                        }
                        }
            collapseTempSettings = () => {
                  let toggle = this.state.collapsetemp
                  this.setState({
                        collapsetemp: !toggle
                  })}

      render()
      {
            const { collapsetemp } = this.state

            return(
                  <div>
                  <Grommet>
                        <Heading size ="small">Archival Policy</Heading>
                        <Box  
                        >
                        
                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box
                                    pad="small"
                                    >
                                    <RadioButton 
                                    label="All" 
                                    value="all" 
                                    checked={this.state.isAllorSelected==="all"}
                                    onChange={(event)=>this.setState({isAllorSelected:event.target.value})}
                                    />
                                    </Box>
                                    <RadioButton 
                                    label="Selected" 
                                    value="selected" 
                                    checked={this.state.isAllorSelected==="selected"}
                                    onChange={(event)=>this.setState({isAllorSelected:event.target.value})}
                                    />
                              </Box>
                              {/*conditional rendering*/}
                              {this.state.isAllorSelected==="selected"? 
                              <div>
                              <Box 
                              direction="row"
                              pad="small"
                              >     
                                    <Box
                                    pad="small"
                                    >
                                    <RadioButton 
                                    label="Include" 
                                    value="include" 
                                    checked={this.state.isIncludedorExcluded==="include"}
                                    onChange={(event)=>this.setState({isIncludedorExcluded:event.target.value})}
                                    />
                                    </Box>
                                    <RadioButton 
                                    label="Exclude" 
                                    value="exclude" 
                                    checked={this.state.isIncludedorExcluded==="exclude"}
                                    onChange={(event)=>this.setState({isIncludedorExcluded:event.target.value})}
                                    />
                              </Box>

                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box  
                                    width="large" 
                                    >
                                    Server:
                                    </Box>

                                    <Box fill >
                                    <Select
                                    options={['Distribution Group','MAIL2010','outlook.office365.com', 'Security Group','WIN-IF6DPGSF7FJ']}
                                    value={this.state.selectServer}
                                    onChange={({ option }) => this.setState({ selectServer: option })}
                                    />
                                    </Box>
                              </Box>

                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box  
                                    width="large" 
                                    >
                                    Storage:
                                    </Box>

                                    <Box fill >
                                    <Select
                                    options={['All']}
                                    value={this.state.selectStorage}
                                    onChange={({ option }) => this.setState({ selectStorage: option })}
                                    />
                                    </Box>
                              </Box>

                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box  
                                    width="large"
                                    >
                                    MailBox Store:
                                    </Box>

                                    <Box fill>
                                    <Select
                                    options={['All']}
                                    value={this.state.mailboxStore}
                                    onChange={({ option }) => this.setState({ mailboxStore: option })}
                                    />
                                    </Box>
                              </Box>

                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box 
                                    
                                    width="large"
                                    >Mailbox(es):</Box>

                                    <Box fill>
                                    <Box direction="row">
                                    <Box height="xsmall" width="large"overflow="auto" border={{color:"dark-5"}}>
                                    <Box pad="xlarge"></Box>
                                    <Box pad="xlarge"></Box>
                                    </Box>
                                    
                                    <Box>
                                    <Box margin="small">
                                    <CheckBox
                                    label="Include"
                                    checked={this.state.ischecked}
                                    onChange={(event) => this.setState({ischecked:event.target.checked})}
                                    />
                                    </Box>
                                    {/*add button*/}
                                    <Box margin="small"  >
                                          <Button
                                          primary
                                          label="Add" 
                                          onClick={() => {}} />
                                    </Box>
                                    </Box>
                                    </Box>
                                    <div>Total</div>
                                    </Box>
                              </Box>

                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box 
                                    width="large"
                                    >Included MailBox(es):</Box>

                                    <Box fill >
                                    <Box direction="row">
                                    <Box height="xsmall" width="large" overflow="auto" border={{color:"dark-5"}} >
                                    <Box pad="xlarge" ></Box>
                                    <Box pad="xlarge"></Box>
                                    </Box>
                                    {/*remove button*/}
                                    <Box margin="small"  >
                                          <Button
                                          label="Remove" 
                                          onClick={() => {}} />
                                    </Box>
                                    </Box>
                                    <div>Total</div>
                                    </Box>
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

                                    {/*cancel button*/}
                                    <Box margin="small" >
                                          <Button
                                          label="Cancel" 
                                          onClick={() => {}} />
                                    </Box>
                                    </Box>
                              </Box>
                              </div>
                              :
                              <Box 
                              align="center"
                              >
                                    <Box direction="row" >
                                    {/*save button*/}
                                    <Box margin="small"  >
                                          <Button
                                          primary
                                          label="Save" 
                                          onClick={() => {}} />
                                    </Box>

                                    {/*cancel button*/}
                                    <Box margin="small" >
                                    <Button
                                    label="Cancel" 
                                    onClick={() => {}} />
                                    </Box>
                                    </Box>
                              </Box>}
                              

                              
                              {/* for Temporary Storage */}
                              <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                    <Text margin={{ left: "40%" }}>External Users (Include Only)</Text>
                                    <Box>
                                    {collapsetemp && <FormUp onClick={() => this.collapseTempSettings()} />}
                                    {!collapsetemp && <FormDown onClick={() => this.collapseTempSettings()} />}
                                    </Box>
                              </Box>

                              {collapsetemp &&
                                    
                              <div>
                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box  
                                    width="large"
                                    >
                                    Email Id:
                                    </Box>
                                    
                                    <Box fill >
                                    <Box direction="row">
                                          <Box width="medium">
                                          <TextInput
                                          value=""
                                          onChange={(event) => {/* event.target.value */}}
                                          />
                                          </Box>
                                    {/*add button*/}
                                    <Box margin="small"  >
                                          <Button
                                          primary
                                          label="Add" 
                                          onClick={() => {}} />
                                    </Box>
                                    </Box>
                                    </Box>
                              </Box>
                              
                              <Box 
                              direction="row"
                              pad="small"
                              >
                                    <Box 
                                    width="large"
                                    >Selected Email Id:</Box>

                                    <Box fill>
                                    <Box direction="row">
                                    <Box width="medium">
                                    <TextArea
                                    value=""
                                    onChange={(event) => {/* event.target.value */}}
                                    />
                                    <div>Total</div>
                                    </Box>
                                    {/*remove button*/}
                                    <Box margin="small"  >
                                          <Button
                                          label="Remove" 
                                          onClick={() => {}} />
                                    </Box>
                                    </Box>
                                    </Box>
                              </Box>
                              </div>
                              }
                        </Box>
                  </Grommet>
                  </div>
            )
      }
}

export default ArchivalPolicy