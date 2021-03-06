import React, { Component } from 'react'
import { Grommet, Box, DataTable, CheckBox, Button, Text, Paragraph, RadioButton, TextInput } from "grommet";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/SecondaryNavbar"
import RetentionPolicyModel from "../../Containers/Modal/retentionPolicyModal";
import { FormDown, FormUp, Edit, Checkmark, Close } from "grommet-icons";
import axios from "axios";


const columns = [
      {
            property: "name",
            header: "Name"
      },
      {
            property: "priority",
            header: "Priority"
      },
      {
            property: "retentionPeriod",
            header: "Retention Period (Days)"
      },
      {
            property: "retentionGracePeriod",
            header: "Retention Grace Period (Days)"
      },
      {
            property: "status",
            header: "Status",
            render: datum => (
                  datum.status ? 
                        <Box>
                              <Checkmark />
                        </Box>
                  :
                        <Box>
                              <Close />
                        </Box>

            )
      }
]

const controlledColumns = columns.map(col => Object.assign({}, col));

class RetentionPolicy extends Component {
      constructor(props){
            super(props)
            this.state= {
                  selectAll: false,
                  addRetentionPolicy: false,
                  EditRetentionPolicy:false,
                  retentionPolicyDisable: true,
                  retentionPolicyEnable: false,
                  collapseDefaultPolicy: true,
                  collapseRetentionPolicy: true,
                  priority: true,
                  messageReceivedDate: true,
                  retention:[]

            }
      }

      selectAllData(e){
            this.setState({
              selectAll: !this.state.selectAll
            })     
      }

      closeAddRetentionModal = () => {
            this.setState({
                  addRetentionPolicy: false,
                  EditRetentionPolicy:false
            })
      }

      openAddRetentionModal = () => {
            this.setState({
                  addRetentionPolicy: true
            })
      }
      EditForm=(data)=>{
            this.setState({
                  EditRetentionPolicy: true,
                  retention:data
            })
      }

      collapsePolicySettings(){
            this.setState({
                  collapseDefaultPolicy: !this.state.collapseDefaultPolicy
            })

            this.cancelEditPolicy()
      } 

      collapseRetentionSettings(){
            this.setState({
                  collapseRetentionPolicy: !this.state.collapseRetentionPolicy
            })
      }

      policyOptionChanged = event => {
            const options = ['retentionPolicyDisable', 'retentionPolicyEnable']
            options.map(value => {
                  this.setState({
                        [value] : false
                  })
            })
            this.setState({
                  [event.target.value] : true
            })
      };

      editDefaultPolicy(){
            this.setState({
                  editPolicySettings: true
            })
      }

      cancelEditPolicy(){
            this.setState({
                  editPolicySettings: false
            })
      }

      changedExpiryDate(event){
            const options = ['messageReceivedDate', 'ingestionDate']
            options.map(value => {
                  this.setState({
                        [value] : false
                  })
            })
            this.setState({
                  [event.target.value] : true
            })
      }

      changedRetention(event){
            const options = ['maximumRetentionPeriod', 'priority']
            options.map(value => {
                  this.setState({
                        [value] : false
                  })
            })
            this.setState({
                  [event.target.value] : true
            })
      }

      fetchData(){
            axios.get("http://localhost:4001/retentionPolicyData")
            .then((res) => {
                  this.setState({
                        data: res.data.Data
                  })
            })
            .catch(err => {
                  console.log(err)
            })
      }
      componentDidMount(){
           this.fetchData()
      }

