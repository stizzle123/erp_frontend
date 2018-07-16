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


class LoginInfo extends React.Component {

  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
      return (
        <div>
          <Grid container>
          <GridItem xs={12} sm={6} md={4}>
          </GridItem>
            <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card>
                  <CardHeader color="primary">
                      <center><h1>Registration</h1></center>
                  </CardHeader>
                  <CardBody>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput labelText="Username" id="username" required formControlProps={{
                              fullWidth: true
                              }}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput labelText="password"  id="password" required formControlProps={{
                              fullWidth: true
                              }}
                            inputProps={{
                            type:"password"
                                }}
                        />
                    </GridItem>
		            <GridItem xs={12} sm={12} md={12}>
                      <CustomInput labelText="Confrim password"  id="cpassword" required formControlProps={{
                              fullWidth: true
                              }}
                            inputProps={{
                            type:"password"
                                }}
                        />
                    </GridItem>
                    </Grid>
                    </CardBody>
                    <CardFooter>
                      <Grid container>
                          <GridItem xs={12} sm={6} md={6}>
                                <Button color="primary">Submit</Button>
                          </GridItem>
                          <GridItem xs={12} sm={6} md={6}>
                            <Link to="/login">Have an Account? Click to Login </Link>
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
export default LoginInfo;
