import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GeneralInfo from './generalInfo';
import BusinessInfo from './businessInfo';
import WorkReference from './workReferences';
import TechnicalCapabilities from './technicalCapabilities'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

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
class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    
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
                    <TechnicalCapabilities />
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

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);