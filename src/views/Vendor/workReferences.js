import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import Progress from "../../components/Progress/Progress.jsx";
import MiddleWare from "../../middleware/api";
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
    redirect: false
  };
 
  componentDidMount(){
    this.setState({data:this.props.data});
  }

  handleChange = event => {
    let data = this.state.data;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data,
    });
  };

  submitDetails = e =>{
    let data = {};
    let middleware = new MiddleWare(this.props.user.token);
    data.payload = { work_reference:this.state.data, status:"PENDING"};
    data.key = "user_id";
    data.value = this.props.user.id;
    console.log(data);
    middleware.makeConnection('/vendors','PUT', data).then(
      (result)=>{
        if(result.ok && result.statusText == "OK" && result.status == 200 ) {
          this.setState({loading:false, redirect:true});
          console.log(result);
          console.log(this.state);
        }  
      }
    ).catch((e)=>{
      console.log(e);
    })
  }

  handleSave = e=>{
    e.preventDefault();
    let data = {};
    let middleware = new MiddleWare();
    data.payload = { work_reference:this.state.data};
    data.key = "user_id";
    data.value = this.props.user.id;
    middleware.makeConnection('/vendors','PUT', data).then(
      (result)=>{
        console.log(result);
        if(result.ok && result.statusText == "OK" && result.status == 200 ) {
          
        }
        this.setState({loading:false});
      }
    ).catch((e)=>{
      console.log(e);
    })
    
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
        <Progress loading={this.state.loading}/>
        <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Corporate Reference.</h4>
            </CardHeader>
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
            <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Individual Reference.</h4>
            </CardHeader>
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
                  <Button color="info" onClick={this.submitDetails}>Submit</Button>
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
    data: (typeof(state.vendor.datum.work_reference) != 'undefined')?state.vendor.datum.work_reference: {},
    user: state.auth.user
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(WorkReferences));