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
import Accessible from "@material-ui/icons/Accessible";
import Person from "@material-ui/icons/Person";
import DataUsage from "@material-ui/icons/DataUsage";
import Cancel from "@material-ui/icons/Cancel";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import Table from "../../../components/Table/Table.jsx";

import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardIcon from "../../../components/Card/CardIcon.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";

import dashboardStyle from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Iac extends React.Component {
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
                <CardIcon color="gray">
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
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="gray">
                <h4 className={classes.cardTitleWhite}>Pending Vendor Approvals</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="gray"
                  tableHead={["Company Name", "Category", "City", "Date Submitted"]}
                  tableData={[
                    ["Ojako Ltd", "Diesel Supplies", "Lagos","12/6/2018"],
                    ["RedMark Safety", "PPE Supplies", "Port Harcourt","8/6/2018"],
                    ["Vesta Nigeria", "IT Equipment", "Lagos","22/6/2018"]
                  ]}
                />

		       <CardFooter>
                      <Grid container>
                          <GridItem xs={12} sm={6} md={6}>
                                <Button color="gray">View All Pending Approvals</Button>
                        </GridItem>
		               </Grid>
                 </CardFooter>
              </CardBody>
            </Card>
          </GridItem>

        </Grid>
      </div>
    );
  }
}
Iac.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Iac);
