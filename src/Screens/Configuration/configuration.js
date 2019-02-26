import React, { Component } from 'react';
//importing components from grommet
import {
    Box,
    Grommet,  
    Text,
    Button,
    Tab,
    Tabs,
    CheckBox,
    DataTable,
    Image,
} from "grommet";
//importing grommet themes 
import { grommet } from "grommet/themes";
//importing icons from home screen folder
import review_blue from "../../assets/Icons/review_blue.png"
//importing grommet icons
import { Edit, } from 'grommet-icons';
import Ssosetting from './configComponents/SsoSetting'
import ADSettingsModal from '../../Containers/Modal/ADSettingsmodal';
import Deploymentsetting from '../Configuration/configComponents/Deploymentsetting';
import SMTPConfiguration from './configComponents/Smtpconfiguration';
import General from './configComponents/general'
import SecondaryNavBar from '../../Containers/secondaryNavbar/secondaryNavbar'

//defining columns for Data table component
const columns = [
    {
        property: "Domain",
        header: <Text>Name</Text>,
      

    },
    {
        property: "UserName",
        header: "UserName"
    },

    {
        property: "Status",
        header: "Status",
        render: datum => (
            <Box pad={{ vertical: "xsmall" }}>
                <Image src={review_blue} width="20px" height="20px" />
            </Box>
        )
    },

];


//putting our data into to an DATA Array
const DATA = [
    {
        Domain: "192.168.1.2",
        UserName: 'Administrator',

    },
    {
        Domain: "sonansoft.onmicrosoft.com",
        UserName: 'vijayk@sonasoft.com',

    },


];
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
            checked: event.target.checked ? DATA.map(datum => datum.name) : []
        });
    //opens Add form on the rigth side
    onOpen = () => this.setState({ open: true });
    //close the form 

    onClose = () => {
        this.setState({ open: undefined, Editopen: undefined });
    };
    //opens Edit form on the right side when clicked in edit button
    editopen = () => this.setState({ Editopen: true });

    

    render() {
        //calling all the variables of state
        const { checked, } = this.state;
        const { open, Editopen } = this.state;
        const { selected } = this.state;


        return (
            <Grommet theme={grommet} full>
             <SecondaryNavBar pageName="Configuration" pageIcon="configuration"/>

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
                                    <ADSettingsModal header="Edit Ad Setting" close={this.onClose} />
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
                                                    checked={checked.length === DATA.length}
                                                    indeterminate={
                                                        checked.length > 0 && checked.length < DATA.length
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
                                                    <Edit cursor="pointer" onClick={this.editopen} />
                                                </Box>

                                            ),

                                        },
                                        ...controlledColumns
                                    ].map(col => ({ ...col }))}
                                    data={DATA}
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


