import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardIcon from "../../../components/Card/CardIcon.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import CircularProgress from '@material-ui/core/CircularProgress';
import ContentPaste from "@material-ui/icons/ContentPaste";
import Accessible from "@material-ui/icons/Accessible";
import AccessAlarms  from "@material-ui/icons/AccessAlarms";
import purple from '@material-ui/core/colors/purple';
import SnackbarContent from "../../../components/Snackbar/SnackbarContent.jsx";
import Table from "../../../components/Table/Table.jsx";
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../../variables/charts.jsx";
import * as vendorActions from '../../../actions/vendor';

import VendorStyle from "../../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.jsx";

class Staff extends React.Component {
  state = {
    value: 0
  };

  componentDidMount(){
    const userId = this.props.user.id;
    vendorActions.findVendorByUserId(this.props,userId);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    if(this.props.loader.loading){
      return (
        <div>
         <Grid container>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <ContentPaste />
                </CardIcon>
                <p className={classes.cardCategory}><h1>36</h1></p>
                </CardHeader>
              <CardFooter stats>Pending Approvals</CardFooter>
            </Card>
          </GridItem>

		  <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="warning">
                  <Person />
                </CardIcon>
                <p className={classes.cardCategory}><h1>620</h1></p>
                </CardHeader>
              <CardFooter stats>Active Vendors</CardFooter>
            </Card>
          </GridItem>

		 <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="warning">
                  <Cancel />
                </CardIcon>
                <p className={classes.cardCategory}><h1>15</h1></p>
                </CardHeader>
              <CardFooter stats>Blacklisted Vendors</CardFooter>
            </Card>
          </GridItem>

		 <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="rose">
                  <DataUsage />
                </CardIcon>
                <p className={classes.cardCategory}><h1>87%</h1></p>
                </CardHeader>
              <CardFooter stats>Overall Vendor Performance</CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Warning />
		        </CardIcon>
                <p className={classes.cardCategory}><h1>20%</h1></p>
                </CardHeader>
              <CardFooter stats>Defect Rate</CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                 <AccessAlarms />
                </CardIcon>
               <p className={classes.cardCategory}><h1>85%</h1></p>
               </CardHeader>
              <CardFooter stats>On-time Supplies</CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Accessible />
                </CardIcon>
                <p className={classes.cardCategory}><h1>93%</h1></p>
                </CardHeader>
              <CardFooter stats>Supplier Availability</CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Pending Vendor Approvals</h4>
              </CardHeader>
              <CardBody>
              <ReactTable
                data={data}
                filterable={false}
                columns={[
                  {
                    Header: "Company Name",
                    accessor: "companyname"
                  },
                  {
                    Header: "Contact Person",
                    accessor: "contactperson"
                  },
                  {
                    Header: "Contact Telephone",
                    accessor: "contacttelephone"
                  },
                  {
                    Header: "Contact Email",
                    accessor: "contactemail"
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={5}
                showPaginationTop={false}
                showPaginationBottom={false}
                className="-striped -highlight"
              />
              </CardBody>
		          <CardFooter>
                <Grid container justify="center">
                  <GridItem xs={12} sm={6} md={6} >
                    <Button color="gray">View All Pending Approvals</Button>
                  </GridItem>
		            </Grid>
              </CardFooter>
            </Card>
          </GridItem>

        </Grid>
          </div>);
        }
    }
  }

Staff.propTypes = {
  classes: PropTypes.object.isRequired
};

Staff.defaultProps = {
  vendor:{}
}

function mapStateToProps(state) 
{
  return {
    user: state.auth.user,
    loader: state.loader 
  };
}

export default connect(mapStateToProps, null)(withStyles(VendorStyle)(Staff));
