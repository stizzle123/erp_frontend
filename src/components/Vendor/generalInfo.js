import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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

class GeneralInfo extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
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
        <TextField
          id="name"
          required
          label="Name of Company"
          placeholder="Name of Company"
          className={classes.twoThird}
          margin="normal"
        />
        <TextField id="registration_no" required label="Company Registration Number" placeholder="Company Registration Number" className={classes.oneThird} margin="normal" />
        <TextField
          id="address"
          required
          label="Office Address"
          placeholder="Office Address"
          helperText="Full business address"
          fullWidth
          margin="normal"
        />
        <TextField id="city" required label="City" placeholder="City" className={classes.oneThird} margin="normal" />
        <TextField id="state" required label="State" placeholder="State" className={classes.oneThird} margin="normal" />
        <TextField id="country" required label="Country" placeholder="Country" className={classes.oneThird} margin="normal" />
        <TextField
          id="coy_telephone"
          required
          label="Company Telephone"
          placeholder="Company Telephone"
          className={classes.oneThird}
          margin="normal"
        />
        <TextField
          id="coy_email"
          required
          label="Company Email"
          placeholder="Company Email"
          className={classes.oneThird}
          margin="normal"
        />
        <TextField id="website" required label="Website" placeholder="Website" className={classes.oneThird}
          margin="normal"
        />
        <TextField
          id="contactname"
          required
          label="Contact Person"
          placeholder="Contact Person"
          className={classes.oneThird}
          margin="normal"
        />
        <TextField
          id="designation"
          required
          label="Designation"
          placeholder="Designation"
          className={classes.oneThird}
          margin="normal"
        />
        <TextField
          id="contact_telephone"
          required
          label="Contact Telephone"
          placeholder="Contact Telephone"
          className={classes.oneThird}
          margin="normal"
        />
        <TextField
          id="contact_email"
          required
          label="Contact Email"
          placeholder="Contact Email"
          className={classes.oneThird}
          margin="normal"
        />
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

GeneralInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralInfo);