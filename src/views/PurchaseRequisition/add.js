import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CreditCard from '@material-ui/icons/CreditCard';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomInput/CustomSelect.jsx";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import classes from "classnames";
import {connect} from 'react-redux';
//import Table from "components/Table/Table.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle.jsx";
import tableStyle from "assets/jss/material-dashboard-pro-react/components/tableStyle.jsx";


const styles = theme => ({
  ...tableStyle,
  ...regularFormsStyle,
  td:{
    padding: '0px',
  },
});


const categories = [
  {value: '0', label:'Select',},
  {value: '1',label: 'Category 1',},
  {value: '2',label: 'Category 2',},
  {value: '3',label: 'Category 3',}
];

class PurchaseRequisition extends React.Component {
  state = {
    simpleSelect: "",
    type: '',
    rowArray:[],
    data:{
      requisitiontype:'',
      requestedby: this.props.user.fullname,
      employeeid: "",
      departmentname: "",
      chargeto: "",
      dateneeded: ""
    },
    lineItems:[]
  };

	handleChange = event => {
    let data = this.state.data;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data,
    });
	};
	
	increaseRow = event=>{
		let rowArray = this.state.rowArray;
		rowArray.push(Date.now());
		this.setState({rowArray:rowArray})
	}

	removeRow = i =>event =>{
		let rowArray = this.state.rowArray;
		rowArray.splice(i,1);
		this.setState({rowArray:rowArray})
  }

  handleLineItemChange= event =>{
    ///{{debugger}}
    let lineItems = this.state.lineItems;
    this.state.rowArray.map((prop, key)=> {

    });
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes, tableHeaderColor } = this.props;
    //{{debugger}}
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    const toDay = mm + '/' + dd + '/' + yyyy;
    console.log(toDay);
  	const tableData = this.state.rowArray.map((prop, key)=> {
      return (
        <TableRow key={key}> 
          <TableCell component="th" scope="row">               
            {key+1}
          </TableCell>
          <TableCell className={classes.td}>
              <CustomSelect labelText="Select" id={key+1+"category"} name="category" required
                     onChange={(e)=>this.handleLineItemChange(e)}
                    formControlProps={{
                      fullWidth: true
                    }} 
                    inputProps={{margin:"normal", }}
                    >
                        {categories.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
              </CustomSelect>
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="itemDescription" id={key+1+"itemdescription"} onChange={(e)=>this.handleLineItemChange(e)} required formControlProps={{  
                                   
                      }}
                    />
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="quantity" id={key+1+"quantity"} onChange={(e)=>this.handleLineItemChange(e)} type="number" required formControlProps={{  
                                          
                      }}
                    />
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="unit" id={key+1+"unit"} onChange={(e)=>this.handleLineItemChange(e)} type="number" required formControlProps={{  
                                    
                    }}
                  />
                  <Button
                        color="danger"
                        simple
                        className={classes.actionButton}
                        key={key}
                        onClick={() => {
                        var data = this.state.rowArray;
                        data.find((o, i) => {
                        if (i === key) {
                          // here you should add some custom code so you can delete the data
                          // from this component and from your server as well
                          data.splice(i, 1);
                          return true;
                        }
                                return false;
                              });
                              this.setState({ rowArray: data });
                            }}
                  >
                    <Close className={classes.icon} />
                  </ Button>
          </TableCell>      
        </TableRow>
        )}
    );
    let showVendorsName = false; 
	  //console.log(this.state);
	if (this.state.simpleSelect === 'Contract'){
		showVendorsName = true;
	}else {
    showVendorsName = false;
  }
    return (
	<div>
	<Grid container>
    <GridItem xs={12} sm={12} md={12}>
      <form className={classes.container} noValidate autoComplete="off">
	        <Card>
              <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <CreditCard />
              </CardIcon>
              <h3 className={classes.cardIconTitle}>Purchase Requisition</h3>
            </CardHeader>
              <CardBody>
              <Grid container>
                  <GridItem xs={12} sm={12} md={6} lg={6}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            Choose Requisition
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
                              id: "simple-select"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Choose Requisition Type
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Contract"
                            >
                              Contract
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Non-Contract"
                            >
                             Non-Contract
                            </MenuItem>                                                      
                          </Select>
                        </FormControl>
                  </GridItem>	
                  <GridItem xs={12} sm={12} md={6} lg={6}>
                      Requisition No: 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <CustomInput labelText="Required By" id="requestedby"
                  formControlProps={{
                      fullWidth: true
                        }}
                    inputProps={{ 
                      disabled: true,
                      value:"Required : "                  
                        }}
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}> 
                      <CustomInput labelText="Employee ID" id="employeeid"
                        formControlProps={{
                          fullWidth: true
                        }} inputProps={{
                          disabled: true, value: "Employee ID : "                 
                        }}
                      />
                  </GridItem>   
                  <GridItem xs={12} sm={12} md={4}>
                      <CustomInput required formControlProps={{
                        fullWidth: true
                        }}
                        inputProps={{
                          disabled: true,
                          value:toDay                
                            }}
                      />
                  </GridItem>                   
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Department" id="departmentname" required
                        formControlProps={{
                        fullWidth: true
                        }}
                      />
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Charge To" id="chargeto" required formControlProps={{
                        fullWidth: true
                        }}
                      />
                  </GridItem>   
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Date Needed" id="dateneeded" required formControlProps={{
                      fullWidth: true
                        }}
                    inputProps={{                      
                        }}
                      />
                  </GridItem>              
                  	{/* <GridItem xs={12} sm={8} md={8}>
                      <CustomInput labelText="Purpose Of Use" id="purpose" required formControlProps={{
                      fullWidth: true
                        }}
                        multiline={true} rows={3}
                    inputProps={{                      
                        }}
                      />
                  </GridItem>  */}          
            
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Ship Via" id="ship" required formControlProps={{
                        fullWidth: true
                        }}
                      />
                  </GridItem> 
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Status" id="status" required formControlProps={{
                        fullWidth: true
                        }} inputProps={{  
                          value:"Pending Submission",
                          disabled:true                  
                        }}
                      />
                  </GridItem> 
              </Grid>
                  <br />  
                  <div className={classes.tableResponsive}>
                  <Table className={classes.table} style={{width:"100%"}}> 
                    <TableHead  className={classes[tableHeaderColor + "TableHeader"]}>
                      <TableRow>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} >Item No</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td}>Category</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td}>Item Description</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td}>Quantity</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td}>Unit</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableData}
                    </TableBody>
                  </Table> 
                </div>
			          <Button
                  justIcon
                  round
                  color="rose"
                  className={classes.marginRight}
                  onClick={this.increaseRow}
                >
                  <Add className={classes.icons} />
                </Button>     
              </CardBody>
              <CardFooter>
              <Grid container>
                <GridItem xs={12} sm={6} md={2}>
                  <Button color="primary" onClick={this.handleGeneralInfoSave}>Save</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <Button color="info">Submit</Button>
                </GridItem>
              </Grid>
            </CardFooter>
	  		</Card>
      </form>
	</GridItem>
</Grid>
</div>
    );
  }
}

PurchaseRequisition.defaultProps = {
  tableHeaderColor: "gray"
};

PurchaseRequisition.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.loader.loading,
    loader : state.loader
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(PurchaseRequisition));

