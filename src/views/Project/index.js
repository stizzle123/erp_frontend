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
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class Project extends React.Component {
  state = {checkedA: false,
	checkedB: false,
  };

handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
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
                <h4 className={classes.cardTitleWhite}>Add Project Purchase Requisition</h4>
              </CardHeader>
              <CardBody>
              <Grid container>
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

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);
