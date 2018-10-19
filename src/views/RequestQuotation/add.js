import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InputLabel from "@material-ui/core/InputLabel";
//import Select from "@material-ui/core/Select";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomInput/CustomSelect.jsx";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import Select from 'react-select';

import Check from "@material-ui/icons/Check";
import {connect} from 'react-redux';

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle.jsx";
import tableStyle from "assets/jss/material-dashboard-pro-react/components/tableStyle.jsx";
import generalStyle from "assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import { getCurves } from 'crypto';
import CardText from "components/Card/CardText.jsx";
import * as prActions from '../../actions/purchaserequisition';
import * as genericActions from 'actions/generic.js';
import * as vendorActions from 'actions/vendor.js';

const styles = theme => ({
  ...tableStyle,
  ...regularFormsStyle,
  td:{
    border: 'none',
    margin: '0 10px',
    padding: '0',
    fontWeight: '700',
    fontSize: '15px',
  },
   removeDivPadding:{ maxWidth: "12%"}
});
 

const categories = [
  {value: '0', label:'Select',},
  {value: '1',label: 'Category 1',},
  {value: '2',label: 'Category 2',},
  {value: '3',label: 'Category 3',}
];


class Add extends React.Component {
  state = {
    simpleSelect: "",
    type: '',
    rowArray:[],
    data:{
      checkedLineItems:[]
    },
    lineItems:[],
    alert: null,
    show: false
  };

  componentDidMount(){
    let rowArray = [];
    for(var i = 0; i < this.props.pr.lineitems.length; i++){
      rowArray.push(i);
    }
    this.setState({rowArray:rowArray, lineItems : this.props.pr.lineitems});
    genericActions.fetchAll("departments", this.props.user.token, (items)=>{
      this.setState({departments : items});
    });
  }

  handleLineItems = i =>{
    let checkedItems = this.state.data.checkedLineItems;
    let index = checkedItems.indexOf(i);
    if(itemIndex > 0){
      checkedItems.splice(index, 1);
    }else{
      checkedItems.push(i);
    }
    this.setState({
      checkedLineItems:checkedItems
    });
  }

  handleChange = (selectedOption) => {
    {{debugger}}
    vendorActions.searchVendor(token,selectedOption, (vendors)=>{
        this.setState({vendors: vendors});
    })
  }

  render() {
    const { classes, tableHeaderColor } = this.props;
    const tableData = this.state.rowArray.map((prop, key)=> {
      let value;
      if(this.state.lineItems[key]){
        value = this.state.lineItems[key];
      }
      else{
        value = {};
      }
    const category = categories.map(option => {
        if(value.category == option.value){
          return option.label
        } 
      });
      return (
        <TableRow key={key}> 
          <TableCell component="th" style={{border: "none", padding: "0", width: "20px", textAlign: "center"}}>               
            <FormControlLabel
                control={
                  <Checkbox
                      tabIndex={-1}
                      onClick={() => this.handleLineItems(key)}
                      checkedIcon={
                        <Check className={classes.checkedIcon} />
                      }
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked
                      }}
                  />
                }
                classes={{
                  label: classes.label
                }}
            />
          </TableCell>
          <TableCell style={generalStyle.removeBorder} className={classes.td}>
              {category}
          </TableCell>
          <TableCell className={classes.td}>
                {value.itemdescription}
          </TableCell>
          <TableCell className={classes.td}>
                {value.quantity}
          </TableCell>
          <TableCell className={classes.td}>
                {value.unit}
          </TableCell>      
        </TableRow>
        )}
    );
  	return (
        <div>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <form>
                  <Card>
                    <CardBody>
                      <Grid container>
                        <GridItem xs={12} sm={12} md={11} lg={11}>
                          <Select
                              isMulti
                              //value={selectedOption}
                              onChange={this.handleChange}
                              options={this.state.vendors}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={3} md={3} lg={3}>
                        <CustomInput labelText="Vendors" id="vendors" name="vendors"
                          formControlProps={{
                            fullWidth: true
                          }} inputProps={{             
                          }}
                        />
                        </GridItem>
                      </Grid>
                    </CardBody>
                    <Grid container>
                      <GridItem xs={12} sm={12} md={12} lg={12}>
                          <div className={classes.tableResponsive} style ={{ overflowX: "scroll"}}>
                          <Table className={classes.table} > 
                            <TableHead  className={classes[tableHeaderColor + "TableHeader"]} style={{marginTop:"10px", color:"blue", borderBottomColor:"#333",borderBottomStyle:"solid", borderBottomWidth:"1px"}}>
                              <TableRow>
                                <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "blue", width:"55px"}}>Item No</TableCell>
                                <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "blue"}}>Category</TableCell>
                                <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "blue"}}>Item Description</TableCell>
                                <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "blue", width: "70px"}}>Quantity</TableCell>
                                <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "blue"}}>Unit</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                            {tableData}
                            </TableBody>
                          </Table> 
                        </div>
                      </GridItem>
                    </Grid>
                  </Card>
              </form>
              </CardBody>
              </Card>
            </GridItem>
        </div>
      );
  }
}
Add.defaultProps = {
  tableHeaderColor: "gray"
};

Add.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.loader.loading,
    loader : state.loader
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Add));

