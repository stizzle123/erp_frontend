import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const biz_types = [
  {
    value: '1',
    label: 'Corporate/Limited',
  },
  {
    value: '2',
    label: 'Partnership',
  },
  {
    value: '3',
    label: 'Other',
  }
];

class TextFields extends React.Component {
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

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          required
          label="Name of Company"
          placeholder="Name of Company"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="contactname"
          required
          label="Contact Person"
          placeholder="Contact Person"
          className={classes.textField}
          margin="normal"
        />
         <TextField
          id="address"
          required
          label="Office Address"
          placeholder="Office Address"
          helperText="Full business address"
          fullWidth
          margin="normal"
        />
        <TextField
          id="telephone"
          required
          label="Telephone"
          placeholder="Telephone"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="email"
          required
          label="Email"
          placeholder="Email"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="website"
          required
          label="Website"
          placeholder="Website"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="business_type"
          select
          required
          label="Type of business"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your type of business"
          margin="normal"
        >
          {biz_types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="year_established"
          required
          label="Year Established"
          placeholder="Year Established"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="employee_no"
          required
          label="No of Employee"
          placeholder="No of Employee"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);