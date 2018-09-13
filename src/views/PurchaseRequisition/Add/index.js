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
import CardIcon from "components/Card/CardIcon.jsx";
import CreditCard from '@material-ui/icons/CreditCard';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomInput/CustomSelect.jsx";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import classes from "classnames";
import Table from "components/Table/Table.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle.jsx";

const styles = theme => ({

});


const categories = [
  {value: '0', label:'Select Category',},
  {value: '1',label: 'Category 1',},
  {value: '2',label: 'Category 2',},
  {value: '3',label: 'Category 3',}
];

class PurchaseRequisition extends React.Component {
  state = {
    simpleSelect: "",
    type: '',
    rowArray:[]
  };

	handleChange = name => event => {
		this.setState({ [name]: event.target.checked });	

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
    
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
  	const tableData = this.state.rowArray.map((prop, key)=> {
      return (
        [                   
                    (key+1), 
                    <CustomSelect labelText="Category" id={key+1} name="category" required
                     onChange={(e)=>this.handleLineItemChange(e)}
                    formControlProps={{
                      fullWidth: true
                    }} 
                    inputProps={{margin:"normal"}}
                    >
                        {categories.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </CustomSelect>,
                      <CustomInput name="itemDescription" id={key+1} onChange={(e)=>this.handleLineItemChange(e)} required formControlProps={{                    
                      }}
                    />,
                      <CustomInput name="quantity" id={key+1} onChange={(e)=>this.handleLineItemChange(e)} type="number" required formControlProps={{  
                        style: {width:"20px"}                  
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
              <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <CreditCard />
              </CardIcon>
              <h3 className={classes.cardIconTitle}>Purchase Requisition</h3>
            </CardHeader>
              <CardBody>
              <Grid container>
                  <GridItem xs={12} sm={6} md={5} lg={5}>
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
                  <GridItem xs={12} sm={8} md={8}>
                      <CustomInput labelText="Purpose Of Use" id="purpose" required formControlProps={{
                      fullWidth: true
                        }}
                        multiline={true} rows={3}
                    inputProps={{                      
                        }}
                      />
                  </GridItem>            
                  	{/* 
                  <GridItem xs={12} sm={4} md={4}>
                      <CustomInput labelText="Ship Via" id="ship" required formControlProps={{
                        fullWidth: true
                        }}
                      />
                  </GridItem> */}
              </Grid>
                  <br />  
                  <Table
                    tableHead={[
                      "#",
                      "Category",
                      "Item Description",
                      "Quantity",
                      "Actions"
                    ]}
                    tableData={tableData}
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

PurchaseRequisition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(regularFormsStyle)(PurchaseRequisition);

