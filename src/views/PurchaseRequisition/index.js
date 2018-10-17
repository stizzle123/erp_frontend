import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.jsx";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import * as vendorActions from '../../actions/vendor';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import generalStyle from "assets/jss/material-dashboard-pro-react/generalStyle.jsx";

import {connect} from 'react-redux';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = { 
      redirectTo:false
    };
  }
 

handler(type, id){
  console.log(type, id);
}


componentDidMount(){
   vendorActions.findAllVendors(this.props);
    /* else if(this.props.match.params.type){
    vendorActions.findAllVendors(this.props, this.props.match.params.type);
  } */
}

componentDidUpdate(prevProps) {
  if (this.props.match.params.type !== prevProps.match.params.type) {
    vendorActions.findAllVendors(this.props, this.props.match.params.type);
  }
}
processJson(responseJson){
  let datas = [];
  responseJson.map((row)=>{
    let arry = [];
    arry.push(row._id, row.general_info.company_name, row.general_info.contact_name, row.general_info.contact_phone,
    row.general_info.contact_email, row.status, row.classes);
    datas.push(arry);
  });
  const dataTable = {
    headerRow: ["Class","Company Name", "Contact Person", "Contact Telephone", "Contact Email", "Actions"],
    footerRow: ["Class","Company Name", "Contact Person", "Contact Telephone", "Contact Email", "Actions"],
    dataRows: datas}
  return dataTable;
}

render(){
    const { classes } = this.props;
    let vendors = {"dataRows":[]};
    if(this.props.data.length> 0){
      vendors = this.processJson(this.props.data);
    }
    console.log(this.props);
    let data = [{}];
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
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Purchase Requisition Records</h4>
              <div style={generalStyle.mt3}>
                <Link to="/requisition/add">
                Create New
                </Link>
              </div>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={data}
                filterable
                columns={[
                  {
                    Header: "Date",
                    accessor: "date"
                  },
                  {
                    Header: "Req. No.",
                    accessor: "reqno"
                  },
                  {
                    Header: "Requested By",
                    accessor: "requestedby"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
  }
}

Index.propTypes = {
  vendorActions:PropTypes.object,
  data: PropTypes.object
}

Index.defaultProps = {
  data: {"dataRows":{}}
}
function mapStateToProps(state) {
  return {
    data: state.vendors,
    loader: state.loader,
    user: state.auth.user,
  };
}


export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Index));
