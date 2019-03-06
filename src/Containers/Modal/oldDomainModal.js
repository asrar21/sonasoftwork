import React, { Component } from 'react';
//importing components from grommet
import {
    Layer,
    Box,
    Heading,
    Button,
    Text,
    TextInput,
    TextArea
} from "grommet";

import {  Close } from 'grommet-icons';

class OldDomainModal extends Component {
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
                    <Box 
                        direction="row"
                        pad="small"
                        >
                            <Box  
                            width="large"
                            >
                            Old Domain Name:
                            </Box>
                            
                            <Box fill >
                            <Box direction="row">
                                    <Box fill>
                                    <TextInput/>
                                    </Box>
                            </Box>
                            </Box>
                    </Box>
                    <Box 
                        direction="row"
                        pad="small"
                        >
                            <Box  
                            width="large"
                            >
                            Old Domain Desc:
                            </Box>
                            
                            <Box fill >
                            <Box direction="row">
                                    <Box fill>
                                    <TextArea/>
                                    </Box>
                            </Box>
                            </Box>
                    </Box>
                    <Box 
                        pad="small"
                        border="bottom"
                        >
                        <Text>Mailboxes as per configured archival policy</Text>
                    </Box>
                    <Box 
                        direction="row"
                        pad="small"
                        >
                            <Box  
                            width="large"
                            >
                            Available Mailboxes
                            </Box>
                            <Box  
                            >
                            Selected  Mailboxes
                            </Box>
                    </Box>
                    <Box
                        direction="row"
                        pad="small"
                        >
                        <Box
                        width="medium"
                        >
                        <Box height="small" overflow="auto" border={{color:"dark-5"}}>
                        <Box pad="xlarge"></Box>
                        <Box pad="xlarge"></Box>
                        </Box>
                        </Box>
                        
                        <Box
                        width="medium"
                        >
                        </Box>

                        <Box
                        width="medium"
                        >
                        <Box height="small" overflow="auto" border={{color:"dark-5"}}>
                        <Box pad="xlarge"></Box>
                        <Box pad="xlarge"></Box>
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
}
export default OldDomainModal      