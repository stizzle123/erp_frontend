import React from 'react';
import Button from "../../components/CustomButtons/Button.jsx";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
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
import logo2 from "../../assets/img/footerbar.png";
import { withStyles } from '@material-ui/core/styles';
import GridContainer from "../../components/Grid/GridContainer.jsx";


class LoginInfo extends React.Component {

  state = {
    data: {username:'', password:''},
	 card: {
    minWidth:12,
	 }
  }
  handleChange = event => {
    let data = this.state.data;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data,
    });
  };

  login = (e) => {
    e.preventDefault();
    AclAuth.authenticate(this.state.data.username, this.state.data.password, (user,token) => {
      let u = user;
      u.token = token;
      this.props.dispatch({type: USER_LOGGED_IN, user: u});
    })
  }

  render() {
	  const { classes } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' }}
    if (this.props.redirectToReferrer === true) {
      //console.log(from);
      return <Redirect to="/dashboard" />
    }
      return (
		  <GridContainer>
          <GridItem xs={12} sm={8} md={4}>
          </GridItem>
            <GridItem xs={12} sm={8} md={4}>
            <form onSubmit={this.login}>
              <Card>
                  <CardHeader color="primary">
                   <center><img src={logo} /></center>
		           </CardHeader>
                  <CardBody>
		          <GridItem>
                  <CustomInput labelText="Username" id="username" required formControlProps={{
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
                    <GridItem>
                      <CustomInput labelText="Password"  id="password" required formControlProps={{
                             fullWidth: true
                              }}
                            inputProps={{
						    endAdornment: (
                              <InputAdornment position="end">
                              <LockOutline />
                              </InputAdornment>
                               ),
                            type:"password",
                            onChange: this.handleChange,
                                }}
                        />
                    </GridItem>

                    </CardBody>
                    <Grid container>
                          <GridItem xs={12} sm={6} md={12}>
                                <Button type="submit" color="primary" onClick={this.login}>Login</Button>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <Link to="/register">Are you a new Vendor? Click to create and account </Link>
                          </GridItem>
						 </Grid>
                     	<CardFooter />
					<img src={logo2} />
					<GridItem xs={12} sm={12} md={12}>
					   <CardFooter />
				    <center><Link to="">Forgot Password?</Link></center>
					<CardFooter />
                     </GridItem>
				 </Card>
            </form>
          </GridItem>
        </GridContainer>
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
export default connect(mapStateToProps, null)(LoginInfo);