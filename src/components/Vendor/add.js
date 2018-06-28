import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import  SectionOne from './sectionone';
import  SectionTwo from './sectiontwo';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

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
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="General Information" />
          <Tab label="Business Information" />
          <Tab label="Technical Capabilities" />
          <Tab label="Work Reference" />
        </Tabs>
        <Typography className={classes.typography}>
          {value === 0 && <TabContainer><SectionOne /></TabContainer>}
          {value === 1 && <TabContainer><SectionTwo /></TabContainer>}
          {value === 2 && <TabContainer><SectionThree /></TabContainer>}
          {value === 3 && <TabContainer><SectionFour /></TabContainer>}
        </Typography>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);