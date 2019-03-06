import React, { Component } from 'react';
//importing components from grommet
import {
    Layer,
    Box,
    Heading,
    Button,
    Text,
    TextInput,
    CheckBox,
    RadioButton,
    Select
} from "grommet";

import {  Close } from 'grommet-icons';

class MaiboxModal extends Component {
    constructor(props){
        super(props)
        this.state = {
       }
    }

    render() {
        return (
            <Layer
                position="center"
                full
                onEsc={this.props.close}
            >
                <Box
                    pad={{left: "xlarge", right: "xlarge", top: "small"}}
                    onSubmit={this.props.close}
                >
                    <Box  direction="row" justify="between">
                        <Heading  size="small" margin="none">
                            {this.props.header}
                        </Heading>
                        <Button icon={<Close />} onClick={this.props.close} />
                    </Box>

                    <Text>User</Text>
                    <Box 
                    direction="row"
                    >
                        <Box width="medium" 
                        >
                        <TextInput/>
                        </Box>
                        <Box margin="small">
                        <Button primary label="Apply"/>
                        </Box>
                        <Box margin="small">
                        <Button label="Clear" disabled/>
                        </Box>
                    </Box>

                    <Text><br/>Assign access to</Text>
                    <Box direction="row">
                    <RadioButton
                    label="All Users"
                    />
                    <Box margin="small">
                    <RadioButton
                    label="Selected"
                    />
                    </Box>
                    </Box>

                    <Box 
                    direction="row"
                    >
                        <Box  
                        width="large" 
                        >
                        Server:
                        </Box>

                        <Box fill 
                            margin="xsmall"
                        >
                        <Select
                        value="Select Value"
                        options={['']}
                        />
                        </Box>
                    </Box>

                    <Box 
                    direction="row"
                    >
                        <Box  
                        width="large" 
                        >
                        Storage Group:
                        </Box>

                        <Box fill 
                            margin="xsmall"
                        >
                        <Select
                        value="All"
                        options={['']}
                        />
                        </Box>
                    </Box>

                    <Box 
                    direction="row"
                    >
                        <Box  
                        width="large"
                        >
                        MailBox Store:
                        </Box>

                        <Box fill
                            margin="xsmall"
                        >
                        <Select
                        value="All"
                        options={['']}
                        />
                        </Box>
                    </Box>

                    <Box 
                    direction="row"
                    >
                        <Box 
                        width="large"
                        >
                        Show Deleted Mailbox(es):
                        </Box>
                        
                        <Box fill>
                        <CheckBox/>
                        </Box>
                    </Box>

                    <Box 
                    direction="row"
                    >
                        <Box 
                        width="large"
                        >Mailbox(es):
                        </Box>

                        <Box fill
                             margin="xsmall"
                        >
                        <Box direction="row">
                        <Box height="xsmall" width="large"overflow="auto" border={{color:"dark-5"}}>
                        <Box pad="xlarge"></Box>
                        <Box pad="xlarge"></Box>
                        </Box>
                        {/*add button*/}
                        <Box margin="small"  >
                            <Button
                            label="Add" 
                            primary
                            onClick={() => {}}
                            disabled
                                />
                        </Box>
                        </Box>
                        </Box>
                    </Box>

                    <Box 
                    direction="row"
                    >
                        <Box 
                        width="large"
                        >Selected MailBox(es):
                        </Box>

                        <Box fill
                            margin="xsmall" 
                        >
                        <Box direction="row">
                        <Box height="xsmall" width="large"overflow="auto" border={{color:"dark-5"}}>
                        <Box pad="xlarge"></Box>
                        <Box pad="xlarge"></Box>
                        </Box>
                        {/*remove button*/}
                        <Box margin="small"  >
                            <Button
                            disabled
                            label="Remove" 
                            onClick={() => {}} />
                        </Box>
                        </Box>
                        </Box>
                    </Box>
                    <Box 
                        align="center"
                        >
                            <Box  direction="row" >
                            {/*save button*/}
                            <Box margin="small"  >
                                <Button
                                primary
                                label="Save" 
                                disabled
                                onClick={() => {}} />
                            </Box>

                            {/*cancel button*/}
                            <Box margin="small" >
                                <Button
                                label="Cancel" 
                                onClick={this.props.close} />
                            </Box>
                            </Box>
                    </Box>
                </Box>
            </Layer>
        )
    }
};

export default MaiboxModal;