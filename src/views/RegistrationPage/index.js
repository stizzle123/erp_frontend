import React from 'react';
import Button from "../../components/CustomButtons/Button.jsx";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import { Link } from 'react-router-dom';
import CardFooter from '../../components/Card/CardFooter.jsx';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Timeline from "@material-ui/icons/Timeline";
import GridContainer from "components/Grid/GridContainer.jsx";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import logo from "../../assets/img/reglogo.png";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import AddAlert from "@material-ui/icons/AddAlert";







class LoginInfo extends React.Component {

  state = {
	checkedA: false,
    redirectToReferrer: false
  }
handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
	  const { classes } = this.props;
      return (
        <div>
          <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
		  <Card>
		  <CardHeader>
		  <center><img src={logo} /></center>
		  </CardHeader>
		  <CardBody>
		  <GridContainer>
		  <GridItem xs={12} sm={12} md={5}>
		  <br />
		  <h4> How To Register </h4>
		  <br />
		  <SnackbarContent
		          message={
                  "To begin the registration process, kindly fill the form on the right. You will receive an email with a link to verify your account.     When you click on the link in the email the message, you will be assked to login and complete the registration process"
		  }
		          color="rose"
                  icon={AddAlert}
		          />
		  </GridItem>
		  <GridItem xs={12} sm={8} md={6}>
                    <div>
                      <h4>New Vendor Registration</h4>
                    </div>
                    <form>

                      <CustomInput
                        formControlProps={{
                          fullWidth: true,

                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start">
                              <Face />
                            </InputAdornment>
                          ),
                          placeholder: "Company Name..."
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,

                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"

                            >
                              <Email />
                            </InputAdornment>
                          ),
                          placeholder: "Email..."
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,

                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start">
                              <LockOutline />
                            </InputAdornment>
                          ),
                          placeholder: "Password...",
						  type:"password"
                        }}
                      />
                      <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              color="primary"
            />
}
          label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
        />                <br />
                            <Link to="/login">Already have an account? Click here</Link>

                      <div>
                        <Button round color="primary">
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


const style = {
 margin: 15,
};
export default LoginInfo;
