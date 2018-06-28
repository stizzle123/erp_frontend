import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisoraccountIcon from '@material-ui/icons/SupervisorAccount';
import PaymentIcon from '@material-ui/icons/Payment';
import { Link } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
});

class MenuItems extends React.Component {
  state = { open: true };

  handleClick = n =>event => {
    if(n === 'purchase'){	
    	this.setState(state => ({ purchase: !state.purchase }));  
	  }else if(n === 'vendor'){	 
    	this.setState(state => ({ vendor: !state.vendor })); 
	  }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
		<ListItem button  to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
          <ListItem button onClick={this.handleClick('vendor')} to="/vendors"  component={Link}>
      <ListItemIcon>
        <SupervisoraccountIcon />
      </ListItemIcon>
      <ListItemText inset primary="Vendors" />
	  {this.state.vendor ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
		<Collapse in={this.state.vendor} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button to="/vendors/add"  component={Link} className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText  inset primary="Add Vendors" />
              </ListItem>
            </List>
          </Collapse>
		
		<ListItem button onClick={this.handleClick('purchase')} to="/PurchaseRequisition"  component={Link}>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText inset primary="Purchase Requisition"  />
	  {this.state.purchase ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
		<Collapse in={this.state.purchase} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button to="/PurchaseRequisition/add"  component={Link} className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Add Purchase Requisition" />
              </ListItem>
		      <ListItem button to="/PurchaseRequisition/purchase"  component={Link} className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Add Purchase Order" />
              </ListItem>
            </List>
          </Collapse>
		
		
         
        </List>
      </div>
    );
  }
}

MenuItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuItems);