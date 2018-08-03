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

class Vendor extends React.Component {
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
            <GridItem xs={12} sm={6} md={3} style={{ margin:'20% auto'}}>
              <CircularProgress className={classes.progress} size={70} style={{ color: purple[500]}} thickness={10} />
            </GridItem>
          </Grid>
        </div>)
    }else{
        if(this.props.vendor.status === "PENDING" || this.props.vendor.status === "UPDATE"){
          return (<Grid container>
            <GridItem xs={12} sm={12} md={6}>
              <h5>Notifications</h5>
              <br />
              <SnackbarContent message={"Your account is yet to be activated"} close color="warning" />
            </GridItem>
          </Grid>);
        }else if(typeof(this.props.vendor.status) === "undefined" || this.props.vendor.status === null){
          return  <Redirect to="/vendor/add" /> 
        }else{
          return (<div>
            <Grid container>
              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                      <ContentPaste />
                    </CardIcon>
                    <h1 className={classes.cardCategory}>3</h1>
                    </CardHeader>
                  <CardFooter stats>Active RFQs</CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                      <Warning />
                </CardIcon>
                    <h1 className={classes.cardCategory}>20%</h1>
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
                  <h1 className={classes.cardCategory}>85%</h1>
                  </CardHeader>
                  <CardFooter stats>On-time Supplies</CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={6} md={3}>
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                      <Accessible />
                    </CardIcon>
                    <h1 className={classes.cardCategory}>93%</h1>
                    </CardHeader>
                  <CardFooter stats>Supplier Availability</CardFooter>
                </Card>
              </GridItem>
            </Grid>

            <Grid container>
              <GridItem xs={12} sm={12} md={6}>
                <Card>
                  <CardHeader color="danger">
                    <h4 className={classes.cardTitleWhite}>Requests</h4>
                  </CardHeader>
                  <CardBody>
                    <Table
                      tableHeaderColor="danger"
                      tableHead={["Title", "Date"]}
                      tableData={[
                        ["Supply of LongTech", "14/6/2018"],
                        ["Cisco Miraki License", "14/6/2018"],
                        ["Office365 Business Licence", "14/6/2018"]

                      ]}
                    />
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <Card>
                  <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Purchase Orders</h4>
                  </CardHeader>
                  <CardBody>
                    <Table
                      tableHeaderColor="warning"
                      tableHead={["Title", "Date", "Status"]}
                      tableData={[
                        ["Supply of LongTech", "14/6/2018", "Payment Due"],
                        ["Cisco Miraki License", "14/6/2018", "Paid"],
                        ["Office365 Business Licence", "14/6/2018", "Paid"]

                      ]}
                    />
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </div>);
        }
    }
  }
}

Vendor.propTypes = {
  classes: PropTypes.object.isRequired
};

Vendor.defaultProps = {
  vendor:{}
}

function mapStateToProps(state) 
{
  return {
    vendor: state.vendor.datum,
    user: state.auth.user,
    loader: state.loader 
  };
}

export default connect(mapStateToProps, null)(withStyles(VendorStyle)(Vendor));
