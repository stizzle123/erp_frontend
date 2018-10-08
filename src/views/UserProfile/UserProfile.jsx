import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import avatar from "../../assets/img/faces/marc.jpg";
import {connect} from 'react-redux';
import * as userAction from "../../actions/user"

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


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {
          email: props.user.email,
          id: props.user._id,
          firstname: props.user.firstname,
          lastname: props.user.lastname
        
        },
        responseMessage: ''
      }
    }
  componentDidMount(){
    console.log(this.props.user)
  }

  handleChange = event => {
    let data = this.state.data;
    const name = event.target.id;
    const value = event.target.value;
    data[[event.target.id]] = event.target.value; 
    this.setState({ 
      data : data
    }) 
  };

  handleSave = e=>{
    e.preventDefault();
    console.log(this.state.data)
    this.props.sendUserData(this);
}
//function UserProfile(props) {
  render() {
    const { classes, data } = this.props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Lastname"
                    id="lastname"
                    formControlProps={{
                      fullWidth: true
                    }}inputProps={{
                      onChange: this.handleChange,
                      value: this.state.data.lastname
                    }}
                  />
                  
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="First Name"
                    id="firstname"
                    formControlProps={{
                      fullWidth: true
                    }}inputProps={{
                      onChange: this.handleChange,
                      value: this.state.data.firstname
                    }}
                  />
                </GridItem> 
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}inputProps={{
                      onChange: this.handleChange,
                      value: this.state.data.email
                    }}
                  />
                </GridItem> 
              </Grid>
              <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="EID"
                    id="eid"
                    formControlProps={{
                      fullWidth: true
                    }}inputProps={{
                      onChange: this.handleChange,
                      value: this.state.data.eid
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Phone Number"
                    id="phone"
                    formControlProps={{
                      fullWidth: true
                    }}inputProps={{
                      onChange: this.handleChange,
                      value: this.state.data.phone
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}inputProps={{
                      onChange: this.handleChange,
                      value: this.state.data.city
                    }}
                  />
                  </GridItem>
              </Grid>
              </form>               
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={this.handleSave}>Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendUserData(e){
      let data = e.state.data;
      userAction.updateProfile(data, (json)=>{
        e.setState({responseMessage:json});
        console.log(e.state.responseMessage);

      });
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserProfile));
