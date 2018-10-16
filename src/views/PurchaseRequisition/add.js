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
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle.jsx";
import tableStyle from "assets/jss/material-dashboard-pro-react/components/tableStyle.jsx";
import generalStyle from "assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import DatePicker from 'react-datepicker';
import * as genericActions from '../../actions/generic.js';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

const styles = theme => ({
  ...tableStyle,
  ...regularFormsStyle,

  td:{
    border: 'none',
    margin: '0 10px',
    padding: '4px',
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

class PurchaseRequisition extends React.Component {
  state = {
    simpleSelect: "",
    type: '',
    rowArray:[1,2],
    data:{
      type:'',
      requestedby: '',
      eid: "",
      departmentname: "",
      chargeto: "",
      dateneeded: "",
      status: 1
    },
    lineItems:[],
    startDate : moment(),
    departments: [],
  };

	handleChange = event => {
    let data = this.state.data;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data,
    });
	};
  
  handleDatePicker = date =>{
    let data = this.state.data;
    data["dateneeded"] = date;
    this.setState({startDate: date});
    this.setState({data: data});
    this.toggleCalendar();
  }

  toggleCalendar = e=> {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }  

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
      key+1+"_"+category
      key+1+"_"+itemdescription
      key+1+"_"+quantity
      key+1+"_"+unit
    });
  }

  handleDepartmentChange= event =>{
    let data = this.state.data;
    data[[event.target.name]] = event.target.value;
    data['chargeto'] = event.target.value;
    this.setState({ 
      data : data,
    });
  }

  handleSimple = event => {
    let data = this.state.data;
    data['type'] = event.target.value 
    this.setState({ data : data});
  };

  componentDidMount(){
    let data = this.state.data;
    data.requestedby = this.props.user.firstname +" "+ this.props.user.lastname
    data.eid = this.props.user.eid ;

    this.setState({ data : data});
    genericActions.fetchAll("departments", (items)=>{
      this.setState({departments : items});
    });
  }



  render() {
    const { classes, tableHeaderColor } = this.props;
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

    today = mm + '/' + dd + '/' + yyyy;
  	const tableData = this.state.rowArray.map((prop, key)=> {
      return (
        <TableRow key={key}> 
          <TableCell component="th" style={{border: "none", padding: "0", width: "20px", textAlign: "center"}}>               
            
            {key+1}
          </TableCell>
          <TableCell style={generalStyle.removeBorder}>
              <CustomSelect labelText="Select" id={key+1+"_category"} name="category" required
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
                <CustomInput name="itemDescription" id={key+1+"_itemdescription"} onChange={(e)=>this.handleLineItemChange(e)} required formControlProps={{  
                      style: {width:"300px", padding:"0", margin:"0"}              
           
                      }}
                    />
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="quantity" id={key+1+"_quantity"} onChange={(e)=>this.handleLineItemChange(e)} type="number" required formControlProps={{  
                      style: {width:"100px", padding:"0", margin:"0"}              
                    }}
                    />
          </TableCell>
          <TableCell className={classes.td}>
                <CustomInput name="unit" id={key+1+"_unit"} onChange={(e)=>this.handleLineItemChange(e)} type="number" required 
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
	if (this.state.simpleSelect === 'Service'){
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
                <h4 className={classes.cardTitleWhite}>Purchase Requisition</h4>
              </CardHeader>
              <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <p style={generalStyle.text2}>Type of Requisition:</p>
                </GridItem>	
                <GridItem xs={12} sm={12} md={4}>
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
                            value={this.state.data.type}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
                              id: "type"
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
                              value="Service"
                            >
                              Service
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Product"
                            >
                             Product
                            </MenuItem>                                                      
                          </Select>
                        </FormControl>
                  </GridItem>	
                  <GridItem xs={12} sm={12} md={4}/>
                  <GridItem xs={12} sm={12} md={4}style={generalStyle.text2}>
                      Requisition No: 
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <CustomInput labelText="Required By" id="requestedby"
                  formControlProps={{
                      fullWidth: true
                        }}
                    inputProps={{ 
                      disabled: true,
                      value:"Required: "+ this.props.user.firstname +" "+ this.props.user.lastname                 
                        }}
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}> 
                      <CustomInput labelText="Employee ID" id="eid"
                        formControlProps={{
                          fullWidth: true
                        }} inputProps={{
                          disabled: true, value: "Employee ID: " +this.props.user.eid                
                        }}
                      />
                  </GridItem>   
                  <GridItem xs={12} sm={12} md={4}>
                      <CustomInput required formControlProps={{
                        fullWidth: true
                        }}
                        inputProps={{
                          disabled: true,
                          value:today                 
                        }}
                      />
                  </GridItem>                   
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomSelect labelText="Select" id="departmentname" name="departmentname" required
                            onChange={(e)=>this.handleDepartmentChange(e)}
                            formControlProps={{
                              style: {width:"130px",padding:"0", margin:"0"}              
                            }} 
                            value={this.state.data.departmentname}
                            inputProps={{margin:"normal" }}
                          style={{marginTop: "-3px",   borderBottomWidth:" 1px"
                          }}
                            >
                                {this.state.departments.map(option => (
                                  <MenuItem key={option.code} value={option.code} >
                                    {option.name}
                                  </MenuItem>
                                ))}
                      </CustomSelect>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Charge To" id="chargeto" required formControlProps={{
                        fullWidth: true, }} inputProps={{
                            value: this.state.data.chargeto,
                            disabled: true
                        }}
                      />
                  </GridItem>   
                  <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Date Needed" required formControlProps={{
                        fullWidth: true, }} 
                        onFocus={this.toggleCalendar}
                        inputProps={{
                            value: this.state.startDate.format("DD-MM-YYYY"),
                            onFocus: this.toggleCalendar
                        }}
                      />
                      {
                          this.state.isOpen && (
                              <DatePicker
                                  selected={this.state.startDate}
                                  onChange={this.handleDatePicker}
                                  showYearDropdown
                                  dateFormatCalendar="MMMM"
                                  scrollableYearDropdown
                                  yearDropdownItemNumber={15}
                                  withPortal
                                  inline />
                          )
                      }
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
                        }} inputProps={{ onChange:(e)=>{ this.handleChange(e)}}}
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

