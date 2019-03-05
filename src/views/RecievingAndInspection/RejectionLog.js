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
import Paper from "@material-ui/core/Paper";
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

class RejectionLog extends React.Component {
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
    let productItems = this.state.doc.items.filter(function(productItem) {
      return productItem.service_type.toLowerCase() == "product";
    });
    const table_data = productItems.map((prop, key) => {
      return (
        <tr>
          <td style={generalStyle.eth3}>{prop.description}</td>
          <td style={generalStyle.etd3}>{prop.quantity}</td>
          <td style={generalStyle.etd3}>
            <input type="text" name="no_rejected" style={generalStyle.iw} />
          </td>
          <td style={generalStyle.etd3}>
            <input type="text" name="description" style={generalStyle.iw2} />
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
          <Paper style={{ width: "100%" }}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Rejection Log</h4>
              </CardHeader>
            </Card>
            <CardBody>
              <table style={generalStyle.wik4}>
                <tr>
                  <th style={generalStyle.wik5}>PO No:</th>
                  <td style={generalStyle.wik6}> {this.state.doc.po.no}</td>
                </tr>
                <tr>
                  <th style={generalStyle.wik5}>Vendor Name:</th>
                  <td style={generalStyle.wik6}>
                    {this.state.doc.po.vendor.general_info.company_name}
                  </td>
                </tr>
                <tr>
                  <th style={generalStyle.wik5}>Vendor Contact Name:</th>
                  <td style={generalStyle.wik6}>
                    {this.state.doc.po.vendor.general_info.contact_name}
                  </td>
                </tr>
                <tr>
                  <th style={generalStyle.wik5}>Vendor Phone:</th>
                  <td style={generalStyle.wik6}>
                    {this.state.doc.po.vendor.general_info.coy_phone}
                  </td>
                </tr>
              </table>
              <table style={generalStyle.wik4}>
                <tr>
                  <th style={generalStyle.wik5}>Item</th>
                  <th style={generalStyle.wik8}>No. of Items Purchased</th>
                  <th style={generalStyle.wik8}>No. of items rejected</th>
                  <th style={generalStyle.wik8b}>Description</th>
                </tr>
                {this.state.table_data}
              </table>
              <GridItem xs={12}>
                <div style={generalStyle.space50} />
                <a style={generalStyle.qe_btn2}>Submit</a>
                <div style={generalStyle.space50} />
              </GridItem>
            </CardBody>
          </Paper>
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
)(withStyles(styles)(RejectionLog));
