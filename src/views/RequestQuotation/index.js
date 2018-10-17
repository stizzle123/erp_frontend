import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomInput/CustomSelect.jsx";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Add from "@material-ui/icons/Add";
import Note from '@material-ui/icons/Message';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle.jsx";
import tableStyle from "assets/jss/material-dashboard-pro-react/components/tableStyle.jsx";
import generalStyle from "assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import { getCurves } from 'crypto';

const styles = theme => ({
  ...tableStyle,
  ...regularFormsStyle,

  td:{
    border: 'none',
    margin: '0 10px',
    padding: '0 10px',
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

class RequestQuotation extends React.Component {
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
    let lineItems = this.state.lineItems;
    this.state.rowArray.map((prop, key)=> {

    });
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount(){
    let tableArray = this.state.rowArray;
    if( tableArray <= 2 ){
      this.increaseRow();
      this.increaseRow()

    }
  }
  render() {
    const { classes, tableHeaderColor } = this.props;
    const today = new Date();
  	const tableData = this.state.rowArray.map((prop, key)=> {
      return (
        <TableRow key={key}> 
          <TableCell component="th" style={{border: "none", padding: "0", width: "20px", textAlign: "center"}}>               
            
            {key+1}
          </TableCell>
          <TableCell style={generalStyle.removeBorder}>
              <CustomSelect labelText="Select" id={key+1+"category"} name="category" required
                     onChange={(e)=>this.handleLineItemChange(e)}
                    formControlProps={{
                      style: {width:"130px",padding:"0", margin:"0"}              
                    }} 
                    inputProps={{margin:"normal" 
                   }}
                   style={{marginTop: "-3px",   borderBottomWidth:" 1px"
                  }}
                    >
                        {categories.map(option => (
                          <MenuItem key={option.value} value={option.value} >
                            {option.label}
                          </MenuItem>
                        ))}
              </CustomSelect>
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="itemDescription" id={key+1+"itemdescription"} onChange={(e)=>this.handleLineItemChange(e)} required formControlProps={{  
                      style: {width:"300px", padding:"0", margin:"0"}              
           
                      }}
                    />
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="quantity" id={key+1+"quantity"} onChange={(e)=>this.handleLineItemChange(e)} type="number" required formControlProps={{  
                      style: {width:"100px", padding:"0", margin:"0"}              
                    }}
                    />
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="unit" id={key+1+"unit"} onChange={(e)=>this.handleLineItemChange(e)} type="number" required 
                formControlProps={{  
                      style: {width:"100px", padding:"0", margin:"0"}              
                    }}
                  />
                  
          </TableCell>      
        </TableRow>
        )}
    );
    let showVendorsName = false; 
	  console.log(this.state);
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
          <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Request  For Quotation</h4>

              </CardHeader>
              <CardBody>
              <Grid container>
                  <GridItem xs={12} sm={12} md={8}/>
                  <GridItem xs={12} sm={12} md={4}style={generalStyle.text2}>
                      Requisition No: 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <CustomInput id="requestedby"
                  formControlProps={{
                      fullWidth: true
                        }}
                    inputProps={{ 
                      disabled: true,
                      value:"Required By: "                  
                        }}
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}> 
                      <CustomInput  id="employeeid"
                        formControlProps={{
                          fullWidth: true
                        }} inputProps={{
                          disabled: true, value: "Employee ID: "                 
                        }}
                      />
                  </GridItem>   
                  <GridItem xs={12} sm={12} md={4}>
                      <CustomInput labelText="Date" id="date" required formControlProps={{
                        fullWidth: true,
                        }}
                        inputProps={{
                          type: "date",
                          style: {textAlign:"right"}              
                            }}
                      />
                  </GridItem>                   
                  <GridItem xs={12} sm={4} md={4} style={generalStyle.positionRelative}>
                      <CustomInput labelText="To" id="to" required
                        formControlProps={{
                        fullWidth: true
                        }}

                      />
                  <Note  style={generalStyle.positionIcon}/>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Due Date" id="duedate" required formControlProps={{
                        fullWidth: true
                        }}
                        inputProps={{
                          type: "date",
                            }}
                      />
                  </GridItem>   
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Status" id="status" required formControlProps={{
                      fullWidth: true
                        }}
        
                      />
                  </GridItem>              
                  
              </Grid>
                  <br />  
                  <div style={generalStyle.aboveTable}>
                  <div style={generalStyle.aboveTableIcon}><span><Checkbox  value="Budgetary" />Budgetary</span>
                  <span><Checkbox value="Extra Budgetary" />Extra Budgetary</span>
                  </div>
                  

                  </div>
                  <div className={classes.tableResponsive} style ={{ overflowX: "scroll"}}>
                  <Table className={classes.table} > 
                    <TableHead  className={classes[tableHeaderColor + "TableHeader"]} style={{marginTop:"10px", color:"#1b4aa5", borderBottomColor:"#333",borderBottomStyle:"solid", borderBottomWidth:"1px"}}>
                      <TableRow>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5", width:"55px"}}>Item No</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5"}}>Category</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5"}}>Item Description</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5", width: "70px"}}>Quantity</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5"}}>Unit</TableCell>
                      </TableRow>
                    </TableHead>
                    <div ></div>

                    <TableBody>
                      {tableData}
                    </TableBody>
                  </Table> 
                </div>
                <div style={generalStyle.mt3}>
               <span>Add New Line</span> 
			          <Button
                  justIcon
                  round
                  color="twitter"
                  className={classes.marginRight}
                  onClick={this.increaseRow}
                >
                  <Add className={classes.icons} />
                </Button>
                </div>
              </CardBody>
              <CardFooter>
              <Grid container>
                <GridItem xs={12} sm={6} md={2} additionalclass={classes.removeDivPadding} >
                  <Button color="primary" onClick={this.handleGeneralInfoSave}>Save</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <Button color="yellowgreen">Submit</Button>
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
RequestQuotation.defaultProps = {
  tableHeaderColor: "gray"
};

RequestQuotation.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.loader.loading,
    loader : state.loader
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(RequestQuotation));

