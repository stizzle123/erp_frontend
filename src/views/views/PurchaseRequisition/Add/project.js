import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from "react-table";
import Datetime from "react-datetime";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import Table from "components/Table/Table.jsx";
import CardIcon from "components/Card/CardIcon.jsx";


// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";


import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";


class Project extends React.Component {
  state = {
    rowArray:[]
  };
	handleChange = name => event => {
		this.setState({ [name]: event.target.checked });	

	};
	
	increaseRow = event=>{
		let rowArray = this.state.rowArray;
		rowArray.push(Datetime.now);
		this.setState({rowArray:rowArray})
	}

	removeRow = i =>event =>{
		let rowArray = this.state.rowArray;
		rowArray.splice(i,1);
		this.setState({rowArray:rowArray})
	}
	
  render() {
    const { classes } = this.props;
	  
	const tableData = this.state.rowArray.map((prop, key)=> {
		return (
	    [                   
                  (key+1), 
                    <CustomInput id="Product/Service Description" required formControlProps={{                    
                    }}
                  />,
                    <CustomInput id="Make/Model" required formControlProps={{                    
                    }}
                  />,
                    <CustomInput id="Quantity" required formControlProps={{                    
                    }}
                  />,
                    <CustomInput id="Unit of Measurement" required formControlProps={{                    
                    }}
                  />,			      
                    <CustomInput id="Budgeted Amount" required formControlProps={{                    
                    }}
                  />,
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
                  ] 
			)}
	);
	  
    return (
	<div>
	<Grid container>
		<GridItem xs={12} sm={6} md={6}>
                  <CustomInput labelText="Requested By" id="requestedby" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
          </GridItem> 
		 <GridItem xs={12} sm={6} md={6}>
                  <CustomInput labelText="Date" id="date" required formControlProps={{
                    fullWidth: true,
		             
                    }}
		               inputProps={{
		                type:"Date"		                	                                     
		            }}
                  />
                </GridItem>
		 <GridItem xs={12} sm={12} md={12}>
                  <CustomInput labelText="Project Name" id="projectname" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
          </GridItem> 
          <GridItem xs={12} sm={6} md={6}>
                  <CustomInput labelText="Vendor Address" id="vendoraddress" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
          </GridItem>           
           <GridItem xs={12} sm={6} md={6}>
                  <CustomInput labelText="Vendor Name" id="vendorname" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Vendor Contact" id="vendorcontact" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
             </GridItem>                        
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Phone" id="phone" required formControlProps={{
                    fullWidth: true
                    }}
		           inputProps={{                     
                    }}
                  />
                </GridItem>	         	
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Date Needed" id="daten" required formControlProps={{
                    fullWidth: true,
		             
                    }}
		               inputProps={{
		                type:"Date"		                	                                     
		            }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Shippig Price" id="shippigprice" required formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>		         
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Transit Time" id="transittime" required formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>
		        <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Technical Specification" id="technicalspecification" required formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>
		     <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              color="primary"
            />
          }
          label="Shiiping by Air Freight"
            />
           <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
                />
                 }
          label="Shiiping by Sea Freight"
              />			  
              </Grid> 
              <br />              
             <Table
                tableHead={[
                  "#",
                  "Product/Service Description",
                  "Make/Model",
				  "Quantity",
                  "Unit of Measurement",
                  "Budgeted Amount",
				  "Actions"
                ]}
                tableData={tableData}
                customCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}  
             customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}
                customHeadClassesForCells={[0, 4, 5]}
              />
			 <Button
                  justIcon
                  round
                  color="rose"
                  className={classes.marginRight}
                  onClick={this.increaseRow}
                >
                  <Add className={classes.icons} />
                </Button>               
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
       </div>
    );
  }
}

Project .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(extendedFormsStyle)(Project);
