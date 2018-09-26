import React from 'react';
import Button from "../../components/CustomButtons/Button.jsx";
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import { Link } from 'react-router-dom';
import CardFooter from '../../components/Card/CardFooter.jsx';
import {USER_LOGGED_IN} from '../../actions/index';
import AclAuth from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import Face from "@material-ui/icons/Face";
import LockOutline from "@material-ui/icons/LockOutline";
import classNames from 'classnames';
import logo from "../../assets/img/erplogo.png";
import bg from "assets/img/bg-image.png";
import logo2 from "../../assets/img/footerbar.png";
import { withStyles } from '@material-ui/core/styles';
import Progress from "components/Progress/Progress.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import * as userAction from "../../actions/user"
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";
import StateLoader from "middleware/stateLoader";
import Notification from '../Notifications/Index.jsx'
const stateLoader = new StateLoader();

class ForgetPassword extends React.Component {

  state = {
    data: {email:''},
	 card: {
    minWidth:12,
   },
   requestMessage: {}
  }
  handleChange = event => {
    let data = this.state.data;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data,
    });
  };
  componentDidMount(){
    stateLoader.unsetState();
  }

  getEmail = (e) => {
    e.preventDefault();
    this.props.requestReset(this);
  }

  render() {
	  const { classes } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' }}
    if (this.props.redirectToReferrer === true) {
      //console.log(from);
      return <Redirect to="/dashboard" />
    }
      return (
        <div className={classes.content} style={{backgroundColor:'#082356', backgroundImage:"url(" + bg + ")", backgroundRepeat:"no-repeat"}}>
        <div className={classes.container}>
		      <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={4}>
            <form onSubmit={this.getEmail}>
            <Progress loading={this.state.loading}/>
            {(this.state.requestMessage.success == true)?<Notification error={false} message={this.state.requestMessage.message} />: ""}
              {(this.state.showError)?<SnackbarContent
                message={
                  'Invalid email, please try again'
                }
                close
                color="danger"
              /> : ""}
              <Card>
                <CardHeader color="primary" style={{background: "linear-gradient(60deg, #000, #000)"}}>
                   <center><img src={logo} /></center>
                  
		        </CardHeader>
              <CardBody>
              <Grid container>
              <h4>Forgot Password</h4>
		            <GridItem xs={12} sm={12} md={12}>
                        <CustomInput labelText="Email you registered with" id="email" required formControlProps={{
                            fullWidth: true
                                }} inputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                <Face />
                                </InputAdornment>
                                ),
                                onChange: this.handleChange,
                                    }}/>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={12}>
                          <Button type="submit" color="primary">Submit</Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <Link to="/login" >Login</Link>
                        </GridItem>
						        </Grid>
                  </CardBody>
                  <Progress loading={this.state.loading}/>
					        <img src={logo2} />
					        <CardFooter>
                    <Grid>
						        </Grid>
					        </CardFooter>
				        </Card>
            </form>
          </GridItem>
        </GridContainer>
        </div>
        </div>
      );
    }
}


const style = {
 margin: 15,
};

function mapStateToProps(state) {
  return {
    redirectToReferrer: state.auth.redirectToReferrer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestReset(e){
      let email = e.state.data.email;
      userAction.submitPasswordResetRequest(email, (json)=>{
        e.setState({requestMessage:json});
        console.log(e.state.requestMessage);

      });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(ForgetPassword));
