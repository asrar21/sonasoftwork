import React, { Component } from 'react';
//importing components from grommet
import {
    Box,
    Layer,
    Heading,
    FormField,
    RadioButton,
    Grommet,
    TextInput,
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
import { Edit, Close } from 'grommet-icons';



//defining columns for Data table component
const columns = [
    {
        property: "Domain",
        header: <Text>Name</Text>,
        primary: true,

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

//pushing data into data array
const data = [];
for (let i = 0; i < 40; i += 1) {
    data.push({
        Domain: `Domain`,
        UserName: 'UserName'
    });
}
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
        const { checked, open, Editopen, selected } = this.state;

        return (
            <Grommet theme={grommet} full>
                <Box fill>
                    {/* using tabs component of groommet to to show different forms in different tabs */}
                    <Tabs flex>
                        {/* General tab */}
                        <Tab title="General">

                        </Tab>
                        {/* Smtp Tabs */}
                        <Tab title="SMTP Configuration">
                            <Box >

                            </Box>
                        </Tab>
                        {/* Deployment Tab */}
                        <Tab title="Deployment Setting">

                        </Tab>
                        {/* Ad Setting tab */}
                        <Tab title="AD Setting">
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
                                            onSubmit={this.onClose}>
                                            <Box flex={false} direction="row" justify="between">
                                                <Heading level={2} margin="none">
                                                    Add Ad Setting
                                                 </Heading>
                                                <Button icon={<Close />} onClick={this.onClose} />
                                            </Box>
                                            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                                                <FormField label="Domain">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="UserName">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="Password">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="Enable Sync">
                                                    <CheckBox />
                                                </FormField>
                                                <FormField label="Azure Users?">
                                                    <CheckBox />
                                                </FormField>
                                                <FormField label="Discover Organizational units">
                                                    <Box align="" pad="" >
                                                        <RadioButton
                                                            label="All"
                                                            name="radio"
                                                            value="c1"
                                                            checked={selected === "c2"}
                                                            onChange={this.onChange}
                                                            {...this.props}
                                                        />
                                                        <RadioButton
                                                            label="Selected"
                                                            name="radio"
                                                            value="c2"
                                                            checked={selected === "c2"}
                                                            onChange={this.onChange}
                                                            {...this.props}
                                                        />
                                                    </Box>
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
                                                    Edit AD Setting
                                                  </Heading>
                                                <Button icon={<Close />} onClick={this.onClose} />
                                            </Box>
                                            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                                                <FormField label="Domain">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="UserName">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="Password">
                                                    <TextInput />
                                                </FormField>
                                                <FormField label="Enable Sync">
                                                    <CheckBox />
                                                </FormField>
                                                <FormField label="Azure Users?">
                                                    <CheckBox />
                                                </FormField>
                                                <FormField label="Discover Organizational units">
                                                    <Box align="" pad="" >
                                                        <RadioButton
                                                            label="All"
                                                            name="radio"
                                                            value="c1"
                                                            checked={selected === "c2"}
                                                            onChange={this.onChange}
                                                            {...this.props}
                                                        />
                                                        <RadioButton
                                                            label="Selected"
                                                            name="radio"
                                                            value="c2"
                                                            checked={selected === "c2"}
                                                            onChange={this.onChange}
                                                            {...this.props}
                                                        />
                                                    </Box>
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
                                                    <Edit cursor="pointer" onClick={this.editopen} />
                                                </Box>

                                            ),

                                        },
                                        ...controlledColumns
                                    ].map(col => ({ ...col }))}
                                    data={DATA}
                                    sortable
                                    size="medium"
                                />
                                <Box margin="20px" direction="row-responsive">
                                    <Button label="Add" onClick={this.onOpen} />
                                    <Button label="Enable" />
                                    <Button label="Disable" />
                                    <Button label="Delete" />
                                </Box>

                            </Box>
                        </Tab>
                        {/* SSO Setting tab with form */}
                        <Tab title="SSO Setting"  >


                           
                             <Box justify="center" margin="large" align="start" direction="column">
                                 
                                     <Text>Identity Provider URL : </Text>
                                     <TextInput size="small" ></TextInput>

                                     <Text>Service Provider URL :  </Text>
                                     <TextInput></TextInput>
                                     <Text>Issue :  </Text>
                                     <TextInput></TextInput>
                                     <Text>Public Certificate :  </Text>
                                     <TextInput></TextInput>
                                     
                                     <Button label="Browse"
                                         onClick={() => { }}
                                     />
                                     <Text>Enable :  </Text>
                                     <CheckBox></CheckBox>
                                     <Box>
                                         <Button label="Save" /><Button label="Cancel" />

                                     </Box>

                                
                             </Box>




                        </Tab>
                    </Tabs>
                </Box>
            </Grommet>
        )
    }
}

export default Configuration;


