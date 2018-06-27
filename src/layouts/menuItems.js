import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisoraccountIcon from '@material-ui/icons/SupervisorAccount';
import PaymentIcon from '@material-ui/icons/Payment';
import { Link } from 'react-router-dom';


export const menuItems = (
  <div>
    <ListItem button  to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button to="/vendors"  component={Link}>
      <ListItemIcon>
        <SupervisoraccountIcon />
      </ListItemIcon>
      <ListItemText primary="Vendors"  />
    </ListItem>
	<ListItem button to="/PurchaseRequisition"  component={Link}>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Purchase Requisition"  />
    </ListItem>
  </div>
);

