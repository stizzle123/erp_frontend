import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GeneralInfo from './generalInfo';
import BusinessInfo from './businessInfo';
import WorkReference from './workReferences';
import TechnicalCapabilities from './technicalCapabilities'
import Typography from '@material-ui/core/Typography';
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import * as vendorActions from '../../actions/vendor';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
class AddTabs extends React.Component {
  componentWillMount(){
    const userId = this.props.user._id;
    vendorActions.findVendorByUserId(this.props, userId);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    if(this.props.user.role ==='vendor' && this.props.vendor.status === "PENDING"){
      return  <Redirect to="/dashboard" /> 
    }else
    return (
      <Grid container>
           <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Information Tabs"
              headerColor="primary"
              tabs={[
                {
                  tabName: "General Information",
                  tabIcon: BugReport,
                  tabContent: (
                    <GeneralInfo data={this.props.vendor.general_info}/>
                  )
                },
                {
                  tabName: "Business Information",
                  tabIcon: Code,
                  tabContent: (
                    <BusinessInfo />
                  )
                },
                {
                  tabName: "Technical Capabilities",
                  tabIcon: Cloud,
                  tabContent: (
                    <TechnicalCapabilities  />
                  )
                },
                {
                  tabName: "Work Reference",
                  tabIcon: Cloud,
                  tabContent: (
                    <WorkReference />
                  )
                }
              ]}
            />
          </GridItem>
      </Grid>
    );
  }
}

AddTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  vendorActions:PropTypes.object,
  vendor: PropTypes.object
}

AddTabs.defaultProps = {
  vendor:{}
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    vendor: state.vendor.datum,
  };
}

export default  connect(mapStateToProps, null)(withStyles(styles)(AddTabs));