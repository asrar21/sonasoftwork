import React, { Component } from 'react';
//importing components from grommet
import {
    Box,
    Grommet,  
    
    Button,
    Tab,
    Tabs,
    CheckBox,
    DataTable,
} from "grommet";
//importing grommet themes 
import { grommet } from "grommet/themes";
//importing icons from home screen folder

//importing grommet icons
import { Edit, } from 'grommet-icons';
import Ssosetting from './configComponents/SsoSetting'
import ADSettingsModal from '../../Containers/Modal/ADSettingsmodal';
import Deploymentsetting from '../Configuration/configComponents/Deploymentsetting';
import SMTPConfiguration from './configComponents/Smtpconfiguration';
import General from './configComponents/general'
import SecondaryNavBar from '../../Containers/SecondaryNavbar/secondaryNavbar';
import axios from 'axios';
import {   Checkmark, Close } from "grommet-icons";

//defining columns for Data table component
const columns = [
    {
        property: "Domain",
        header: "Name",
      

    },
    {
        property: "Username",
        header: "UserName"
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

];


//putting our data into to an DATA Array

//extracting data from colums using map in to a variable called controlledColums
const controlledColumns = columns.map(col => Object.assign({}, col));




class Configuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //checked array in state for getting checked items
            checked: [],
            //open flag for add button to open rigth side drawer with a form
            open: false,
            //string state variable which holds the selected string in the list 
            select: "",
            //getting selected string through props
            selected: props.selected,
            //pencil icon flag which opens sidedrawer with a form
            Editopen: false,
            data:[],
            AD:[]
            
         
        };
    }
    //handling changed value in a checkbox
    onChange = event => this.setState({ selected: event.target.value });

    onCheck = (event, value) => {
        const { checked } = this.state;
        if (event.target.checked) {
            checked.push(value);
            this.setState({ checked });
        } else {
            this.setState({ checked: checked.filter(item => item !== value) });
        }
    };
    //check all the event triggered in Data table
    onCheckAll = event =>
        this.setState({
            checked: event.target.checked ? this.state.data.map(datum => datum.name) : []
        });
    //opens Add form on the rigth side
    onOpen = () => this.setState({ open: true });
    //close the form 

    onClose = () => {
        this.setState({ open: undefined, Editopen: undefined });
    };
    //opens Edit form on the right side when clicked in edit button
    editopen = (data) => {
        this.setState({ Editopen: true,AD:data })
    }
    componentWillMount(){
        axios.get("http://localhost:4001/adsettings")
        .then(response=>{
            
             this.setState({
                 data:response.data.Data
             })

        })
        
        .catch(error=>{
            console.log("error",error)
        })
    }
    
    componentDidUpdate(){
        axios.get("http://localhost:4001/adsettings")
        .then(response=>{
            
             this.setState({
                 data:response.data.Data
             })

        })
        
        .catch(error=>{
            console.log("error",error)
        })
    }
    

    render() {
        //calling all the variables of state
        const { checked, multiArchive, centralArchive } = this.state;
        const { open, Editopen } = this.state;
        const { selected } = this.state;
        this.state.AD && console.log("this.state.AD", this.state.AD)

        return (
            <Grommet theme={grommet} full>
                <Box fill>
                    {/* using tabs component of groommet to to show different forms in different tabs */}
                    <Tabs flex>
                        {/* General tab */}
                        <Tab title="General">
                        <General/>

                        </Tab>
                        {/* Smtp Tabs */}
                        <Tab title="SMTP Configuration">
                            <Box >
                                <SMTPConfiguration/>

                            </Box>
                        </Tab>
                        {/* Deployment Tab */}
                        <Tab title="Deployment Setting">

                           <Deploymentsetting/>








                        </Tab>
                        {/* Ad Setting tab */}
                        <Tab title="AD Setting">
                            <Box align="center" justify="center" pad="medium">
                                {/* using flag and layer component of to open Add form on the rightside */}
                                {open && (
                                    <ADSettingsModal header="ADD AD Setting" close={this.onClose} />
                                )}

                                {/* using flag and layer component to open edit Form on the rigth side */}
                                {Editopen && (
                                    <ADSettingsModal header="Edit Ad Setting" close={this.onClose} Datum={this.state.AD} />
                                )}
                                {/* using datatable component of groommet to show datalist */}
                                <DataTable 
                                    columns={[


                                        {
                                            property: "checkbox",
                                            render: datum => (
                                                <CheckBox
                                                    key={datum.name}
                                                    checked={checked.indexOf(datum.name) !== -1}
                                                    onChange={e => this.onCheck(e, datum.name)}
                                                />
                                            ),


                                            header: (
                                                <CheckBox
                                                    checked={checked.length === this.state.data.length}
                                                    indeterminate={
                                                        checked.length > 0 && checked.length < this.state.data.length
                                                    }
                                                    onChange={this.onCheckAll}
                                                />
                                            ),
                                            sortable: false
                                        },
                                        {
                                            property: 'Edit',
                                            header: '',
                                            render: datum => (
                                                <Box pad={{ vertical: "xsmall" }}>
                                                    <Edit cursor="pointer" onClick={()=>this.editopen(datum)} />
                                                </Box>

                                            ),

                                        },
                                        ...controlledColumns
                                    ].map(col => ({ ...col }))}
                                    data={this.state.data}
                                    sortable
                                    size="small"
                                   resizeable="true"

                                    
                                />
                                <Box direction="row-responsive" gap="medium" pad="medium">
                                    <Button label="Add" onClick={this.onOpen} />
                                    <Button label="Enable" />
                                    <Button label="Disable" />
                                    <Button label="Delete" />
                                </Box>

                            </Box>
                        </Tab>
                        {/* SSO Setting tab with form  browse button remaining*/}
                        <Tab title="SSO Setting" justify="start" align="start">
                          <Ssosetting/>







                        </Tab>
                    </Tabs>
                </Box>
            </Grommet>
        )
    }
}

export default Configuration;


