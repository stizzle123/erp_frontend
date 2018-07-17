import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Approve from "@material-ui/icons/ThumbUp";
import Unapprove from "@material-ui/icons/ThumbDown";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import * as vendorActions from '../../actions/vendor';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Index extends React.Component {

  constructor(props){
    super(props)
    this.handler = this.handler.bind(this)
  }
 
handler(type, id){
  console.log(type, id);
}


/* componentDidMount(){
  const type = this.props.match.params.type;
  vendorActions.findAllVendors(this.props, type);
} */

componentDidUpdate(prevProps) {
  console.log(prevProps);
  if (this.props.match.params.type !== prevProps.match.params.type) {
    vendorActions.findAllVendors(this.props, this.props.match.params.type);
  }
}

render(){
    const { classes } = this.props;
    console.log(this.props);
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
      <Grid container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Vendor List</h4>
            </CardHeader>
            <CardBody>
              {(this.props.data.length < 1)?
                "No Data"
              :
              <Table
                tableHeaderColor="primary"
                tableHead={["Company Name", "Contact Person", "Contact Telephone","Contact Email" ,"Status", "Action"]}
                tableData={this.props.data} cardActions={[{label: Approve}]}  
                handler={this.handler} viewLink="/vendor/view/"
              />
               }
			</CardBody>
          </Card>
        </GridItem>
      </Grid>
    );
  }
  }
}

Index.propTypes = {
  vendorActions:PropTypes.object,
  data: PropTypes.array
}
Index.defaultProps = {
  data: []
}
function mapStateToProps(state) {
  console.log(state);
  return {
    data: state.vendor.data,
    loader: state.loader,
  };
}


export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Index));
