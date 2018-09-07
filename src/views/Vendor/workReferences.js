import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormErrors } from './FormErrors';
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import Progress from "../../components/Progress/Progress.jsx";
import * as vendorActions from '../../actions/vendor';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";

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
class WorkReferences extends React.Component {
  state = {
    data:{
      coy_name:'',
      coy_address:'',
      contact_person:'',
      contact_designation:'',
      contact_email:'',
      contact_phone:'',
      name:'',
      phone:'',
      address:'',
      email:''
    },
    formErrors: { 
      coy_name:'', 
      coy_address:'',  
      contact_person:'', 
      contact_designation:'', 
      contact_email:'', 
      contact_phone:'',
      name:'',
      phone:'',
      address:'',
      email:''
    },
    coy_nameValid: false,
    coy_addressValid: false,
    contact_personValid: false,
    contact_designationValid: false,
    contact_emailValid: false,
    contact_phoneValid: false,
    nameValid: false,
    phoneValid: false,
    addressValid: false,
    emailValid: false,
    formValid: false,
    redirect: false
  };
 
  componentDidMount(){
    this.setState({data:this.props.data});
  }

  handleChange = event => {
    let data = this.state.data;
    const name = event.target.id;
    const value = event.target.value;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data,
    }, 
    () => { this.validateField(name, value)});
  };


   validateField(fieldName, value) {
     let fieldValidationErrors = this.state.formErrors;
     let coy_nameValid = this.state.coy_nameValid;
     let coy_addressValid = this.state.addressValid;
     let contact_personValid = this.state.contact_personValid
     let contact_designationValid = this.state.contact_designationValid;
     let contact_emailValid = this.state.contact_emailValid;
     let contact_phoneValid = this.state.contact_phoneValid;
     let nameValid = this.state.nameValid;
     let phoneValid = this.state.phoneValid;
     let addressValid = this.state.addressValid;
     let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'coy_name':
      coy_nameValid = value.length >= 3;
      fieldValidationErrors.coy_name = coy_nameValid ? '': 'is invalid';
      break;
      case 'coy_address':
      coy_addressValid =value.length >= 12;
      fieldValidationErrors.coy_address = coy_addressValid  ? '': 'is invalid';
      break;
      case 'contact_person':
      contact_personValid =value.length >= 3;
      fieldValidationErrors.contact_person = contact_personValid  ? '': ' is invalid';
      break;
      case 'contact_designation':
      contact_designationValid = value.length >= 2;
      fieldValidationErrors.contact_designation = contact_designationValid  ? '': ' is invalid';
      break;
      case 'contact_email':
      contact_emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.contact_email = contact_emailValid  ? '': ' is invalid';
      break;
      case 'contact_phone':
      contact_phoneValid = value.length > 8 && value.length < 12;
      fieldValidationErrors.contact_phone = contact_phoneValid  ? '': ' is invalid';
      break;
      case 'name':
      nameValid = value.match(/^[a-zA-Z]+$/);
      fieldValidationErrors.name = nameValid  ? '': ' must be letters only';
      break;
      case 'phone':
      phoneValid =  value.length > 8 && value.length < 12;
      fieldValidationErrors.phone = phoneValid ? '': ' is invalid';
      break;
      case 'address':
      addressValid =  value.length >= 12;
      fieldValidationErrors.address = addressValid ? '': ' is invalid';
      break;
      case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  coy_nameValid: coy_nameValid,
                  coy_addressValid: coy_addressValid,
                  contact_personValid: contact_personValid,
                  contact_designationValid: contact_designationValid,
                  contact_emailValid: contact_emailValid,
                  contact_phoneValid: contact_phoneValid,
                  nameValid: nameValid,
                  phoneValid: phoneValid,
                  addressValid: addressValid,
                  emailValid: emailValid,
                  
                }, this.validateForm);
}

  validateForm() {
  this.setState({formValid: this.state.coy_nameValid 
                && this.state.coy_addressValid 
                && this.state.contact_personValid 
                && this.state.contact_designationValid
                && this.state.contact_emailValid
                && this.state.contact_phoneValid
                && this.state.nameValid
                && this.state.addressValid
                && this.state.emailValid
                && this.state.phoneValid
                });
}

  handleSave = e=>{
    e.preventDefault();
    this.props.updateVendor(this); 
  }

  submitDetails = e =>{
    e.preventDefault();
    this.props.vendor;
    //this.props.submitVendor(this);
  }

  render() {
    const { classes } = this.props;
    return  (this.state.redirect)? 
    <Redirect to="/dashboard" /> 
    : 
    (
      <Grid container>
      <GridItem xs={12} sm={12} md={12}>
      <form className={classes.container} noValidate autoComplete="off">
      <div className="">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <Progress loading={this.state.loading}/>
        <Card>
            <CardBody>
            <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Company Name" id="coy_name" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.coy_name
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Company Address" id="coy_address" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.coy_address
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Contact Person" id="contact_person" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.contact_person
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Contact Designation" id="contact_designation" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.contact_designation
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Contact Email" id="contact_email" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.contact_email
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Contact Phone" id="contact_phone" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.contact_phone
                      }}
                    />
                </GridItem>
            </Grid>
            </CardBody>
                <h4 style={{marginLeft:"20px"}}>Individual Reference.</h4>
            <CardBody>
            <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Name" id="name" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.name
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Address" id="address" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.address
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Email" id="email" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.email
                      }}
                    />
                </GridItem>    
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput labelText="Phone" id="phone" required
                      formControlProps={{
                        fullWidth: true
                      }} inputProps={{
                        onChange: this.handleChange,
                        value: this.state.data.phone
                      }}
                    />
                </GridItem>
              </Grid>
              </CardBody>     
              <CardFooter>
              <Grid container>
                <GridItem xs={12} sm={6} md={2}>
                  <Button color="primary" onClick={this.handleSave}>Save</Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={2}>
                  <Button color="info" disabled={!this.state.formValid} onClick={this.submitDetails} >Submit</Button>
                </GridItem>
              </Grid>
            </CardFooter>
            </Card>
            </form>
          </GridItem>
        </Grid>
    )
  }
}

WorkReferences.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: (typeof(state.vendor.work_reference) != 'undefined')?state.vendor.work_reference: {},
    user: state.auth.user,
    vendor: state.vendor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateVendor(e){
      let d = {};
      d.work_reference = e.state.data
      vendorActions.submitVendorDetailsViaUserId(dispatch, e.props.user._id, d);
    },
    submitVendor(e){
      let d = {};
      d.work_reference = e.state.data;
      d.status = "PENDING";
      vendorActions.submitVendorDetailsViaUserId(dispatch, e.props.user._id, d);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(WorkReferences));
