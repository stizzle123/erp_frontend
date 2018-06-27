import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';





const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Random Company 1', "Abobade Kola", 6.0, 24, 4.0),
  createData('Random Company 2', "Abobade Kola", 9.0, 37, 4.3),
  createData('Random Company 3', "Abobade Kola", 16.0, 24, 6.0),
  createData('Random Company 4', "Abobade Kola", 3.7, 67, 4.3),
  createData('Random Company 5', "Abobade Kola", 16.0, 49, 3.9),
];

function Index(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Link to="/vendors/add" >Add Vendor</Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Vendor </TableCell>
            <TableCell numeric>Contact Name</TableCell>
            <TableCell numeric>Email</TableCell>
            <TableCell numeric>Telephone</TableCell>
            <TableCell numeric>Business Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Index);