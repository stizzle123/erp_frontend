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
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from "../../components/CustomButtons/Button.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

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
  {value: '1',label: 'Purchase Order Log',},
  {value: '2',label: 'Purchase Requisition Tracker',},
];

class LogInfo extends React.Component {
  state = {checkedA: false,
	checkedB: false,
    biz_type: '',
  };
handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleBizTypeChange = name=> event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
	<div>

    <GridItem xs={12} sm={12} md={12}>
      <form className={classes.container} noValidate autoComplete="off">
	 <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Log / Tracker</h4>
              </CardHeader>
              <CardBody>
         <TextField
          id="business_nature"
          select
          required
          label="Select"
          className={classes.oneThird}
          value={this.state.biz_type}
          onChange={this.handleBizTypeChange('biz_type')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}

        >
          {biz_types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
		  </TextField>
           </CardBody>
          </Card>
         </form>
       </GridItem>
  </div>
    );
  }
}

LogInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogInfo);
