import React, { Component } from 'react'
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secodaryNavbar";
import { Grommet, Box, DataTable, CheckBox,Image, Button, Text, Paragraph, RadioButton } from 'grommet';
import { Edit } from "grommet-icons";
import Tick from "../../assets/Icons/submit_purple.png";
import Cross from "../../assets/Icons/cancel_purple.png";
import { FormDown, FormUp } from "grommet-icons";
import ContentPageModal from "../../Containers/Modal/contentIdentificationModal";


const ContentPageData = [{
            name : "Act-On",
            notificationType: "Notify Immediately",
            notificationDelay: "-",
            enabled: true
      },
      {
            name: "IPO",
            notificationType: "Delayed Notification",
            notificationDelay: "60",
            enabled: false, 

      },
      {
            name: "Profanity",
            notificationType: "Notify Immediately",
            notificationDelay: "-",
            enabled: true, 

      },
      {
            name: "Personal Info",
            notificationType: "Don't Notify",
            notificationDelay: "-",
            enabled: true, 

      },
      {
            name: "Job Hunting",
            notificationType: "Notify Immediately",
            notificationDelay: "-",
            enabled: true, 

      }
]

class contentIdentificationPolicy extends Component {
      constructor(props){
            super(props)
            this.state = {
                  selectAll : false,
                  data: [],
                  allStores: false,
                  activeStoreOnly: true,
                  
                  
            }
      }

      selectAllData(e){
            this.setState({
              selectAll: !this.state.selectAll
            })     
      }

      collapsePolicySettings(){
            this.setState({
                  collapse: !this.state.collapse
            })
      }

      closeAddPolicyModal = () => {
            this.setState({
                  addPolicyModal: false
            })
      }

      openNewPolicyForm = () => {
            this.setState({
                  addPolicyModal: true
            })
      }

      storeOptionsChanged = event => {
            const options = ['allStores', 'activeStoreOnly']
            options.map(value => {
                  this.setState({
                        [value] : false
                  })
            })
            this.setState({
                  [event.target.value] : true
            })
      };

      componentWillMount(){
            const { data } = this.state 
            ContentPageData.map(value => {
              data.push({
                checkBox: <CheckBox checked={this.state.checkBox}  name={value.emailServer} onChange={(e) => this.toggleCheckBox(e)} />,
                edit: <Edit cursor="pointer" onClick={this.openNewPolicyForm} />,
                name: value.name,
                notificationType: value.notificationType,
                notificationDelay: value.notificationDelay,
                enabled: value.enabled ? <Image src={Tick} width="25px" height="25px" />: <Image src={Cross} width="25px" height="25px" />
              })
            })
      }
  render() {
        const {activeStoreOnly, allStores, collapse, addPolicyModal} = this.state
    return (
      <Grommet>
            <Box>
                  <SecondaryNavbar pageName="Conent Identification Policy" pageIcon="FlagPolicy"  />
            </Box>
            {addPolicyModal && <ContentPageModal header="Add New Content Identification Policy" close={this.closeAddPolicyModal}/>}
            <Box>
                  <DataTable 
                        columns={[
                              {
                                property: 'checkBox',
                                header: <CheckBox
                                            checked={this.state.selectAll}
                                            // label="interested?"
                                            onChange={(event) =>  this.selectAllData(event)}
                                        />,
                                
                              },
                              {
                                    property: "edit",
                                    header: ""
                              },
                              {
                                    property: "name",
                                    header: "Name"
                              },
                              {
                                    property: "notificationType",
                                    header: "Notification Type"
                              },
                              {
                                    property: "notificationDelay",
                                    header: "Notification Delay (Minutes)"
                              },
                              {
                                    property: "enabled",
                                    header: "Enabled"
                              },
                        ]}
                        data = {this.state.data}
                  />

                  
                  <Box direction="row" justify="center" margin="large" gap="medium">

                        <Button label="Add" onClick={this.openNewPolicyForm}/>
                        <Button label="Enable" />
                        <Button label="Disable" />
                        <Button label="Delete" />
                  </Box>
                  <Box direction="column" >
                       <Box justify="between" direction="row" pad="small" margin="small" background="#d3d9e2">
                              <Text margin={{left:"40%"}}>Content Identification Policy Settings</Text>
                              <Box>
                                    {collapse && <FormUp onClick={() => this.collapsePolicySettings()} />}
                                    {!collapse && <FormDown onClick={() => this.collapsePolicySettings()} />}
                              </Box>
                        </Box> 
                        { collapse && 
                              <div>
                                    <Box margin={{left:"small", right: "small"}}>
                                          <Box margin={{left: "small", right: "small"}} justify="between" direction="row">
                                                <Paragraph margin="none">Apply Content Identification Policy To :</Paragraph>
                                                <Box direction="row" gap="small" >
                                                      <RadioButton
                                                            checked = {activeStoreOnly}
                                                            name="storeOptions"
                                                            label= "Active Store Only"
                                                            value= "activeStoreOnly" 
                                                            onChange={(e) => this.storeOptionsChanged(e)}
                                                      />
                                                      <RadioButton
                                                            checked = {allStores}
                                                            name="storeOptions"
                                                            label= "All Stores"
                                                            value= "allStores" 
                                                            onChange={(e) => this.storeOptionsChanged(e)}
                                                      />
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

export default contentIdentificationPolicy;

