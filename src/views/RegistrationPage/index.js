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
import MiddleWare from "middleware/api";


class Registration extends React.Component {

  state = {
    coy_name: '', email:'', password:'', confirm_password:''
  }

  handleChange = event => {
    console.log(this.state);
    this.setState({ 
      [[event.target.id]] : event.target.value,
    });
  };

  register = e =>{
    e.preventDefault();
    let middleware = new MiddleWare();
    let data = {};
    data.email = this.state.email;
    data.password = this.state.password;
    data.coy_name = this.state.coy_name;
    data.role = "vendor";
    console.log(data);
    middleware.makeConnection('/users/register','POST', data).then((response) => {
      if(response.ok && response.status == 200){
       return response.json();
      }else{
        //show error registering
      }
    }).then(()=>{

    })
  }

render() {
    return (
      <div>
          <GridItem xs={12} sm={6} md={6}>
	    <form  onSubmit={this.register}>
		 <Card>
              <CardHeader color="primary">
                <center><h1>Registration</h1></center>
              </CardHeader>
		      <CardBody>
          <CustomInput labelText="Company Name" id="coy_name" required formControlProps={{
                    fullWidth: true
                    }} inputProps={{onChange:this.handleChange}}
		    />
		     <CustomInput labelText="Email" id="email" required formControlProps={{
                    fullWidth: true
                    }} inputProps={{onChange:this.handleChange}}
		     />
           <br/>
              <CustomInput labelText="Password"  id="password" required formControlProps={{fullWidth: true}}
		            inputProps={{type:"password",onChange:this.handleChange}}
		    />
		    <CustomInput labelText="Confirm password"  id="confirm_password" required formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{type:"password",onChange:this.handleChange}}
		    />
             <br/><br/>
             <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                      <center><Button  type="submit" color="info" onClick={this.register}>Sign Up</Button></center>
		<br/>
                </GridItem>
              </Grid>
		</CardBody>
		</Card>
		</form>
		 </GridItem>

      </div>
    );
  }
}


const style = {
 margin: 15,
};
export default Registration;
