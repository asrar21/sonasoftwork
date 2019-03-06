import React, { Component } from 'react'
import { Grommet, Box, DataTable, CheckBox } from "grommet";
import {Edit} from "grommet-icons";

const checkBoxColumn = [{
                        property: 'checkBox',
                        header: <CheckBox
                                    // checked={this.state.selectAll}
                                    // onChange={(event) =>  this.selectAllData(event)}
                            />,
                        render: () => (
                            <Box>
                              <CheckBox />
                            </Box>
                        )
}]

const editIconColumn = [{
                          property: 'edit',
                          header: "Edit",
                          render: () => (
                            <Box>
                              <Edit cursor="pointer" />
                            </Box>
                          )
}]

const columns = [
  ...checkBoxColumn,
  ...editIconColumn,
]

class CustomDataTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }

    const deleteCheckbox = !this.props.checkBox ? columns.splice(0,1) : null
    const deleteEditColumn = !this.props.edit ? ( columns.length === 2 ? columns.splice(1,1) : columns.splice(0,1) ) : null
    
  }

  static getDerivedStateFromProps(props, state){
    if(props.data.length && props.edited){
      console.log("setting state to props data")
      props.editDone && props.editDone()
      return {
        data: props.data,
      }
    }
    if(props.selector){
      if(props.data.length && !state.dataFetched){
        return{
          data: props.data,
          dataFetched: true
        }
      }
    }
  }

  onSearch = search => {
    let nextData;
    console.log("search", search)
    if (search) {
      console.log("searching for name")
      const expressions = Object.keys(search).map(property => ({
        property,
        exp: new RegExp(search[property], "i")
      }));
      nextData = this.props.data.filter(
        d => !expressions.some(e => !e.exp.test(d[e.property]))
      );
    } else {
      nextData = this.props.data;
    }
    console.log("nextData", nextData)
    this.setState({ data: nextData });
  };
  render() {
    return (
      <Grommet>
            <Box>
              <DataTable 
                  size="medium"
                  overflow="scroll"
                  margin="medium"
                  columns={[
                          ...columns,
                          ...this.props.columns
                  ].map(col => ({ ...col }))}
                  
                  // resizeable in the docs it is written resizeable shoud not be used with size prop,you can se one at a time
                  data = {this.state.data}
                  onSearch = {this.onSearch}
                  sortable
              />
            </Box>
      </Grommet>
    )
  }
};

export default CustomDataTable;
