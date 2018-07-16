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
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
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

componentDidMount(){
  vendorActions.findAllVendors(this.props);
}

render(){
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Grid container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Vendor List</h4>
              <Button color="danger" to="/vendor/add" component={Link}>Add Vendor</Button>
            </CardHeader>
            <CardBody>
              {(this.props.data.length < 1)?
                "No Data"
              :
              <Table
                tableHeaderColor="primary"
                tableHead={["Company Name", "Contact Person", "Contact Telephone","Contact Email" ,"Status"]}
                tableData={this.props.data}
              />
               }
			</CardBody>
          </Card>
        </GridItem>
      </Grid>
    );
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
  return {
    data: state.vendor.data
  };
}


export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Index));
