import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import {connect} from 'react-redux';

const styles = theme => ({
  button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    oneThird: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300,
    },  
    twoThird: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 600,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
  
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    checked: {},
    size: {
      width: 40,
      height: 40,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300,
    },
    menu: {
      width: 200,
    },
     table: {
      Width: 200,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });

class WorkRefrences extends React.Component {
  state = {
    data:{
      coy_name:'',
      coy_address:'',
      contact_person:'',
      contact_designation:'',
      contact_email:'',
      contact_phone:'',
      name:'',
      phone:'',
      address:'',
      email:''
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleBusinessNatureChange = name =>event =>{
    this.setState({
      [name]: event.target.value,
    });   
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">  
      <div>
        <FormLabel component="legend">Corporate Reference.</FormLabel>
        <TextField id="coy_name" required label="Company Name" placeholder="Company Name" className={classes.oneThird} margin="normal" />
        <TextField id="coy_address" required label="Company Address" placeholder="Company Address" className={classes.twoThird} margin="normal" />
        <TextField id="contact_person" required label="Contact Person" placeholder="Contact Person" className={classes.oneThird} margin="normal" />
        <TextField id="contact_designation" required label="Designation" placeholder="Designation" className={classes.oneThird} margin="normal" />
        <TextField id="contact_email" required label="Email" placeholder="Email" className={classes.oneThird} margin="normal" />
        <TextField id="contact_phone" required label="Phone" placeholder="Phone" className={classes.oneThird} margin="normal" />
       </div>
        <div>
        <FormLabel component="legend">Individual Reference.</FormLabel>
        <TextField id="name" required label="Name" placeholder="Name" className={classes.oneThird} margin="normal" />
        <TextField id="address" required label="Address" placeholder="Address" className={classes.twoThird} margin="normal" />
        <TextField id="email" required label="Email" placeholder="Email" className={classes.oneThird} margin="normal" />
        <TextField id="phone" required label="Phone" placeholder="Phone" className={classes.oneThird} margin="normal" />
        </div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Button variant="contained"  color="secondary" className={classes.button}>
                Save
              <Save className={classNames(classes.rightIcon, classes.iconSmall)} />
            </Button>            
          </Grid>
        </Grid>
      </form>
    );
  }
}

WorkRefrences.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.vendor.datum.business_info
  };
}
export default connect(mapStateToProps, null)(withStyles(styles)(WorkRefrences));