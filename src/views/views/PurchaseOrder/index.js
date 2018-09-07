import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountBalance from '@material-ui/icons/AccountBalanceWallet';
import Table from "components/Table/Table.jsx";
import Datetime from "react-datetime";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CardIcon from "components/Card/CardIcon.jsx";
import CheckBoxIcon from '@material-ui/icons/CheckBox';


import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";


class PurchaseOrder extends React.Component {
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
                    <CustomInput id="Ref. Part No." required formControlProps={{                    
                    }}
                  />,			      
                    <CustomInput id="Product/Service Description" required formControlProps={{                    
                    }}
                  />,
                    <CustomInput id="Quality" required formControlProps={{                    
                    }}
                  />,
                    <CustomInput id="Unit Price" required formControlProps={{                    
                    }}
                  />,
                    <CustomInput id="Extended Cost" required formControlProps={{                    
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
          <GridItem xs={12} sm={12} md={12}>
          <form className={classes.container} noValidate autoComplete="off">
            <Card>
              <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <AccountBalance />
              </CardIcon>
              <h3 className={classes.cardIconTitle}>Purchase Order</h3>
            </CardHeader>
              <CardBody>
              <Grid container>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Purchase Order" id="purchaseorder" required
                    formControlProps={{
                     fullWidth: true
                    }}
                  />
                </GridItem>
		        <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Order Date"  id="orderdate" required formControlProps={{
                    fullWidth: true
                    }}
		               inputProps={{
		               type: "date",
		               helpertext: "Order Date"

		            }}

                  />
                </GridItem>
		       <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Delivery Date" id="deliverydate" required formControlProps={{
                   fullWidth: true
                    }}
		               inputProps={{
		               type: "date",
		            }}
 />
                </GridItem>
		        <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Credit Terms" id="credit" required formControlProps={{
		          fullWidth: true
                    }}
		              inputProps={{
		              formhelpertext: "Full Vendor Address",
		              multiline: true,
                      rows: 2
		            }}
                  />
                </GridItem>
		         <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Purpose of use" id="purpose" required formControlProps={{
		          fullWidth: true
                    }}
		              inputProps={{
		              formhelpertext: "Full Vendor Address",
		              multiline: true,
                      rows: 2
		            }}
                  />
                </GridItem>
		       <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="To" id="to" required formControlProps={{
		         fullWidth: true
                    }}
		              inputProps={{
		              helpertext: "Full Vendor Address",
		              multiline: true,
                      rows: 2
		            }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Ship Address" id="shipto" required formControlProps={{
		          fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Amount" id="amount" required formControlProps={{
		         fullWidth: true
                   }}
		/>
                </GridItem>
                  <br />              
             <Table
                tableHead={[
                  "Item No.",
                  "Ref. Part No.",
                  "Product/Service Description",
				  "Quantity",
                  "Unit Price",
                  "Extended Cost",
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
              </Grid>
              </CardBody>
              <CardFooter>

              <Grid container>
                <GridItem xs={12} sm={12} md={2}>
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

PurchaseOrder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(extendedFormsStyle)(PurchaseOrder);
