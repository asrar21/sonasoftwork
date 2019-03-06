import React, { Component } from 'react'
import { Grommet, Box, DataTable, Text, Paragraph, TextInput, Button, RadioButton } from "grommet";
import { Edit, FormUp, FormDown,Checkmark,Close } from "grommet-icons";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";
import axios from 'axios'

const archiveStoreColumns = [
      {
            property: "archiveStore",
            header: "Archive Store"
      },
      {
            property: "database",
            header: "Database"
      },
      {
            property: "from",
            header: "From"
      },
      {
            property: "to",
            header: "To"
      },
      {
            property: "searchable",
            header: "Searchable ?",
            render:datum=>(
                datum.seachable?
                <Box>
                    <Checkmark/>

                </Box>
                :
                <Box>
                    <Close/>
                </Box>
            )
      },
      {
            property: "archiveable",
            header: "Archiveable ?",
            render:datum=>(
                datum.archiveable?
                <Box>
                    <Checkmark/>

                </Box>
                :
                <Box>
                    <Close/>
                </Box>
            )
      },
      {
            property: "status",
            header: "Status",
            render:datum=>(               
                 datum.status?
                <Box>
                    <Checkmark/>

                </Box>
                :
                <Box>
                    <Close/>
                </Box>
            )
      }
]

const viewHistoryColumns = [
      {
            property: "type",
            header: "Type"
      },
      {
            property: "size",
            header: "Size (MB)"
      },
      {
            property: "period",
            header: "Period (Days)"
      },
      {
            property: "createdOn",
            header: "Created On"
      },
      {
            property: "createdBy",
            header: "Created By"
      }
]



const controlledarchiveStoreColumns = archiveStoreColumns.map(col => Object.assign({}, col));
const controlledviewHistoryColumns = viewHistoryColumns.map(col => Object.assign({}, col));


class archiveStore extends Component {
      constructor(props){
            super(props)
            this.state = {
                  policyTypeSize: true,
                  data:[],
                  data2:[]
            }
      }

      collapseLocationInfo(){
            this.setState({
                  locationInfoCollapsed: !this.state.locationInfoCollapsed
            })
      }

      collapseRolloverPolicy(){
            this.setState({
                  rolloverPolicyCollapsed: !this.state.rolloverPolicyCollapsed    
            })
      }

      collapseViewHistory(){
            this.setState({
                  viewHistoryCollapsed : !this.state.viewHistoryCollapsed    
            })
      }

      changeType(event){
            const options = ['policyTypeSize', 'policyTypePeriod']
            options.map(value => {
                  this.setState({
                        [value] : false
                  })
            })
            this.setState({
                  [event.target.value] : true
            })
      };
      
      componentDidMount(){
        
        axios.get("http://localhost:4001/archivehistory")
        .then(response=>{
            
             this.setState({
                 data2:response.data.Data
             })

        })
        
        .catch(error=>{
            console.log("error",error)
        })
        axios.get("http://localhost:4001/archiveStore")
        .then(response=>{
            
             this.setState({
                 data:response.data.data
             })

        })
        
        .catch(error=>{
            console.log("error",error)
        })
        
    }

