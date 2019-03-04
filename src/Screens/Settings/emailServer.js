import React, { Component } from 'react'
import { Grommet, Box, Image, DataTable, CheckBox, Button } from "grommet";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secondaryNavbar";
import { Edit ,Checkmark,Close} from "grommet-icons";

import EmailServerModal from "../../Containers/Modal/emailServerModal";
import axios from 'axios'
const columns=[

  
  {
    property: 'emailServer',
    header: 'Email Server',
    
  },
  {
    property: "journalLogin",
    header: "Journal Logon"
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
  },
  {
    property: "archivepublicFolder",
    header: "Archive Public Folder",
    align: "center",
    render: datum => (
      datum.archivepublicFolder ? 
            <Box>
                  <Checkmark />
            </Box>
      :
            <Box>
                  <Close />
            </Box>

)
  },
  {
    property: "stubEnabled",
    header: "Stub Enabled",
    render: datum => (
      datum.stubEnabled ? 
            <Box>
                  <Checkmark />
            </Box>
      :
            <Box>
                  <Close />
            </Box>

)
  },
  {
    property: "excludeHours",
    header: "Exlude Hours",
    render: datum => (
      datum.excludeHours ? 
            <Box>
                  <Checkmark />
            </Box>
      :
            <Box>
                  <Close />
            </Box>

)
  },
  {
    property: "domainName",
    header: "Domain Name",
    
  }
]
const emailServerData = [{
  emailServer: 'mail2010',
  journalLogon: 'sj_makmail2010',
  status: true,
  archivepublicFolder: true,
  stubEnabled: true,
  excludeHours: false,
  domainName: 'SONASAFE'
},
{
  emailServer: 'outlook.office365.com',
  journalLogon: 'sj',
  status: true,
  archivepublicFolder: false,
  stubEnabled: false,
  excludeHours: false,
  domainName: 'SONASOFT.ONMICROSOFT.COM'
},
{
  emailServer: 'HQEXCH16',
  journalLogon: 'SJ_HQMAIL01',
  status: true,
  archivepublicFolder: true,
  stubEnabled: true,
  excludeHours: true,
  domainName: 'SONASAFE'
}
]
const controlledColumns = columns.map(col => Object.assign({}, col));

class emailServer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data1 : [],
     
      selectAll: false,
      checkBox: true,
      AddServerModal:false,
      
      
    }
  }

  openAddServerModal = () => {
    console.log("faizan")
    this.setState({
      AddServerModal :!this.state.AddServerModal
    })
  }

  selectAllData(e){
    this.setState({
      selectAll: !this.state.selectAll
    })
  this.state.data1.map(value => {
      this.setState({
        [value.emailServer] : !this.state[value.emailServer]
      })
    })
  }


toggleCheckBox(e){
  console.log("toggleCheckBox")
  this.setState({
    checkBox: !this.state.checkBox
  })
}
componentDidMount(){
  axios.get("http://localhost:4001/EmailServer")
  
    .then(response=>{
        console.log("AD response",response.data.Data)
         this.setState({
          data1:response.data.Data
         })

    })
    
    .catch(error=>{
        console.log("error",error)
    })
}
componentDidUpdate(){
  axios.get("http://localhost:4001/EmailServer")
  
    .then(response=>{
        console.log("AD response",response.data.Data)
         this.setState({
          data1:response.data.Data
         })

    })
    
    .catch(error=>{
        console.log("error",error)
    })
}



  AddServerModalClose = () => {
    this.setState({
      AddServerModal : false
    })
  }
  



  render(){
    const { AddServerModal } = this.state
    return (
      <Grommet>
        <Box>
          <SecondaryNavbar pageName="Email Server" pageIcon="emailServer" />   
        </Box>
        { AddServerModal && <EmailServerModal header="Add New" close={() => this.AddServerModalClose()} /> }
        <Box margin="small">
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
              <Button label="Add" onClick={this.openAddServerModal}/>
              <Button label="Enable" />
              <Button label="Disable" />
              
            </Box>

            
        </Box>
      </Grommet>
    )
  }
};

export default emailServer;

