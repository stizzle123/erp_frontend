import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisoraccountIcon from '@material-ui/icons/Supervisoraccount';
import StarIcon from '@material-ui/icons/Star';
import PaymentIcon from '@material-ui/icons/Payment';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Fade from '@material-ui/core/Fade';

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

