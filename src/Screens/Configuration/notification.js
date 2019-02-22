import React, { Component } from 'react';
//importing components from grommet
import {
    Box,
    Layer,
    Heading,
    FormField,
   
    Grommet,
    TextInput,
    Text,
    Button,
  
    CheckBox,
    DataTable,
    

} from "grommet";
//importing grommet themes 
import { grommet } from "grommet/themes";
//importing icons from home screen folder
import * as Icons from '../HomeScreen/homeScreenIcons';
//importing grommet icons
import { Edit, Close } from 'grommet-icons';



//defining columns for Data table component
const columns = [
    {
        property: "Notification_type",
        header: <Text>Notification_type</Text>,
        primary: true,

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

//pushing data into data array
const data = [];
for (let i = 0; i < 40; i += 1) {
    data.push({
        Notification_type: 'Activate Products',
        To:'neilk@sonasoft.com',
        Cc:'vijayk@sonasoft.com'
    });
}
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
const controlledColumns = columns.map(col => Object.assign({}, col));




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
        const { checked } = this.state;
        const { open, Editopen } = this.state;
        const { selected } = this.state;


        return (
            <Grommet theme={grommet} full>
                <Box fill>
                <Heading>
                    Notification
                </Heading>
                    
                        
                            <Box align="center" justify="center" pad="medium">
                                {/* using flag and layer component of to open Add form on the rightside */}
                                {open && (
                                     <Layer
                                     position="right"
                                     full="vertical"
                                     modal
                                     onClickOutside={this.onClose}
                                     onEsc={this.onClose}>
                                     <Box
                                         as="form"
                                         fill="vertical"
                                         overflow="auto"
                                         width="medium"
                                         pad="medium"
                                         onSubmit={this.onClose}
                                     >
                                         <Box flex={false} direction="row" justify="between">
                                             <Heading level={2} margin="none">
                                                 Edit Notification
                                               </Heading>
                                             <Button icon={<Close />} onClick={this.onClose} />
                                         </Box>
                                         <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                                             <FormField label="Notification type">
                                                 <TextInput />
                                             </FormField>
                                             <FormField label="To">
                                                 <TextInput />
                                             </FormField>
                                             <FormField label="Cc">
                                                 <TextInput />
                                             </FormField>
                                             
                                             
                                         </Box>
                                         <Box flex={false} as="footer" align="start">
                                             <Button
                                                 type="save"
                                                 label="Save"
                                                 onClick={this.onClose}
                                                 primary
                                             />
                                         </Box>
                                         <Box flex={false} as="footer" align="start">
                                             <Button
                                                 type="Cancel"
                                                 label="Cancel"
                                                 onClick={this.onClose}
                                                 Default
                                             />
                                         </Box>
                                     </Box>
                                 </Layer>
                                )}

                                {/* using flag and layer component to open edit Form on the rigth side */}
                                {Editopen && (
                                    <Layer
                                        position="right"
                                        full="vertical"
                                        modal
                                        onClickOutside={this.onClose}
                                        onEsc={this.onClose}>
                                        <Box
                                            as="form"
                                            fill="vertical"
                                            overflow="auto"
                                            width="medium"
                                            pad="medium"
                                            onSubmit={this.onClose}
                                        >
                                            <Box flex={false} direction="row" justify="between">
                                                <Heading level={2} margin="none">
                                                    Edit Notification
                                                  </Heading>
                                                <Button icon={<Close />} onClick={this.onClose} />
                                            </Box>
                                            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                                                <FormField label="Notification type">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="To">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="Cc">
                                                    <TextInput />
                                                </FormField>
                                                
                                                
                                            </Box>
                                            <Box flex={false} as="footer" align="start">
                                                <Button
                                                    type="save"
                                                    label="Save"
                                                    onClick={this.onClose}
                                                    primary
                                                />
                                            </Box>
                                            <Box flex={false} as="footer" align="start">
                                                <Button
                                                    type="Cancel"
                                                    label="Cancel"
                                                    onClick={this.onClose}
                                                    Default
                                                />
                                            </Box>
                                        </Box>
                                    </Layer>
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
                                <Box>
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


