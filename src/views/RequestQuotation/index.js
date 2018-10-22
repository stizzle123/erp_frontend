import React from "react";
import "react-table/react-table.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.jsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Funnel from "@material-ui/icons/FilterList";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";
import * as rfqActions from "../../actions/requestforquotation";
import * as prActions from "../../actions/purchaserequisition";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import Language from "@material-ui/icons/Language";
import AddComponent from "./add";
import { connect } from "react-redux";

const styles = {
  ...sweetAlertStyle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  ulStyle: {
    listStyleType: "none",
    overflow: "auto",
    padding: "0",
    borderBottom: "1px solid #000"
  },
  liStyle: {
    float: "left",
    paddingBottom: "15px",
    fontWeight: "700",
    lineHeight: "2",
    width: "25%"
  },
  ap: {
    fontWeight: "500"
  },
  shadow: {
    boxShadow: "rgba(0, 0, 0, 0.085) 0.1px 0.125rem 0.25rem",
    padding: "15px"
  },
  space1: {
    height: "10px"
  },
  boxer: {
    display: "table",
    borderCollapse: "collapse",
    width: "100%"
  },
  boxRow: {
    display: "table-row",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "#fff",
      borderLeft: "5px solid #3393FF"
    },
    "&:hover": {
      backgroundColor: "#fff"
    }
  },
  box: {
    display: "table-cell",
    verticalAlign: " top",
    borderBottom: " 1px solid #ddd",
    padding: "15px"
  },
  sidebar: {
    minHeight: "70vh",
    backgroundColor: "#f5f5f5"
  },
  boxHeader: {
    fontWeight: "700",
    backgroundColor: "#D3D3D3",
    display: "table-row"
  }
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      data: [],
      multipleSelect: [],
      showForm: false
    };
  }

  handler(type, id) {
    console.log(type, id);
  }

  componentDidMount() {
    prActions.fetchAllRequistion(this.props.user.token, docs => {
      this.setState({ data: docs });
    });
  }

  fetchQuotes = pr => {
    this.setState({ selectedPr: pr, showRfq: true });
    rfqActions.fetchQuotesByRequisitionId(
      this.props.user.token,
      pr._id,
      quotes => {
        this.setState({ quotes: quotes, pr: pr });
      }
    );
  };
  hideAlert = () => {
    this.setState({
      alert: null
    });
  };
  showQuoteForm = () => {
    this.setState({
      alert: (
        <SweetAlert
          showCancel
          style={{
            display: "block",
            marginTop: "-30%",
            marginLeft: "-30%",
            width: "65%"
          }}
          title="Request For Quote"
          onConfirm={e => this.inputConfirmAlert(e)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.info
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
        >
          <AddComponent pr={this.state.selectedPr} />
        </SweetAlert>
      )
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.type !== prevProps.match.params.type) {
      //vendorActions.findAllVendors(this.props, this.props.match.params.type);
    }
  }

  processJson(responseJson) {
    let datas = [];
    responseJson.map(row => {
      datas.push(row);
    });
    return datas;
  }

  render() {
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
      let mappedData = this.state.data.map((prop, key) => {
        return (
          <li className="actions-left" onClick={() => this.fetchQuotes(prop)}>
            <h5>
              {prop.requisitionno}
              <br />
              {prop.requestor.firstname + " " + prop.requestor.lastname},{" "}
              {prop.created}
              <br />
              {prop.department.code}
            </h5>
            <hr />
          </li>
        );
      });
      return (
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
                <CardIcon color="success">
                  <Language />
                </CardIcon>
                <h2 className={classes.cardIconTitle}>Request For Quotation</h2>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={3} md={3}>
                    {/* <ul>
                  {mappedData}
                  
                </ul> */}
                    <GridContainer justify="space-between">
                      <GridItem xs={3}>
                        <Funnel style={{ marginTop: "25px" }} />
                      </GridItem>

                      <GridItem xs={9} style={{ marginBottom: "13px" }}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="multiple-select"
                            className={classes.selectLabel}
                          >
                            Sort By
                          </InputLabel>
                          <Select
                            multiple
                            value={this.state.multipleSelect}
                            onChange={this.handleMultiple}
                            MenuProps={{ className: classes.selectMenu }}
                            classes={{ select: classes.select }}
                            inputProps={{
                              name: "multipleSelect",
                              id: "multiple-select"
                            }}
                          >
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="2"
                            >
                              Department
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3"
                            >
                              Date
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4"
                            >
                              RFQ
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </GridItem>
                    </GridContainer>

                    <div className={classes.sidebar}>
                      <div className={classes.boxer}>
                        <div className={classes.boxHeader}>
                          <div className={classes.box}>RFQ</div>
                          <div className={classes.box}>DATE</div>
                        </div>

                        <div className={classes.boxRow}>
                          <div className={classes.box}>RFQ/103039031</div>
                          <div className={classes.box}>10/10/2018</div>
                        </div>
                        <div className={classes.boxRow}>
                          <div className={classes.box}>RFQ/103039031</div>
                          <div className={classes.box}>10/10/2018</div>
                        </div>
                        <div className={classes.boxRow}>
                          <div className={classes.box}>RFQ/103039031</div>
                          <div className={classes.box}>10/10/2018</div>
                        </div>
                      </div>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={9} md={9}>
                    <div>
                      <Button
                        color="twitter"
                        size="sm"
                        onClick={this.showQuoteForm}
                      >
                        Request For Quote
                      </Button>
                    </div>
                    {/* {this.state.alert}
                  {(this.state.showRfq)? <Quotes pr={this.state.selectedPr}  quotes={this.state.quotes} />: ""} */}

                    <div>
                      <ul className={classes.ulStyle}>
                        <li className={classes.liStyle}>
                          Requestor: <br />{" "}
                          <span className={classes.ap}>Kolawale Abobade</span>
                        </li>
                        <li className={classes.liStyle}>
                          Requestion No: <br />{" "}
                          <span className={classes.ap}>Kolawale Abobade</span>
                        </li>
                        <li className={classes.liStyle}>
                          Date Needed: <br />
                          <span className={classes.ap}>12/11/2018</span>
                        </li>
                        <li className={classes.liStyle}>
                          Charge To: <br />
                          <span className={classes.ap}> CSN-001</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className={classes.ulStyle}>
                        <li className={classes.liStyle}>
                          Department: <br />{" "}
                          <span className={classes.ap}>SMD</span>
                        </li>
                        <li className={classes.liStyle}>
                          Delivery Mode: <br />{" "}
                          <span className={classes.ap}>Digital (Download)</span>
                        </li>
                        <li className={classes.liStyle}>
                          {" "}
                          Status:
                          <br />
                          <span className={classes.ap}>Approved</span>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.space1} />
                    <h3>RFQ for this PR</h3>
                    <div className={classes.shadow}>
                      <Table
                        tableHead={["#", "Vendor", "Created", "Status"]}
                        tableData={[
                          [
                            "123457575",
                            "Andrew Mike",
                            "2/12/2018",
                            "Awaiting Status"
                          ],
                          [
                            "123457575",
                            "Alex Mike",
                            "2/12/2018",
                            "Awaiting Status"
                          ],

                          [
                            "123457575",
                            "Paul Dickens",
                            "2/12/2018",
                            "Awaiting Status"
                          ]
                        ]}
                        customCellClasses={[
                          classes.center,
                          classes.right,
                          classes.right
                        ]}
                        customClassesForCells={[0, 4, 5]}
                        customHeadCellClasses={[
                          classes.center,
                          classes.right,
                          classes.right
                        ]}
                        customHeadClassesForCells={[0, 4, 5]}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    }
  }
}

Index.propTypes = {
  vendorActions: PropTypes.object,
  data: PropTypes.object
};

Index.defaultProps = {
  data: { dataRows: {} }
};
function mapStateToProps(state) {
  return {
    loader: state.loader,
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Index));
