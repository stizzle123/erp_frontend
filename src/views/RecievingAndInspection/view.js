import React from "react";
import "react-table/react-table.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Next from "@material-ui/icons/ChevronRight";
import Previous from "@material-ui/icons/ChevronLeft";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import Language from "@material-ui/icons/Language";
import { connect } from "react-redux";
import * as poActions from "../../actions/purchaseorder";

import generalStyle from "../../assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class View extends React.Component {
  state = {
    doc: {
      po: {
        vendor: {
          general_info: {}
        },
        requestor: {},
        vat: "",
        discount: "",
        servicecharge: "",
        freightcharges: ""
      },
      items: []
    },
    vendors: [],
    quotes: [],
    table_data: [],
    inpection_parameters: {
      checkedA: false,
      checkedB: true,
      checkedF: true
    }
  };

  parseRow() {
    const table_data = this.state.doc.items.map((prop, key) => {
      return (
        <tr>
          <td style={generalStyle.eth}>{prop.description}</td>
          <td style={generalStyle.etd}>{prop.quantity}</td>
          <td style={generalStyle.etd}>
            <input type="text" name="market-price" style={generalStyle.iw} />
          </td>
          <td style={generalStyle.etd}>
            <input type="text" name="benchmark-price" style={generalStyle.iw} />
          </td>
          <td style={generalStyle.etd}>
            <input type="text" name="benchmark-price" style={generalStyle.iw} />
          </td>
          <td style={generalStyle.etd}>
            <input type="text" name="benchmark-price" style={generalStyle.iw} />
          </td>
          <td style={generalStyle.etd}>
            <input type="text" name="benchmark-price" style={generalStyle.iw} />
          </td>
        </tr>
      );
    });
    this.setState({ table_data });
  }
  handleChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  componentDidMount() {
    poActions.fetchPurchaseOrderById(
      this.props.user.token,
      this.props.match.params.id,
      doc => {
        this.setState({ doc });
        this.parseRow();
      }
    );
  }

  render() {
    console.log(this.state.doc);
    const { classes } = this.props;
    if (this.props.loader.loading) {
      return (
        <div>
          <Grid container>
            <GridItem xs={12} sm={6} md={3} style={{ margin: "20% auto" }}>
              <CircularProgress
                className={classes.progress}
                size={70}
                style={{ color: purple[500] }}
                thickness={10}
              />
            </GridItem>
          </Grid>
        </div>
      );
    } else {
      return (
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
                <CardIcon color="success">
                  <Language />
                </CardIcon>
                <h2 className={classes.cardIconTitle}>
                  Recieving and Inspection Form
                </h2>
              </CardHeader>
              <CardBody style={generalStyle.p15}>
                <div>
                  <Grid container />
                </div>
                <div>
                  <table style={generalStyle.evaluationTable}>
                    <thead style={generalStyle.tableTop}>
                      <tr>
                        <th colSpan="1" style={generalStyle.tpcl}>
                          Description
                        </th>
                        <th colSpan="10" style={generalStyle.tpc2}>
                          Recieving Inspection Table
                        </th>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th style={generalStyle.eth}> Description </th>
                        <th style={generalStyle.eth}>Ordered Quantity</th>
                        <th style={generalStyle.eth}>Delivered Quantity</th>
                        <th style={generalStyle.eth}>Recieved Quantity</th>
                        <th style={generalStyle.eth}>Inspected Quantity</th>
                        <th style={generalStyle.eth}>Accepted Quantity</th>
                        <th style={generalStyle.eth}>Rejected Quantity</th>
                      </tr>
                    </thead>

                    {this.state.table_data}
                  </table>
                </div>
                <div>
                  <div style={generalStyle.space50} />
                  <Grid container>
                    <GridItem xs={6} style={generalStyle.wik1}>
                      <table style={{width: "100%"}}>
                        <tr >
                          <th style={generalStyle.wik2}>Identification</th>
                          <td style={generalStyle.wik3}>
                            
                            <Checkbox
                              checked={this.state.checkedA}
                              onChange={this.handleChecked("checkedA")}
                              value="checkedA"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th  style={generalStyle.wik2}>Quantity</th>
                          <td  style={generalStyle.wik3}>
                            <Checkbox
                              checked={this.state.checkedA}
                              onChange={this.handleChecked("checkedA")}
                              value="checkedA"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th  style={generalStyle.wik2}>Damages</th>
                          <td  style={generalStyle.wik3}>
                            <Checkbox
                              checked={this.state.checkedA}
                              onChange={this.handleChecked("checkedA")}
                              value="checkedA"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th  style={generalStyle.wik2}>Required Markings</th>
                          <td  style={generalStyle.wik3}> 
                            <Checkbox
                              checked={this.state.checkedA}
                              onChange={this.handleChecked("checkedA")}
                              value="checkedA"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th  style={generalStyle.wik2}>Cleanliness/Good Condition</th>
                          <td  style={generalStyle.wik3}>
                            <Checkbox
                              checked={this.state.checkedA}
                              onChange={this.handleChecked("checkedA")}
                              value="checkedA"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th  style={generalStyle.wik2}>Documentation</th>
                          <td  style={generalStyle.wik3}>
                            <Checkbox
                              checked={this.state.checkedA}
                              onChange={this.handleChecked("checkedA")}
                              value="checkedA"
                            />
                          </td>
                        </tr>
                      </table>
                    </GridItem>
                    <GridItem xs={6} style={generalStyle.wik1}>
                      <table style={{width: "100%"}}> 
                        <tr>
                          <th  style={generalStyle.wik2}>Incorrect Specification</th>
                          <td  style={generalStyle.wik3}>
                            <input
                              type="text"
                              name="benchmark-price"
                              style={generalStyle.iw}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th style={generalStyle.wik2}>Expired Goods from Inspection</th>
                          <td style={generalStyle.wik3}>
                            <input
                              type="text"
                              name="benchmark-price"
                              style={generalStyle.iw}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th style={generalStyle.wik2}>Number of Damaged Goods/Parts</th>
                          <td style={generalStyle.wik3}>
                            <input
                              type="text"
                              name="benchmark-price"
                              style={generalStyle.iw}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th style={generalStyle.wik2}>Goods with Poor Finishing</th>
                          <td style={generalStyle.wik3}>
                            <input
                              type="text"
                              name="benchmark-price"
                              style={generalStyle.iw}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th style={generalStyle.wik2}>Operability/Functionality</th>
                          <td style={generalStyle.wik3}>
                            <input
                              type="text"
                              name="benchmark-price"
                              style={generalStyle.iw}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th style={generalStyle.wik2}>Percentage Supply Compliance</th>
                          <td style={generalStyle.wik3}>
                            <input
                              type="text"
                              name="benchmark-price"
                              style={generalStyle.iw}
                            />
                          </td>
                        </tr>
                      </table>
                    </GridItem>
                  </Grid>
                </div>
              </CardBody>
               <div>heloo</div>
               <div style={generalStyle.space50} />

            </Card>
          </GridItem>

        </GridContainer>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    loader: state.loader,
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(View));
