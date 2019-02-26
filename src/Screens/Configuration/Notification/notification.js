import React, { Component } from 'react';
//importing components from grommet
import {
    Box,
    

    
   
    Grommet,
    
    Text,
    Button,
  
    CheckBox,
    DataTable,
    

} from "grommet";
//importing grommet themes 
import { grommet } from "grommet/themes";

//importing grommet icons
import { Edit, Close } from 'grommet-icons';
import NotificationSideModal from '../../../Containers/Modal/Notificationsidemodal';
import SecondaryNavBar from '../../../Containers/secondaryNavbar/secondaryNavbar';



//defining columns for Data table component
const columns = [
    {
        property: "Notification_type",
        header: <Text>Notification_type</Text>,
      

    },
    {
        property: "To",
        header: "To"
    },
    {
        property: "Cc",
        header: "Cc"
    },


   

];



//putting our data into to an DATA Array
const DATA = [
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com,makr@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com,makr@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com,makr@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com,makr@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com,makr@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },
    {
        
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com,makr@sonasoft.com',
        Cc:'vijayk@sonasoft.com'

    },


];
//extracting data from colums using map in to a variable called controlledColums
const controlledColumns = columns.map(col => Object.assign({}, col))





class Notification extends Component {
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
            Editopen: false
        };
    }
    //handling changed value in a checkbox
    onChange = event => this.setState({ selected: event.target.value });

    onCheck = (event, value) => {
        const { checked } = this.state;
        if (event.target.checked) {
            checked.push(value);
            this.setState({ checked });
            console.log('checked',checked)
        } else {
            this.setState({ checked: checked.filter(item => item !== value) });
        }
    };
    //check all the event triggered in Data table
    onCheckAll = event =>
        this.setState({
            checked: event.target.checked ? DATA.map(datum => datum.Notification_type) : []
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
        const { checked } = this.state;
        const { open, Editopen } = this.state;
        const { selected } = this.state;


        return (
            <Grommet theme={grommet} full>
             <SecondaryNavBar pageName="Notification" pageIcon="Notifications"/>
                <Box fill>
              
                        
                            <Box align="center" justify="center" pad="medium" size="small">
                                {/* using flag and layer component of to open Add form on the rightside */}
                                {open && (
                                    <NotificationSideModal header="Add Notification" close={this.onClose}/>
                                )}

                                {/* using flag and layer component to open edit Form on the rigth side */}
                                {Editopen && (
                                   <NotificationSideModal header="Edit Notification" close={this.onClose}/>
                                )}
                                {/* using datatable component of groommet to show datalist */}
                                <DataTable
                                    columns={[


                                        {
                                            property: "checkbox",
                                            render: datum => (
                                                 <CheckBox
                                                    key={datum.Notification_type}
                                                    checked={checked.indexOf(datum.Notification_type) !== -1}
                                                    onChange={e => this.onCheck(e, datum.Notification_type)}
                                                />
                                            ),


                                            header: (
                                                <CheckBox
                                                    checked={checked.length === DATA.length}
                                                    indeterminate={
                                                        checked.length > 0 && checked.length < DATA.length
                                                    }
                                                    onChange={e=>this.onCheckAll(e)}
                                                />
                                            ),
                                            sortable: false
                                        },
                                        {
                                            property: 'Edit',
                                            header: '',
                                            render: datum => (
                                                <Box pad={{ vertical: "xsmall" }}>
                                                    <Edit onClick={this.editopen} />
                                                </Box>

                                            ),

                                        },
                                        ...controlledColumns
                                    ].map(col => ({ ...col }))}
                                    data={DATA}
                                    sortable
                                    size="medium"
                                  
                                />
                                <Box direction="row-responsive" gap="medium">
                                    <Button label="Add" onClick={this.onOpen} />
                                    
                                    <Button label="Delete" />
                                </Box>

                            </Box>
                        
                        
                        
                </Box>
            </Grommet>
        )
    }
}

export default Notification;


