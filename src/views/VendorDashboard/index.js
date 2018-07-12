import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import ContentPaste from "@material-ui/icons/ContentPaste";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import AccessAlarms  from "@material-ui/icons/AccessAlarms";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessible from "@material-ui/icons/Accessible";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Tasks from "../../components/Tasks/Tasks.jsx";
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import Danger from "../../components/Typography/Danger.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <ContentPaste />
                </CardIcon>
                <p className={classes.cardCategory}><h1>3</h1></p>
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
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessible />
                </CardIcon>
                <p className={classes.cardCategory}><h1>93%</h1></p>
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
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
