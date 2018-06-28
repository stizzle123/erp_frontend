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
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Delete from '@material-ui/icons/Delete';




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
	
  };


  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="purchase"
          required
          label="Purchase Order"
          placeholder="Purchase Order"
          className={classes.textField}
          margin="normal"
        />
		<TextField
        id="orderdate"
		label=" "
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
		helperText="Order Date"
		margin="normal"
      />
		<TextField
        id="deliverydate"
		label=" "
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
		helperText="Delivery Date"
		margin="normal"
      />
        <TextField
          id="credit"
          required
          label="Credit Term"
          placeholder="Credit Term"
          className={classes.textField}
		  multiline
          rows="2"
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
          id="to"
          required
          label="To"
          placeholder="To"
		  className={classes.textField}
		  helperText="Full Name"
          multiline
          rows="2"
          margin="normal"
        />
		<TextField
          id="shipto"
          required
          label="Ship To"
          placeholder="Ship To"
		  className={classes.textField}
		  helperText="Shipping Address"
          multiline
          rows="2"
          margin="normal"
        />
		<TextField
          id="amount"
          required
          label="Amount"
          placeholder="Amount"
		  className={classes.textField}
		  helperText="Amount in words"
          multiline
          rows="2"
          margin="normal"
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
