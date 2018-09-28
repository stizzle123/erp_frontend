import React from 'react';
import PropTypes from 'prop-types';
import Inflection from 'inflection';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CircularProgress from '@material-ui/core/CircularProgress';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import * as genericActions from 'actions/generic.js';

import purple from '@material-ui/core/colors/purple';
import {connect} from 'react-redux';

const styles = {
    cardIconTitle: {
      ...cardTitle,
      marginTop: "15px",
      marginBottom: "0px"
    }
  };

class AddCrud extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            departments : ['code'],
            data:{
                name:'',
            }
        }

    }

    handleChange = e => {
        {{debugger}}
        let data = this.state.data;
        data[[e.target.id]] = e.target.value; 
        this.setState({ 
          data : data,
        });
    }

    handleSubmit = e => {
        {{debugger}}
        genericActions.saveItem(this.props.match.params.type, this.state.data, function(isOk){
            if(isOk) this.setState({data: {}});
            else alert("Couldn't submit an error occur");
        });
    }

    componentDidMount(){
        this.setState({ type: this.props.match.params.type });
    }

    render() {
      const { classes, data } = this.props;
      let field = this.state[this.props.match.params.type];
      let additionalFields = field.map((f, key)=>{
          return (
            <GridItem xs={12} sm={12} md={6} key={key}>
                <CustomInput labelText={Inflection.titleize(f)} id={f}
                    formControlProps={{
                    fullWidth: true
                    }} inputProps={{
                        onChange: (e)=>this.handleChange(e),
                        value: this.state[f]
                    }}
                />
            </GridItem>
          )
      });
      if(this.props.loader.loading){
        return (
          <div>
            <Grid container>
              <GridItem xs={12} sm={6} md={3} style={{ margin:'20% auto'}}>
                <CircularProgress className={classes.progress} size={70} style={{ color: purple[500]}} thickness={10} />
              </GridItem>
            </Grid>
          </div>)
      }else{
      return (
        <div>
          <Grid container>
            <GridItem xs={12} sm={12} md={12}>
            <h3> Add {Inflection.titleize(this.props.match.params.type)}</h3>
                <form className={classes.container} autoComplete="off">
                    <Card>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput labelText="Name" id="name" 
                                        formControlProps={{
                                        fullWidth: true
                                        }} inputProps={{
                                            onChange: (e)=>this.handleChange(e),
                                            value: this.state.name
                                        }}
                                    />
                                </GridItem>
                                {additionalFields}
                            </Grid>

                        </CardBody>
                        <CardFooter>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={2}>
                                    <Button color="yellowgreen" onClick={this.handleSubmit}>Submit</Button>
                                </GridItem>
                            </Grid>
                        </CardFooter>
                    </Card>
                </form>
            </GridItem>
          </Grid>
        </div>)
      }
    }

}
AddCrud.propTypes = {
    class: PropTypes.object
  }
  

function mapStateToProps(state) {
    return {
      loader: state.loader,
      user: state.auth.user,
    };
}
  
  
export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(AddCrud));