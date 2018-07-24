import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import BackgroundImage from "../../assets/img/register.jpeg";
import logo from "../../assets/img/reglogo.jpeg";
import CardHeader from "../../components/Card/CardHeader.jsx";
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import MiddleWare from "middleware/api";
import SweetAlert from "react-bootstrap-sweetalert";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import LinearProgress from '@material-ui/core/LinearProgress';
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle.jsx";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,coy_name: '', email:'', password:'', confirm_password:'',showResponse: false, 
      loading:false, showError:false, checked: []
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  hideAlert() {
    this.setState({
      alert: false,
    });
  }

  handleChange = event => {
    console.log(this.state);
    this.setState({ 
      [[event.target.id]] : event.target.value,
    });
  };


  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });


  }
  register = e =>{
    e.preventDefault();
    let middleware = new MiddleWare();
    let data = {};
    data.email = this.state.email;
    data.password = this.state.password;
    data.coy_name = this.state.coy_name;
    data.role = "vendor";
    this.setState({loading:true});
    middleware.makeConnection('/users/register','POST', data).then((response) => {
      if(response.ok && response.status == 200){
       this.setState({alert: true})
      }else{
        //show error registering
        this.setState({showError:true})
      }
      this.setState({loading:false});
    }).then(()=>{

    })
  }
  render() {
    const { classes } = this.props;
  if(this.state.alert){
    return (<SweetAlert
      success
      style={{ display: "block", marginTop: "-100px" }}
      title=" Registration Successful !"
      onConfirm={() => this.hideAlert()}
      onCancel={() => this.hideAlert()}
      confirmBtnCssClass={
        this.props.classes.button + " " + this.props.classes.success
      }
    >
      Registration Successful, kindly check your email for confirmation.
    </SweetAlert>)
  }else 
    return (
		<div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card className={classes.cardSignup}>
                   <center><img src={logo} /></center>
              <h2 className={classes.cardTitle}>New Vendor Registration</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <InfoArea
                      title="How To Register"
                      description="To begin the registration process, kindly fill the form on the right. You will receive an email with a link to verify your account. When you click on the link in the email message, you will be asked to login and complete the registration process. "
                      icon={Group}
                      iconColor="info"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={8} md={6}>
                    <form className={classes.form}  onSubmit={this.register}>
    { (this.state.loading)? <LinearProgress color="secondary" />: "" }
    {(this.state.showError)?<SnackbarContent
                message={
                  'Error encountered while trying to register, our engineers have been notified, kindly try again later'
                }
                close
                color="danger"
              /> : ""}

                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
			id="coy_name" required
                        inputProps={{
			onChange:this.handleChange,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Company Name..."
                        }}
                      />
                      <CustomInput
			id="email" required
                        formControlProps={{
                         fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
			onChange:this.handleChange,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Email..."
                        }}
                      />
                      <CustomInput
			id="password" required
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
				onChange:this.handleChange,
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <LockOutline
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          ),
                          placeholder: "Password..."
                        }}
                      />
                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                     <GridItem xs={12} sm={12} md={12}>
                            <Link to="/login">Already have an account? Click here</Link>
                          </GridItem>
                      <div className={classes.center}>
                        <Button round color="primary" type="submit" onClick={this.register}>
                          Get started
                        </Button>
                      </div>
                    </form>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
		</div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(registerPageStyle)(RegisterPage);
