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
import {USER_LOGGED_IN} from '../../actions/index';
import AclAuth from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


class LoginInfo extends React.Component {

  state = {
    data: {username:'', password:''}
  }
  handleChange = event => {
    let data = this.state.data;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data,
    });
  };

  login = (e) => {
    AclAuth.authenticate(this.state.data.username, this.state.data.password, (user) => {
      this.props.dispatch({type: USER_LOGGED_IN, user: user });
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' }}
    if (this.props.redirectToReferrer === true) {
      //console.log(from);
      return <Redirect to="/dashboard" />
    }
      return (
        <div>
          <Grid container>
          <GridItem xs={12} sm={6} md={4}>
          </GridItem>
            <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card>
                  <CardHeader color="primary">
                      <center><h1>Login</h1></center>
                  </CardHeader>
                  <CardBody>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput labelText="Username" id="username" required formControlProps={{
                              fullWidth: true
                              }} inputProps={{onChange: this.handleChange,}}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput labelText="Password"  id="password" required formControlProps={{
                              fullWidth: true
                              }}
                            inputProps={{
                            type:"password",
                            onChange: this.handleChange,
                                }}
                        />
                    </GridItem>
                    </Grid>
                    </CardBody>
                    <CardFooter>
                      <Grid container>
                          <GridItem xs={12} sm={6} md={6}>
                                <Button color="primary" onClick={this.login}>Login</Button>
                          </GridItem>
                          <GridItem xs={12} sm={6} md={6}>
                            <Link to="/register">Are you a new Vendor? Click to create and account </Link>
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


const style = {
 margin: 15,
};

function mapStateToProps(state) {
  return {
    redirectToReferrer: state.auth.redirectToReferrer
  };
}
export default connect(mapStateToProps, null)(LoginInfo);