      render() {
            const { locationInfoCollapsed, rolloverPolicyCollapsed, viewHistoryCollapsed, policyTypeSize, policyTypePeriod } = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageName="Archive Store" pageIcon="ArchiveStore1" />
                        </Box>
                        <Box>
                              <DataTable
                                    margin="medium" 
                                    columns= {[
                                          {
                                                property: "edit",
                                                header: "Edit",
                                                render: () => (
                                                      <Box>
                                                            <Edit cursor="pointer" />
                                                      </Box>
                                                )
                                          },
                                          ...controlledarchiveStoreColumns
                                    ].map(col => ({ ...col }))}
                                    sortable
                                    data={this.state.data}
                              />


                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"39%"}}>Default Retention Policy (Lowest Priority)</Text>
                                          <Box>
                                                {!locationInfoCollapsed && <FormUp onClick={() => this.collapseLocationInfo()} />}
                                                {locationInfoCollapsed && <FormDown onClick={() => this.collapseLocationInfo()} />}
                                          </Box>
                                    </Box>
                                    {!locationInfoCollapsed &&
                                          <Box>
                                                <Box align="center" fill="horizontal" direction="column">
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start" >
                                                                  <Paragraph>Data File Location </Paragraph>  
                                                            </Box>
                                                            <Box width="large" >
                                                                  <TextInput value="E:\Program Files (x86)\Sonasoft\sonaarc\ArchiveStores"></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start">
                                                                  <Paragraph>Log File Location &nbsp;</Paragraph>  
                                                            </Box>
                                                            <Box width="large" >
                                                                  <TextInput value="E:\Program Files (x86)\Sonasoft\sonaarc\ArchiveStores"></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="large" fill justify="center" align="center">
                                                            <Box justify="start" align="start">
                                                                  <Paragraph>Full Text Catalog&nbsp;&nbsp;&nbsp;<br /> Location</Paragraph>  
                                                            </Box>
                                                            <Box width="large" >
                                                                  <TextInput value="E:\Program Files (x86)\Sonasoft\sonaarc\ArchiveStores"></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="medium" justify="center" margin="small">
                                                            <Button label="Save" />
                                                            <Button label="Cancel"  />
                                                      </Box>
                                                </Box>
                                          </Box>
                                    }
                              </Box> 
                              

                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"47%"}}>Rollover Policy</Text>
                                          <Box>
                                                {!rolloverPolicyCollapsed && <FormUp onClick={() => this.collapseRolloverPolicy()} />}
                                                {rolloverPolicyCollapsed && <FormDown onClick={() => this.collapseRolloverPolicy()} />}
                                          </Box>
                                    </Box>
                                    {!rolloverPolicyCollapsed &&
                                          <Box>
                                                <Box align="center" fill="horizontal" direction="column">
                                                      <Box direction="row" justify="between" gap="large">
                                                            <Box>
                                                                  <Paragraph>Type :</Paragraph>  
                                                            </Box>
                                                            <Box direction="row-responsive" gap="medium" >
                                                                  <RadioButton 
                                                                        label= "Size" 
                                                                        name="type" 
                                                                        value="policyTypeSize" 
                                                                        onChange={(e) => this.changeType(e)} 
                                                                        checked={policyTypeSize}
                                                                  />
                                                                  <RadioButton 
                                                                        label="Period" 
                                                                        name="type" 
                                                                        value="policyTypePeriod" 
                                                                        onChange={(e) => this.changeType(e)}  
                                                                        checked={policyTypePeriod}
                                                                  />
                                                            </Box>
                                                            <Box></Box>
                                                      </Box>
                                                      <Box direction="row" gap="large" align="center" >
                                                            <Box justify="start" align="start">
                                                                  <Paragraph>Size(MB)</Paragraph>  
                                                            </Box>
                                                            <Box>
                                                                  <TextInput></TextInput>
                                                            </Box>
                                                      </Box>
                                                      <Box direction="row" gap="medium" justify="center" margin="small">
                                                            <Button label="Save" />
                                                            <Button label="Cancel"  />
                                                      </Box>
                                                </Box>
                                          </Box>
                                    }
                              </Box> 
                              
                              <Box direction="column" margin="medium" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"47%"}}>View History</Text>
                                          <Box>
                                                {!viewHistoryCollapsed && <FormUp onClick={() => this.collapseViewHistory()} />}
                                                {viewHistoryCollapsed && <FormDown onClick={() => this.collapseViewHistory()} />}
                                          </Box>
                                    </Box>
                                    {!viewHistoryCollapsed &&
                                          <DataTable
                                                margin="medium" 
                                                columns= {[
                                                      ...controlledviewHistoryColumns
                                                ].map(col => ({ ...col }))}
                                                sortable
                                                data={this.state.data2}
                                          />
                                          
                                    }
                              </Box> 


                        </Box>
                  </Grommet>
            )
      }
};

export default archiveStore;
