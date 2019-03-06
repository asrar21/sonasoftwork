import React, { Component } from 'react'
import { Grommet, Box, DataTable } from "grommet";
class DataTable extends Component {
  render() {
    return (
      <Grommet>
            <Box>
            <DataTable 
                  columns={[
                         ...this.props.controlledColumns
                  ].map(col => ({ ...col }))}
                  data={this.state.data}
                  sortable
            />
            </Box>
      </Grommet>
    )
  }
};

export default DataTable;
