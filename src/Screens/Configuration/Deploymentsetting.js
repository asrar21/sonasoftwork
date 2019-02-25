import React, { Component } from 'react';
//importing components from grommet
import {







    RadioButton,
  
    Text,
    Box,



    TextInput,

    Button,

    CheckBox,
    DataTable




} from "grommet";


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
const DATA = [
    


];


export default class Deploymentsetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            
            centralArchive: true,
            multiArchive: false
        };
    }
   

    Show = (e) => {
        const options = ['multiArchive', 'centralArchive']
        options.map(value => {
            this.setState({
                [value]: false
            })
        })
        this.setState({
            [e.target.value]: true
        })
    }




    render() {
        const {centralArchive,multiArchive}=this.state

        return (
            <div>
            <Box>
                <Box direction="row-responsive" justify="center">
                    <Text>
                        Site prefix:
                                    </Text>
                    <Box width={"70%"} margin={{ left: "large" }}>
                        <TextInput></TextInput>
                    </Box>
                </Box>
                <Box direction="row-responsive" margin={{ top: "large" }} justify="center" >
                    <Text>
                        Archival topology:
                                    </Text>
                    <Box direction="row-responsive" width={"70%"} margin={{ left: "small" }} >
                        <RadioButton label="central Archive" value="centralArchive" checked={centralArchive} name="archiveOptions" onChange={(e) => this.Show(e)}>

                        </RadioButton>
                        <RadioButton label="multi Archive" value="multiArchive" checked={multiArchive} name="archiveOptions" onChange={(e) => this.Show(e)}>

                        </RadioButton>
                    </Box>

                </Box>
                {this.state.multiArchive ?
                    <Box>
                        <Box margin={{ top: "large" }} border={{ side: "all", color: "black" }}>
                            <Box pad="medium" margin="medium" border={{ side: "all", color: "black" }}>
                                <Text>Add other sites</Text>
                            </Box>

                            <Box direction="row-responsive" justify="center">
                                <Text>
                                    Site URL:
                                    </Text>
                                <Box width={"70%"} margin={{ left: "large" }}>
                                    <TextInput></TextInput>
                                </Box>
                            </Box>
                            <Box direction="row-responsive" margin={{ top: "large" }} justify="center">

                                <Text>AuthorizedKey:  </Text>
                                <Box width={"70%"} margin={{ left: "large" }} justify="center">
                                    <TextInput></TextInput>
                                </Box>


                            </Box>
                            <Box direction="row-responsive" margin={{ top: "large" }} justify="center">

                                <Text>AuthenthicationRequired:  </Text>
                                <Box width={"70%"} margin={{ left: "large" }} direction="row-responsive">
                                    <CheckBox></CheckBox>
                                    <Button label="Add"></Button>
                                </Box>

                            </Box>
                            <DataTable
                                columns={column.map(c => ({
                                    ...c,
                                    search: c.property === "SiteName" || c.property === "SearchUrl" || c.property === "Remove"
                                }))}
                                data={DATA}
                                sortable
                                resizeable
                            />



                        </Box>

                    </Box>

                    : null
                }

            </Box>
              
            <Box align="center" justify="center" direction="row-responsive" gap="medium" pad="medium">
                <Button label="save" /> <Button label="cancel" />
            </Box>
    

      </div>
    
      )
    }
}
