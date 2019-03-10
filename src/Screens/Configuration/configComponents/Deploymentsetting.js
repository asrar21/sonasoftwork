import React, { Component } from 'react';
//importing components from grommet
import {
    RadioButton,
    Text,
    Box,
    TextInput,
    Button,
    CheckBox,
    DataTable,
    Heading
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

            ischecked:false,
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
        const { centralArchive, multiArchive } = this.state;
        

        return (
            <div>
                <Box direction="row"
                    >
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box margin={{top:"small"}}>
                        <Text>
                            Site prefix:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box margin={{top:"small"}}>
                            <TextInput></TextInput>
                        </Box>

                    </Box>
                </Box>

                <Box direction="row"
                   >
                    <Box width="medium"
                         margin={{ left: "medium" }}>
                         <Box margin={{top:"small"}}>
                        <Text>
                            Archival Topology:
                                    </Text>
                                    </Box>
                    </Box>
                    <Box direction="row">
                        <Box direction="row-responsive" margin={{top:"small"}} gap="small">
                            <RadioButton label="central Archive" value="centralArchive" checked={centralArchive} name="archiveOptions" onChange={(e) => this.Show(e)}>

                            </RadioButton>
                            <RadioButton label="multi Archive" value="multiArchive" checked={multiArchive} name="archiveOptions" onChange={(e) => this.Show(e)}>

                            </RadioButton>
                        </Box>

                    </Box>
                </Box>
                {this.state.multiArchive ?
                    <Box>
                        <Box >
                            <Box >
                                <Heading size="small">Add other sites</Heading>
                            </Box>

                            <Box direction="row"
                                margin={{top:"small"}}>
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                     <Box >
                                    <Text>
                                        Site Url:
                                    </Text>
                                    </Box>
                                </Box>
                                <Box direction="row">
                                    <Box >
                                        <TextInput></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                margin={{top:"small"}}>
                                <Box width="medium"
                                     margin={{ left: "medium" }}>
                                     <Box>
                                    <Text >
                                        Authorization Key:
                                    </Text>
                                    </Box>
                                </Box>
                                <Box direction="row">
                                    <Box>
                                        <TextInput></TextInput>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                margin={{top:"small"}}>
                                <Box width="medium"
                                    margin={{ left: "medium" }}>
                                    <Box >
                                    <Text>
                                        Authenthication Required:
                                    </Text>
                                    </Box>
                                </Box>
                                <Box direction="row">
                                    <Box >
                                        <CheckBox 
                                          checked={this.state.ischecked}
                                          onChange={(event) => this.setState({ischecked:event.target.checked})}/>
                                    </Box>

                                </Box>
                            </Box>
                            <Box direction="row"
                                margin={{top:"small"}} width="large">
                                <Box width="xlarge">
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



                        </Box>

                    </Box>

                    : null
                }



                <Box align="center" justify="center" direction="row-responsive" gap="small" pad="medium">
                    <Button label="save" primary={true} /> <Button label="cancel" />
                </Box>


            </div>

        )
    }
}


