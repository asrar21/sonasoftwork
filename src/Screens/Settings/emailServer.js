import React, { Component } from 'react'
import { Grommet, Box, Image, DataTable, CheckBox, Button } from "grommet";
import SecondaryNavbar from "../../Containers/SecondaryNavbar/secodaryNavbar";
import { Edit } from "grommet-icons";
import  Tick from "../../assets/Icons/submit_purple.png";
import Cross from "../../assets/Icons/cancel_purple.png"
import EmailServerModal from "../../Containers/Modal/emailServerModal"

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

class emailServer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [],
      selectAll: false,
      checkBox: true,
      AddServerModal:false

      
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
    emailServerData.map(value => {
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

componentWillMount(){
  const { data } = this.state 
  emailServerData.map(value => {
    data.push({
      checkBox: <CheckBox checked={this.state.checkBox}  name={value.emailServer} onChange={(e) => this.toggleCheckBox(e)} />,
      edit: <Edit cursor="pointer" onClick={this.openAddServerModal} />,
      emailServer: value.emailServer,
      journalLogin: value.journalLogon,
      status: value.status ? <Image src={Tick} width="25px" height="25px" />: <Image src={Cross}  width="25px" height="25px"  /> ,
      archivepublicFolder: value.archivepublicFolder ? <Image src={Tick} width="25px" height="25px" />: <Image src={Cross}  width="25px" height="25px"  /> ,
      stubEnabled: value.stubEnabled ? <Image src={Tick} width="25px" height="25px" />: <Image src={Cross}  width="25px" height="25px"  /> ,
      excludeHours: value.excludeHours ? <Image src={Tick} width="25px" height="25px" />: <Image src={Cross}  width="25px" height="25px"  /> ,
      domainName: value.domainName
    })
  })
  this.setState({
    data
  })
  };

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
        {AddServerModal ===true? <EmailServerModal header="Add New Server Modal" close={() => this.AddServerModalClose()} />:null}
        <Box margin="small">
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
                  property: 'edit',
                  header: 'Edit',
                },
                {
                  property: 'emailServer',
                  header: 'Email Server',
                  primary: true,
                },
                {
                  property: "journalLogin",
                  header: "Journal Logon"
                },
                {
                  property: "status",
                  header: "Status"
                },
                {
                  property: "archivepublicFolder",
                  header: "Archive Public Folder",
                  align: "center"
                },
                {
                  property: "stubEnabled",
                  header: "Stub Enabled"
                },
                {
                  property: "excludeHours",
                  header: "Exlude Hours"
                },
                {
                  property: "domainName",
                  header: "Domain Name"
                }
              ]}
              data={this.state.data}
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

