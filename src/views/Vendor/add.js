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
    const userId = this.props.user.id;
    vendorActions.findVendorByUserId(this.props, userId);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
           <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "General Information",
                  tabIcon: BugReport,
                  tabContent: (
                    <GeneralInfo />
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
  data: PropTypes.object
}

AddTabs.defaultProps = {
  data:{}
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default  connect(mapStateToProps, null)(withStyles(styles)(AddTabs));