import React from 'react';
import PropTypes from 'prop-types';
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
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from "../../components/CustomButtons/Button.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  oneThird: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  twoThird: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 600,
  },
  menu: {
    width: 200,
  },
});

const biz_types = [
  {value: '1',label: 'Normal Requisition',},
  {value: '2',label: 'Weekly Requisition',},
  {value: '3',label: 'Open Market Requisition',},
  {value:'4', label: 'Project Requisition',}
];

class BusinessInfo extends React.Component {
  state = {checkedA: false,
	checkedB: false,
    biz_type: '',
  };
handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleBizTypeChange = name=> event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
	<div>
	<Grid container>
    <GridItem xs={12} sm={12} md={12}>
      <form className={classes.container} noValidate autoComplete="off">
	 <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Choose Project Requisition</h4>
              </CardHeader>
              <CardBody>
	 <Grid container>
         <TextField
          id="business_nature"
          select
          required
          label="Select"
          className={classes.oneThird}
          value={this.state.biz_type}
          onChange={this.handleBizTypeChange('biz_type')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}

        >
          {biz_types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
		  </TextField>

          <GridItem xs={12} sm={8} md={8}>
                  <CustomInput labelText="Vendor Address" id="vendoraddress" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>

           <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Project Name" id="projectname" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>

           <GridItem xs={12} sm={4} md={4}>
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
                  <CustomInput labelText="Requested By" id="requestedby" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>

           <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Shipping Price" id="price" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>

           <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Transit Time" id="time" required
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>

           <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Technical Specification" id="specification" required
                    formControlProps={{
                    fullWidth: true
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
                  <CustomInput labelText="Vendor Name" id="vendorname" required formControlProps={{
		           fullWidth: true
                   }}
		/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Purpose Of Use" id="Purpose" required formControlProps={{
                   fullWidth: true
                    }}
		             inputProps={{
                      multiline: true,
                      rows: 2
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Vendor Address" id="vendoraddress" required formControlProps={{
                   fullWidth: true
		           }}
		              inputProps={{
		              FormHelperText: "Full Vendor Address",
		              multiline: true,
                      rows: 2
		            }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Vendor Contact" id="vendorcontact" required formControlProps={{
                    fullWidth: true
                    }}
		               inputProps={{
		              multiline: true,
                      rows: 2
		            }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Phone" id="phone" required formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Date" id="date" required formControlProps={{
                    fullWidth: true
                    }}
		               inputProps={{
		               type: "date",

		            }}

                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <CustomInput labelText="Ship Via" id="ship" required formControlProps={{
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
          label="Budgetary"
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
          label="Extra Budgetary"
        />
              </Grid>
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

BusinessInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessInfo);
