import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class SectionOne extends React.Component {
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
        <Button variant="contained" size="small" className={classes.button}>
          <Save className={[classes.leftIcon, classes.iconSmall]} />
          Save
        </Button>
        <Button variant="contained" size="medium"  color="primary" className={classes.button}>
          Send
          <Icon className={classes.rightIcon} />
      </Button>
      </form>
    );
  }
}

SectionOne.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionOne);