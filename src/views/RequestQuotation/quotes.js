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
  }
};
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
                    prop.vendor.general_info.coy_name,
                    prop.created,
                    prop.status
            ]
          });
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={3} md={3}>
                        <h4>Requestor : <br />{this.props.pr.requestor.firstname+" "+this.props.pr.requestor.lastname}</h4>
                    </GridItem>
                    <GridItem xs={12} sm={3} md={3}>
                        <h4>Requisition No: <br />{this.props.pr.requisitionno}</h4>
                    </GridItem> 
                    <GridItem xs={12} sm={3} md={3}>
                        <h4>Date Needed: <br />{this.props.pr.dateneeded}</h4>
                    </GridItem> 
                    <GridItem xs={12} sm={3} md={3}>
                        <h4>Charge To: <br />{this.props.pr.chargeto}</h4>
                    </GridItem> 
                    <GridItem xs={12} sm={6} md={6}>
                        <h4>Department: <br />{this.props.pr.department.name}</h4>
                    </GridItem>                    
                    <GridItem xs={12} sm={3} md={3}>
                        <h4>Ship Via: <br />{this.props.pr.shipvia}</h4>
                    </GridItem>    
                    <GridItem xs={12} sm={3} md={3}>
                        <h4>Status: <br />{Status.getStatus(this.props.pr.status)}</h4>
                    </GridItem>                  
                </GridContainer>
                <GridContainer>
                <GridItem xs={12}>
                    <Card>
                        <CardBody>
                            <Table style={{height:"100px"}}
                            tableHeaderColor="primary"
                            tableHead={["#", "Vendor", "Created", "Status"]}
                            tableData={mappedData}
                            coloredColls={[3]}
                            colorsColls={["primary"]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
                </GridContainer>
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