import React, { Component } from 'react'
import { Grommet, Box, DataTable, CheckBox, Image, Button } from "grommet";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/SecondaryNavbar";
import { Edit ,Checkmark,Close} from "grommet-icons";

import LabelingPolicyModal from "../../Containers/Modal/labelingPolicyModal";
import axios from 'axios'

// const labelingPolicyData = [
//       {
//             policyName: "Policy 1",
//             LabelName: "Crowdfunder",
//             status: true
//       },
//       {
//             policyName: "ActOn Policy",
//             LabelName: "ActOn",
//             status: true
//       },
//       {
//             policyName: "Dell Policy",
//             LabelName: "Dell",
//             status: true
//       },
//       {
//             policyName: "Daily Inspiration",
//             LabelName: "Daily Inspiration",
//             status: true
//       }
// ]

const columns=[
      
      {
            property: 'policyName',
            header: 'Policy Name',
      },
      {
            property: 'LabelName',
            header: 'Label Name',
      },
      {
            property: 'status',
            header: 'Status',
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
      },
]
const controlledColumns = columns.map(col => Object.assign({}, col));
class labelingPolicy extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  selectAll: false,
                  data: [],
                  data1:[]

            }
      }
      selectAllData(e) {
            this.setState({
                  selectAll: !this.state.selectAll
            })
      }


      fetchData() {
            const { } = this.state
            axios.get("http://localhost:4001/LabelingPolicy")
                  .then(response => {
                       
                        this.setState({
                              data1: response.data.Data
                        })

                  })

                  .catch(error => {
                        console.log("error", error)
                  })
            
            

            
      }
      componentDidMount() {
           this.fetchData()
            

            
      }

      closeLabelingPolicyModal = () => {
            this.setState({
                  labelingPolicyModal: false
            })
      }

      openLabelingPolicyModal = () => {
            this.setState({
                  labelingPolicyModal: true
            })
      }

      render() {
            const { selectAll, data, labelingPolicyModal } = this.state
            return (
                  <Grommet>
                        <Box>
                              <SecondaryNavbar pageName="Labelling Policy" pageIcon="LabellingPolicy" />
                        </Box>
                        {labelingPolicyModal && <LabelingPolicyModal header="Add New Labeling Policy" update={this.fetchData()} close={this.closeLabelingPolicyModal} />}
                        <Box margin="medium">
                              <DataTable
                                     columns={[
                                          {
                                                property: 'checkBox',
                                                header: <CheckBox
                                                      checked={this.state.selectAll}
                                                      // label="interested?"
                                                      onChange={(event) => this.selectAllData(event)}
                                                />,
                          
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
                              data={this.state.data1}
                              sortable
                              />

                              <Box direction="row" justify="center" margin="large" gap="medium">
                                    <Button label="Add" onClick={this.openLabelingPolicyModal} />
                                    <Button label="Enable" />
                                    <Button label="Disable" />
                                    <Button label="Delete" />
                              </Box>
                        </Box>
                  </Grommet>
            )
      }
};

export default labelingPolicy;