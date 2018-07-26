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
import Approve from "@material-ui/icons/ThumbUp";
import View from "@material-ui/icons/Pageview";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import * as vendorActions from '../../actions/vendor';
import { Redirect } from 'react-router'
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

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
    this.state = { redirectTo:false};
  }
 
handler(type, id){
  console.log(type, id);
}


componentDidMount(){
  if(typeof(this.props.match.params.type) === "undefined" && this.props.data.length === 0){
    vendorActions.findAllVendors(this.props);
  }else if(this.props.match.params.type){
    vendorActions.findAllVendors(this.props, this.props.match.params.type);
  }
}

componentDidUpdate(prevProps) {
  console.log(prevProps, "props");
  if (this.props.match.params.type !== prevProps.match.params.type) {
    vendorActions.findAllVendors(this.props, this.props.match.params.type);
  }
}

render(){
    const { classes } = this.props;
    console.log(this.props);
    let data = this.props.data.dataRows.map((prop, key) => {
        return {
          id: key,
          companyname: prop[1],
          contactperson: prop[2],
          contacttelephone: prop[3],
          contactemail: prop[4],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              {/* <Button
                justIcon
                round
                simple
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                 
                }}
                color="info"
                className="like"
              >
                <Approve />
              </Button>{""} */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  let obj = data.find(o => o.id === key);
                  this.setState({redirectTo:this.props.data.dataRows[[obj.id]][0]})
                  }}
                color="warning"
                className="edit"
              >
                 <Dvr />
              </Button>
              {/* use this button to remove the data row */}
            {/*   <Button
                justIcon
                round
                simple
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                className="remove"
              >
                <Close />
              </Button>{" "} */}
            </div>
          )
        };
      });
    if(this.props.loader.loading){
      return (
        <div>
          <Grid container>
            <GridItem xs={12} sm={6} md={3} style={{ margin:'20% auto'}}>
              <CircularProgress className={classes.progress} size={70} style={{ color: purple[500]}} thickness={10} />
            </GridItem>
          </Grid>
        </div>)
    }else if(this.state.redirectTo){
      return (<Redirect to={"/vendor/view/"+this.state.redirectTo}  />)
    }else{
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Vendors</h4>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={data}
                filterable
                columns={[
                  {
                    Header: "Company Name",
                    accessor: "companyname"
                  },
                  {
                    Header: "Contact Person",
                    accessor: "contactperson"
                  },
                  {
                    Header: "Contact Telephone",
                    accessor: "contacttelephone"
                  },
                  {
                    Header: "Contact Email",
                    accessor: "contactemail"
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
  data: {dataRows:[],headerRow:[],footerRow:[]}
}
function mapStateToProps(state) {
  return {
    data: state.vendor.data,
    loader: state.loader,
    user: state.auth.user,
  };
}


export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Index));
