import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomSelect from "../../components/CustomInput/CustomSelect.jsx";
import * as userAction from "../../actions/user";
import * as genericActions from '../../actions/generic.js';
import { connect } from 'react-redux';
import Notification from '../Notifications/Index.jsx';

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

class AddUser extends React.Component {
    state = {
        data: {
          type: "staff",
        },
        responseMessage:{},
        optionsRole : [
          ],
          optionsDepartment : [
          ],
          validationState : {
            lastname: '',
            firstname: '',
            email:'',
            eid:''
          }
    }

    
   
    handleChange = event => {
      let data = this.state.data;
      data[[event.target.id]] = event.target.value; 
      this.setState({ 
        data : data,
      });
    };

    handleChangeSelect = (e) => {
      let data = this.state.data;
      data[[e.target.name]] = e.target.value; 
      this.setState({ 
        data : data,
      });
    }
      
    getformData =(e) => {
      e.preventDefault();
      let data = this.state.data;
      userAction.addUser(this.props, data, (json)=>{
        this.setState({responseMessage:json});
      });
    }
    componentDidMount(){
      genericActions.fetchAll("departments", this.props.user.token, (items)=>{
        this.setState({optionsDepartment : items});
      });
      genericActions.fetchAll("roles", this.props.user.token, (items)=>{
        this.setState({optionsRole : items});
      });
    }

    render() {
      const { classes } = this.props;
      return (
      <div>
        <Grid container>
        {(this.state.responseMessage.success === true)?<Notification error={false} message={this.state.responseMessage.message} />: ""}
          <GridItem xs={12} sm={12} md={8}>
          <form>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Add a User</h4>
              </CardHeader>
              <CardBody>
              <Grid container>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Lastname"
                      id="lastname"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                          onChange: this.handleChange
                      }}  
                      error
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Firstname"
                      id="firstname"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                          onChange: this.handleChange
                        }}  
                        success
                    />
                  </GridItem>
                </Grid>
                <Grid container>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                          onChange: this.handleChange
                      }}  
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="EID"
                      id="eid"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                          onChange: this.handleChange
                        }}  
                    />
                  </GridItem>
                </Grid>
                <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomSelect labelText="Department" name="department" required
                  value={this.state.data.department} onChange={(e)=>this.handleChangeSelect(e)}
                  formControlProps={{
                      fullWidth: true
                    }} 
                    inputProps={{
                      margin:"normal",
                    }}       
                  >
                        {this.state.optionsDepartment.map(function(data, key){  return (
                      <MenuItem name="department" key={key} value={data.slug}>{data.name}</MenuItem>
                                    )
                  })}
                    </CustomSelect>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                  <CustomSelect labelText="Role" name="role" required
                    value={this.state.data.role} onChange={(e)=>this.handleChangeSelect(e)}
                  formControlProps={{
                      fullWidth: true
                    }} 
                    inputProps={{
                      margin:"normal",
                    }}       
                  >
                        {this.state.optionsRole.map(function(data, key){  return (
                      <MenuItem name="role" key={key} value={data.slug}>{data.name}</MenuItem>
                                    )
                  })}
                    </CustomSelect>
                  </GridItem>
                </Grid>
                
                
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.getformData}>Submit</Button>
              </CardFooter>
            </Card>
            </form>
          </GridItem>
          
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        user: state.auth.user,
    };
}


export default connect(mapStateToProps)(withStyles(styles)(AddUser));
