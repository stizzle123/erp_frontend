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
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Normal from './Add/normal';
import Weekly from './Add/weekly';
import OpenMarket from './Add/openMarket';
import Project from './Add/project';
import CardIcon from "components/Card/CardIcon.jsx";
import CreditCard from '@material-ui/icons/CreditCard';


import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle.jsx";

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



class BusinessInfo extends React.Component {
  state = {
  simpleSelect: "",
    type: '',
  };


handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
	let display = ""; 
	  console.log(this.state);
	if (this.state.simpleSelect === 'Normal'){
		display = <Normal />
	}
	else if(this.state.simpleSelect === 'Weekly'){
		display = <Weekly />
	}
	else if(this.state.simpleSelect === 'OpenMarket'){
		display = <OpenMarket />
	}
	else if(this.state.simpleSelect === 'Project'){
		display = <Project />
	}
    return (
	<div>
	<Grid container>
    <GridItem xs={12} sm={12} md={12}>
      <form className={classes.container} noValidate autoComplete="off">
	 <Card>
              <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <CreditCard />
              </CardIcon>
              <h3 className={classes.cardIconTitle}>Purchase Requisition</h3>
            </CardHeader>
              <CardBody>
	  				
		         <GridItem xs={12} sm={6} md={5} lg={5}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}
                          >
                            Choose Requisition
                          </InputLabel>
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
                              id: "simple-select"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Choose Requisition
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Normal"
                            >
                              Normal
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Weekly"
                            >
                             Weekly
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="OpenMarket"
                            >
                              Open Market
                            </MenuItem>                            
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Project"
                            >
                              Project
                            </MenuItem>                                                       
                          </Select>
                        </FormControl>
                      </GridItem>		
					{display}
              </CardBody>
	  		</Card>
      </form>
	</GridItem>
</Grid>
</div>
    );
  }
}

BusinessInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(regularFormsStyle)(BusinessInfo);

