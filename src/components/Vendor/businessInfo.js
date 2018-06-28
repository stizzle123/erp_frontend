import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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
class BusinessInfo extends React.Component {
  state = {
    biz_type: '',
  };
  biz_nature_state = [];

  handleBizTypeChange = name=> event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  checkChecked = value=>{
    this.biz_nature_state.map(v=>{
      return v = value;
    })
  };
  
  handleBizNatureChange = name=> event =>{
    let i = this.biz_nature_state.indexOf(event.target.value);
    if( i  == -1){
      this.biz_nature_state.push(event.target.value); 
    }else{
      this.biz_nature_state.splice(i, 1);
    }
    console.log(this.biz_nature_state);
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
          value={this.state.biz_type}
          onChange={this.handleBizTypeChange('biz_type')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
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
      
        <FormLabel component="legend" className={classes.twoThird}>Area(s) of Business that you wish to Register For : </FormLabel> 
        <FormControl component="fieldset">
                <FormLabel component="legend">Product Related</FormLabel>
                <FormGroup row>
                {biz_nature.map(option => (
                <FormControlLabel control={
                    <Checkbox
                      checked={this.checkChecked(option.value)}
                      onChange={this.handleBizNatureChange(option.value)}
                      value={option.value}
                    />
                  } label={option.label} />
                )
                )}
                </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
            <FormLabel component="legend">Service Related</FormLabel>
            <FormGroup row>
              {biz_nature.map(option => (
                <FormControlLabel control={
                    <Checkbox
                      checked={this.checkChecked(option.value)}
                      onChange={this.handleBizNatureChange(option.value)}
                      value={option.value}
                    />
                  } label={option.label} />
                )
              )}
            </FormGroup>
        </FormControl>
        <TextField
          id="tax_no"
          required
          label="Tax Identification No (TIN)"
          placeholder="Tax Identification No"
          className={classes.oneThird}
          margin="normal"
        />  
        <TextField
          id="tax_no"
          required
          label="VAT Registration No (VAT)"
          placeholder="VAT Registration No (VAT)"
          className={classes.oneThird}
          margin="normal"
        /> 
        <FormControl component="fieldset" required error className={classes.formControl}>
          <FormLabel component="legend">Is your Company a subsidiary of another company?</FormLabel>
          <RadioGroup
            name="issubsidiary"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
            row
          >
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
          </RadioGroup>
        </FormControl>
      </form>
    );
  }
}

BusinessInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessInfo);