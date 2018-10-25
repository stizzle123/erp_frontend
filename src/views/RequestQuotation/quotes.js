import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Close from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.jsx";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import * as genericActions from '../../actions/generic.js';
import { Redirect } from 'react-router'
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import { Link } from "react-router-dom";
import Table from "components/Table/Table.jsx";
import * as Status from 'utility/Status';
import * as rfqActions from '../../actions/requestforquotation';
import {connect} from 'react-redux';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
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
  }
  
class Quote extends React.Component {

    constructor(props){
        super(props)
        this.props = props;
        this.state = {data: {}}
    }

    render(){
        const { classes } = this.props;
        let mappedData = this.props.quotes.map((prop, key) => {
            return [
                    key+1,
                    prop.vendor.general_info.company_name,
                    prop.created,
                    prop.status
            ]
          });
        return (
            <div>
                <div>
                      <ul className={classes.ulStyle}>
                        <li className={classes.liStyle}>
                          Requestor: <br />{" "}
                          <span className={classes.ap}>{this.props.pr.requestor.firstname+" "+this.props.pr.requestor.lastname}</span>
                        </li>
                        <li className={classes.liStyle}>
                          Requestion No: <br />{" "}
                          <span className={classes.ap}>{this.props.pr.requisitionno}</span>
                        </li>
                        <li className={classes.liStyle}>
                          Date Needed: <br />
                          <span className={classes.ap}>{this.props.pr.dateneeded}</span>
                        </li>
                        <li className={classes.liStyle}>
                          Charge To: <br />
                          <span className={classes.ap}> {this.props.pr.chargeto}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className={classes.ulStyle}>
                        <li className={classes.liStyle}>
                          Department: <br />{" "}
                          <span className={classes.ap}>{this.props.pr.department.code}</span>
                        </li>
                        <li className={classes.liStyle}>
                          Delivery Mode: <br />{" "}
                          <span className={classes.ap}>Digital (Download)</span>
                        </li>
                        <li className={classes.liStyle}>
                          {" "}
                          Status:
                          <br />
                          <span className={classes.ap}>{Status.getStatus(this.props.pr.status)}</span>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.space1} />
                    <h3>RFQ for this PR</h3>
                    <div className={classes.shadow}>
                      <Table
                        tableHead={["#", "Vendor", "Created", "Status"]}
                        tableData={mappedData}
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
            </div>
        );
    }

}

Quote.propTypes = {
    data: PropTypes.object,
    quotes: PropTypes.object,
  }
  
Quote.defaultProps = {
    quotes: []
}
function mapStateToProps(state) {
    return {
      loader: state.loader,
      user: state.auth.user,
    };
}
  
  
export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(Quote));