      render() {
            const { addRetentionPolicy, collapseDefaultPolicy, retentionPolicyEnable, 
                  retentionPolicyDisable, editPolicySettings, collapseRetentionPolicy,messageReceivedDate,
                  ingestionDate, maximumRetentionPeriod, priority,EditRetentionPolicy
                  } = this.state
            console.log(this.state.data)
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageName="Retention Policy" pageIcon="RetentionPolicy" />
                        </Box>
                        {addRetentionPolicy && <RetentionPolicyModel header="Add New Content Identification Policy" update={this.fetchData()} close={this.closeAddRetentionModal}/>}
                        {EditRetentionPolicy && <RetentionPolicyModel header="Edit New Content Identification Policy" close={this.closeAddRetentionModal} Datum={this.state.retention}/>}
                        <Box>
                              <DataTable 
                                    columns={[
                                          {
                                          property: 'checkBox',
                                          header: <CheckBox
                                                      checked={this.state.selectAll}
                                                      onChange={(event) =>  this.selectAllData(event)}
                                                  />,
                                          render: () => (
                                                <Box>
                                                      <CheckBox />
                                                </Box>
                                          )
                                          
                                          },
                                          {
                                                property: "edit",
                                                header: "Edit",
                                                render: (datum) => (
                                                      <Box>
                                                            <Edit cursor="pointer"  onClick={()=>this.EditForm(datum)}/>
                                                      </Box>
                                                )
                                          },
                                          ...controlledColumns
                                    ].map(col => ({ ...col }))}
                                    data={this.state.data}
                                    sortable
                              />

                              <Box direction="row" justify="center" margin="large" gap="medium">

                                    <Button label="Add" onClick={this.openAddRetentionModal}/>
                                    <Button label="Enable" />
                                    <Button label="Disable" />
                                    <Button label="Delete" />
                              </Box>

                              <Box direction="column" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"39%"}}>Default Retention Policy (Lowest Priority)</Text>
                                          <Box>
                                                {collapseDefaultPolicy && <FormUp cursor="pointer" onClick={() => this.collapsePolicySettings()} />}
                                                {!collapseDefaultPolicy && <FormDown cursor="pointer" onClick={() => this.collapsePolicySettings()} />}
                                          </Box>
                                    </Box> 
                                    { collapseDefaultPolicy && 
                                          <div>
                                                <Box margin={{left:"small", right: "small"}}>
                                                      <Box margin={{left: "small", right: "small"}} direction="column">
                                                            <Box direction="row" margin={{bottom: "small"}} gap="small" >
                                                                  <RadioButton
                                                                        checked = {retentionPolicyEnable}
                                                                        name="retentionPolicyOption"
                                                                        label= "Enable"
                                                                        value= "retentionPolicyEnable"
                                                                        onChange={(e) => this.policyOptionChanged(e)}
                                                                  />
                                                                  <RadioButton
                                                                        checked = {retentionPolicyDisable}
                                                                        name="retentionPolicyOption"
                                                                        label= "Disable"
                                                                        value= "retentionPolicyDisable"
                                                                        onChange={(e) => this.policyOptionChanged(e)}
                                                                  />
                                                            </Box>
                                                            {retentionPolicyEnable && 
                                                                  <Box>
                                                                        <Box background="#d3d9e2" pad="small" align="end">
                                                                              <Edit cursor="pointer" onClick={() => this.editDefaultPolicy()} />
                                                                        </Box>
                                                                        <Box justify="center" margin="small" direction="row" >
                                                                              <Box direction="column" justify={editPolicySettings && "around"} height={editPolicySettings && "165px"} >
                                                                                    <Paragraph margin="xsmall">Policy Name:</Paragraph>  
                                                                                    <Paragraph margin="xsmall">Retention Period(Days):</Paragraph>
                                                                                    <Paragraph margin="xsmall">Retention Grace Period(Days):</Paragraph>
                                                                              </Box>
                                                                              <Box direction="column" justify={editPolicySettings && "between"}  margin={{left: "large"}}>
                                                                                    <Paragraph margin="xsmall">Default</Paragraph>
                                                                                    {!editPolicySettings && <Paragraph margin="xsmall">3650 Days</Paragraph>}
                                                                                    {editPolicySettings && <Box width="small" margin="small"><TextInput type="number"></TextInput></Box>}
                                                                                    {!editPolicySettings && <Paragraph margin="xsmall">7 Days</Paragraph>}
                                                                                    {editPolicySettings && <Box width="small" margin="small"><TextInput type="number"></TextInput></Box>}
                                                                              </Box>
                                                                        </Box>
                                                                        {editPolicySettings && 
                                                                              <Box direction="row" gap="medium" justify="center" margin="medium">
                                                                                    <Button label="Save" />
                                                                                    <Button label="Cancel" onClick={() => this.cancelEditPolicy()} />
                                                                              </Box>
                                                                        }
                                                                  </Box>
                                                            }
                                                      </Box> 
                                                </Box>
                                          </div>
                                    }

                              </Box>

                              <Box direction="column" >
                                    <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                                          <Text margin={{left:"43%"}}>Retention Policy Settings</Text>
                                          <Box>
                                                {collapseRetentionPolicy && <FormUp cursor="pointer" onClick={() => this.collapseRetentionSettings()} />}
                                                {!collapseRetentionPolicy && <FormDown cursor="pointer" onClick={() => this.collapseRetentionSettings()} />}
                                          </Box>
                                    </Box> 
                                    { collapseRetentionPolicy && 
                                          <div>
                                                <Box margin={{left:"small", right: "small"}}>
                                                      <Box direction="row" justify="center" margin={{left: "small", right: "small"}}  >
                                                            <Box direction="column" >
                                                                  <Paragraph margin="small">Calculate expiry date based on :</Paragraph>
                                                                  <Paragraph margin="small">Retention based on :</Paragraph>
                                                            </Box>
                                                            <Box direction="column" margin={{left: "large"}}>
                                                                  <Box direction="row" gap="large" margin="small" >
                                                                        {/* <Box width="100px"> */}
                                                                              <RadioButton
                                                                                    checked = {priority}
                                                                                    name="retention"
                                                                                    label= "Priority"
                                                                                    value= "priority" 
                                                                                    onChange={(e) => this.changedRetention(e)}
                                                                              />
                                                                        {/* </Box> */}
                                                                              <RadioButton
                                                                                    checked = {maximumRetentionPeriod}
                                                                                    name="retention"
                                                                                    label= "Maximum Retention Period"
                                                                                    value= "maximumRetentionPeriod" 
                                                                                    onChange={(e) => this.changedRetention(e)}
                                                                              />
                                                                        
                                                                  </Box>
                                                                  <Box direction="row" gap="small" margin="small" >
                                                                        <RadioButton
                                                                              checked = {ingestionDate}
                                                                              name="expiryDate"
                                                                              label= "Ingestion Date"
                                                                              value= "ingestionDate" 
                                                                              onChange={(e) => this.changedExpiryDate(e)}
                                                                        />
                                                                        <RadioButton
                                                                              checked = {messageReceivedDate}
                                                                              name="expiryDate"
                                                                              label= "Message Received Date"
                                                                              value= "messageReceivedDate" 
                                                                              onChange={(e) => this.changedExpiryDate(e)}
                                                                        />
                                                                  </Box>
                                                            </Box>
                                                      </Box> 
                                                      <Box direction="row" gap="medium" justify="center" margin="medium">
                                                            <Button label="Save" />
                                                            <Button label="Cancel" />
                                                      </Box>
                                                </Box>
                                          </div>
                                    }

                              </Box>

                        </Box>
                  </Grommet>
            )
      }
};

export default RetentionPolicy;