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
      
      };

      parseRow() {
        const table_data = this.state.doc.items.map((prop, key) => {
          return (
            <tr>
            <td style={generalStyle.firstCell}>
            {prop.description}
            </td>
            <td style={generalStyle.etd}>{prop.quantity}</td>
            <td style={generalStyle.etd}>
              <input
                type="text"
                name="market-price"
                style={generalStyle.iw}
              />
            </td>
            <td style={generalStyle.etd}>
              <input
                type="text"
                name="benchmark-price"
                style={generalStyle.iw}
              />
            </td>
            <td style={generalStyle.etd}>
              <input
                type="text"
                name="benchmark-price"
                style={generalStyle.iw}
              />
            </td> <td style={generalStyle.etd}>
              <input
                type="text"
                name="benchmark-price"
                style={generalStyle.iw}
              />
            </td>
            <td style={generalStyle.etd}>
              <input
                type="text"
                name="benchmark-price"
                style={generalStyle.iw}
              />
            </td>
          </tr>
          )
        });
        this.setState({ table_data });
      }

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
                <h2 className={classes.cardIconTitle}>Recieving and Inspection Form</h2>
              </CardHeader>
              <CardBody style={generalStyle.p15}>
                <div>
                  <Grid container>

                  </Grid>
                </div>
                <div style={generalStyle.tableContainer}>
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
                        <th style={generalStyle.firstCell} />
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
                <div style={generalStyle.tableContainer}>
                  <table style={generalStyle.evaluationTable}>
                  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>y
    
  </tr>
  <tr>
    <th>Telephone:</th>
    <td>555 77 855</td>
  </tr>
                  </table>
                </div>
                <a style={generalStyle.qe_btn}>Raise Rejection Log</a>
              </CardBody>
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
