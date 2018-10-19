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
import * as rfqActions from '../../actions/requestforquotation';
import * as prActions from '../../actions/purchaserequisition';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import * as Status from 'utility/Status';
import SweetAlert from "react-bootstrap-sweetalert";
import Language from "@material-ui/icons/Language";
import Quotes from "./quotes";
import AddComponent from "./add";
import {connect} from 'react-redux';

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
  }
};
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = { 
      data:[],
      showForm: false,
    };
  }

handler(type, id){
  console.log(type, id);
}

componentDidMount(){
  prActions.fetchAllRequistion(this.props.user.token , (docs)=>{
    this.setState({data : docs});
  });
}

fetchQuotes = (pr)=>{
  this.setState({selectedPr: pr, showRfq: true});
  rfqActions.fetchQuotesByRequisitionId(this.props.user.token, pr._id, (quotes)=>{
      this.setState({quotes: quotes, pr: pr});
  })
}
hideAlert =()=> {
  this.setState({
    alert: null
  });
}
showQuoteForm= ()=>{
    this.setState({
      alert: (
        <SweetAlert
          showCancel
          style={{ display: "block", marginTop:"-30%",marginLeft:"-30%", width:"65%"}}
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
          <AddComponent pr={this.state.selectedPr}/>
        </SweetAlert>
      )
    });
}

componentDidUpdate(prevProps) {
  if (this.props.match.params.type !== prevProps.match.params.type) {
    //vendorActions.findAllVendors(this.props, this.props.match.params.type);
  }
}

processJson(responseJson){
  let datas = [];
  responseJson.map((row)=>{
    datas.push(row);
  });
  return datas;
}

render(){
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
      let mappedData = this.state.data.map((prop, key) => {
        return (
          <li className="actions-left" onClick={()=>this.fetchQuotes(prop)}>
              <h5>
              {prop.requisitionno}<br />
              {prop.requestor.firstname+" "+prop.requestor.lastname}, {prop.created}
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
            <h2 className={classes.cardIconTitle}>
              Request For Quotation
            </h2>
          </CardHeader>
          <CardBody>
            <GridContainer justify="space-between">
              <GridItem xs={12} sm={4} md={4}>
                <ul>
                  {mappedData}
                </ul>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                  <div>
                      <Button color="twitter" size="sm" onClick={this.showQuoteForm}>Request For Quote</Button>
                  </div>
                  {this.state.alert}
                  {(this.state.showRfq)? <Quotes pr={this.state.selectedPr}  quotes={this.state.quotes} />: ""}
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
  vendorActions:PropTypes.object,
  data: PropTypes.object
}

Index.defaultProps = {
  data: {"dataRows":{}}
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
)(withStyles(styles)(Index));
