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
    Grid

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
                <Image src={Icons.review_blue} width="25px" height="25px" />
            </Box>
        )
    },

];
const column = [
    {
      property: "SiteName",
      header: "SiteName",
      primary: true,
      
    },
    {
      property: "SearchUrl",
      header: 'SearchUrl'
    },
    {
      property: "Remove",
      header: "Remove",
    }
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
            deployment:false
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

     Show=()=>{
         let pflag=this.state.deployment
         this.setState({
             deployment:!pflag
         })
     }

    render() {
        //calling all the variables of state
        const { checked } = this.state;
        const { open, Editopen } = this.state;
        const { selected } = this.state;


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
                          
                                <Box  >
                                    <Box pad="medium"direction="row-responsive">
                                    <Box pad="medium" gap="large">
                                        <Text>SitePrefix:  </Text></Box> <Box pad="medium" gap="large"><TextInput value="SNS"></TextInput></Box>
                                        
                                    </Box>
                                    <Box pad="medium"direction="row-responsive">
                                    <Box pad="medium" gap="large">
                                        <Text>Archival Topology:  </Text></Box> <Box pad="medium" gap="large" direction="row-responsive"> <RadioButton
                                                            label="Central Archive"
                                                            name="radio"
                                                            onChange={this.Show}
                                                           />
                                                        <RadioButton
                                                            label="Multi Archive"
                                                            name="radio"
                                                            onChange={this.Show}

                                                            
                                                        />
                                                        </Box>
                                    </Box>
                                    


                                </Box>
                                { this.state.deployment===true?
                                <Box>
                                
                                <Box  >
                                    <Box pad="medium"direction="row-responsive">
                                    <Box pad="medium" gap="large">
                                        <Text>Site URL:  </Text></Box> 
                                        <Box pad="medium" gap="large">
                                        <TextInput value=""></TextInput></Box>
                                        
                                    </Box>
                                    <Box pad="medium"direction="row-responsive">
                                    <Box pad="medium" gap="">
                                        <Text>AuthorizedKey:  </Text></Box> 
                                        <Box pad="medium" gap="">
                                        <TextInput></TextInput>
                                                           
                                                        </Box>
                                    </Box>
                                    <Box pad="medium"direction="row-responsive">
                                    <Box pad="medium" gap="">
                                        <Text>AuthenthicationRequired:  </Text></Box> 
                                        <Box pad="medium" gap="" >
                                       <CheckBox></CheckBox>
                                       <Button label="Add"></Button>
                                                           
                                                        </Box>
                                    </Box>
                                    


                                </Box>
                                </Box>:null
                                }
                                <Box align="center" justify="center" direction="row-responsive">
                                    <Button label="save"/> <Button  label="cancel"/>
                                </Box>

                               
                                
                         




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
                                            <Box direction="row-responsive">
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
                                            <Box direction="row-responsive">
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
                                        </Box>
                                    </Layer>
                                )}
                                {/* using datatable component of groommet to show datalist */}
                                <DataTable size="small"
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
                                <Box direction="row-responsive">
                                    <Button label="Add" onClick={this.onOpen} />
                                    <Button label="Enable" />
                                    <Button label="Disable" />
                                    <Button label="Delete" />
                                </Box>

                            </Box>
                        </Tab>
                        {/* SSO Setting tab with form  browse button remaining*/}
                        <Tab title="SSO Setting" justify="start" align="start">
                            <Grid
                                fill
                                areas={[
                                    { name: "nav", start: [0, 0], end: [0, 0] },
                                    { name: "main", start: [1, 0], end: [1, 0] }
                                ]}
                                columns={["small", "flex"]}
                                rows={["flex"]}
                                gap="small"
                            >
                                <Box gridArea="nav">
                                    <Box pad="medium" gap="">
                                        <Text>Identity Provider URL  </Text>
                                    </Box>
                                    <Box pad="medium" gap="">
                                        <Text>Service Provider URL </Text>
                                    </Box>
                                    <Box pad="medium" gap="">
                                        <Text>Issuer:</Text>
                                    </Box>
                                    <Box pad="medium" margin="small" gap="">
                                        <Text>Public Certificate :</Text>
                                    </Box>
                                    <Box pad="medium" margin="small" gap="">
                                        <Text>Enable </Text>
                                    </Box>
                                </Box>

                                <Box gridArea="main"  >
                                    <Box pad="medium" gap="">
                                        <TextInput></TextInput>
                                    </Box>
                                    <Box pad="medium" gap="">
                                        <TextInput></TextInput>
                                    </Box>
                                    <Box pad="medium" gap="">
                                        <TextInput></TextInput>
                                    </Box>

                                    <Box pad="medium">
                                        <TextInput></TextInput>

                                    </Box>
                                    <Box pad="medium">
                                        <Box pad="medium">
                                            <CheckBox></CheckBox>
                                        </Box>
                                    </Box>
                                    <Box pad="" direction="row-responsive" align="center" justify="center">
                                        <Button label="Save" /><Button label="Cancel" />
                                    </Box>



                                </Box>

                            </Grid>







                        </Tab>
                    </Tabs>
                </Box>
            </Grommet>
        )
    }
}

export default Configuration;


