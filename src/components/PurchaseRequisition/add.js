import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Delete from '@material-ui/icons/Delete';
import FileUpload from '@material-ui/icons/FileUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


class TextFields extends React.Component {
  state = {
	checkedA: false,
	checkedB: false,
  };

handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="departmentname"
          required
          label="Department"
          placeholder="Department"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="chargeto"
          required
          label="Charge To"
          placeholder="Charge To"
          className={classes.textField}
          margin="normal"
        />
	    <TextField
          id="vendorname"
          required
          label="Vendor Name"
          placeholder="Vendor Name"
          className={classes.textField}
          margin="normal"
        />
		 <TextField
          id="purpose"
          required
          label="Purpose Of Use"
          placeholder="Purpose Of Use"
		  className={classes.textField}
          multiline
          rows="2"
          margin="normal"
        />
		<TextField
          id="vendoraddress"
          required
          label="Vendor Address"
          placeholder="Vendor Address"
          helperText="Full vendor address"
		  className={classes.textField}
          multiline
          rows="2"
          margin="normal"
        />
		 <TextField
          id="vendorcontact"
          required
          label="Vendor Contact"
          placeholder="Vendor Contact"
          className={classes.textField}
		  multiline
          rows="2"
          margin="normal"
        />
        <TextField
          id="phone"
          required
          label="Phone"
          placeholder="Phone"
          className={classes.textField}
          margin="normal"
        />
		<TextField
        id="date"
		label=" "
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
		helperText="Date Needed"
		margin="normal"
      />
        <TextField
          id="ship"
          required
          label="Ship Via"
          placeholder="Ship Via"
          className={classes.textField}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              color="primary"
            />
          }
          label="Budgetary"
        />

<FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Extra Budgetary"
        />

	<Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>No.</CustomTableCell>
            <CustomTableCell numeric>Product / Service Description</CustomTableCell>
            <CustomTableCell numeric>Quantity</CustomTableCell>
            <CustomTableCell numeric>Unit of Measurement</CustomTableCell>
            <CustomTableCell numeric>Budgeted Amount</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell numeric>{n.calories}</CustomTableCell>
                <CustomTableCell numeric>{n.fat}</CustomTableCell>
                <CustomTableCell numeric>{n.carbs}</CustomTableCell>
                <CustomTableCell numeric>{n.protein}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" className={classes.button}>
		  Send
		<Save className={classNames(classes.rightIcon, classes.iconSmall)} />
        </Button>
      <Button variant="contained"  color="secondary" className={classes.button}>
         Save
      <Save className={classNames(classes.rightIcon, classes.iconSmall)} />
      </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
