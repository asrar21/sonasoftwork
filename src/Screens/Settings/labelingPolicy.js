import React, { Component } from 'react'
import { Grommet, Box, DataTable, CheckBox, Image, Button } from "grommet";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/SecondaryNavbar";
import { Edit } from "grommet-icons";
import Tick from "../../assets/Icons/submit_purple.png";
import Cross from "../../assets/Icons/cancel_purple.png";
import LabelingPolicyModal from "../../Containers/Modal/labelingPolicyModal";
import axios from 'axios'

const labelingPolicyData = [
      {
            policyName: "Policy 1",
            LabelName: "Crowdfunder",
            status: true
      },
      {
            policyName: "ActOn Policy",
            LabelName: "ActOn",
            status: true
      },
      {
            policyName: "Dell Policy",
            LabelName: "Dell",
            status: true
      },
      {
            policyName: "Daily Inspiration",
            LabelName: "Daily Inspiration",
            status: true
      }
]

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


      componentDidMount() {
            const { data,data1 } = this.state
            axios.get("http://localhost:4001/LabelingPolicy")
                  .then(response => {
                        console.log("AD response", response.data.Data)
                        this.setState({
                              data1: response.data.Data
                        })

                  })

                  .catch(error => {
                        console.log("error", error)
                  })
            data1.map(value => {
                  data.push({
                        checkBox: <CheckBox />,
                        edit: <Edit cursor="pointer" onClick={this.openLabelingPolicyModal} />,
                        policyName: value.policyName,
                        LabelName: value.LabelName,
                        status: value.status ? <Image src={Tick} width="25px" height="25px" /> : <Image src={Cross} width="25px" height="25px" />

                  })
            })

            this.setState({
                  data
            })
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
                        {labelingPolicyModal && <LabelingPolicyModal header="Add New Labeling Policy" close={this.closeLabelingPolicyModal} />}
                        <Box margin="medium">
                              <DataTable
                                    columns={[
                                          {
                                                property: 'checkBox',
                                                header: <CheckBox
                                                      checked={selectAll}
                                                      // label="interested?"
                                                      onChange={(event) => this.selectAllData(event)}
                                                />,

                                          },
                                          {
                                                property: 'edit',
                                                header: 'Edit',
                                          },
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
                                          },

                                    ]}

                                    data={data}
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