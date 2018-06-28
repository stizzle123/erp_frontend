import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
});

const biz_types = [
  {value: '1',label: 'Corporate/Limited',},
  {value: '2',label: 'Partnership',},
  {value: '3',label: 'Other',}
];
const biz_nature = [
  {value: '1',label: 'Manufacturer',},
  {value: '2',label: 'Trader',},
  {value: '3',label: 'Authorized Agent',},
  {value: '4',label: 'Consulting Firm',},
  {value: '5',label: 'Others Specify',}
];
class SectionTwo extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleBizTypeChange = name => event => {
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
          id="business_nature"
          select
          required
          label="Corporate/Limited Liability"
          className={classes.oneThird}
          value={this.state.business_nature}
          onChange={this.handleBusinessNatureChange('business_nature')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {biz_nature.map(option => (
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
          className={classes.oneThird}
          margin="normal"
        />
        <TextField
          id="employee_no"
          required
          label="No of Employee"
          placeholder="No of Employee"
          className={classes.oneThird}
          margin="normal"
        />
        <FormGroup row>
        {biz_types.map(option => (
        <FormControlLabel control={
            <Checkbox
              checked={this.state.bizType === option.value}
              onChange={this.handleBizTypeChange(option.value)}
              value={option.value}
            />
          } label={option.label} />
        )
        )};
        </FormGroup>
      </form>
    );
  }
}

SectionTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionTwo);