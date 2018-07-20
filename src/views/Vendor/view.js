import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GeneralInfo from './view/generalInfo';
import BusinessInfo from './view/businessInfo';
import WorkReference from './view/workReferences';
import TechnicalCapabilities from './view/technicalCapabilities'
import Typography from '@material-ui/core/Typography';
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Approve from "@material-ui/icons/ThumbUp";
import Unapprove from "@material-ui/icons/ThumbDown";
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import {connect} from 'react-redux';
import MiddleWare from "../../middleware/api";
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
class View extends React.Component {
  state = {
    reason:""
  }
  constructor(props){
    super(props)
    this.props = props;
  }

  componentDidMount(){
    const vendorId = this.props.match.params.id;
    vendorActions.findVendorById(this.props, vendorId);
  }

  handleChange = event => {
    this.setState({ 
      [event.target.id] : event.target.value,
    });
  };
  doApproval= e=>{
    console.log(this.props.data)
      let data = {};
      let middleware = new MiddleWare();
      data.key = this.props.data._id;
      data.value = "APPROVED";
      middleware.makeConnection('/vendors/updatestatus','PUT', data).then(
        (result)=>{
          if(!result.ok || result.statusText != "OK" && result.status != 200 ) {
            
          }
          this.setState({loading:false});
        }
      ).catch((e)=>{
        console.log(e);
      })

  }

  unApproval(){
    e.preventDefault();
    let data = {};
    let middleware = new MiddleWare(this.props.user.token);
    data.key = this.props.data._id;
    data.value = "PENDING";
    data.reason = this.state.reason;
    middleware.makeConnection('/vendors/updatestatus','PUT', data).then(
      (result)=>{
        if(!result.ok || result.statusText != "OK" && result.status != 200 ) {
          
        }
        this.setState({loading:false});
      }
    ).catch((e)=>{
      console.log(e);
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
           <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Form Tabs:"
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
             { (this.state.showReason)?
              <Grid
                container
                spacing={16}
                alignItems="center"
                direction="row"
                justify="center"
              >
                <CustomInput
                    labelText="Kindly give reason"
                    id="reason"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 2,
                      onChange: this.handleChange,
                    }}
                  />

              </Grid>
              : ""}
            <Grid
                container
                spacing={16}
                alignItems="center"
                direction="row"
                justify="center"
              >
              <Button onClick={this.doApproval}>
              <Approve />
                Approve
              </Button>
              <Button onClick={()=>{this.setState({showReason:true})}}>
                <Unapprove />
                Dissaprove
              </Button>
              </Grid>
          </GridItem>
      </Grid>
    );
  }
}

View.propTypes = {
  classes: PropTypes.object.isRequired,
  vendorActions:PropTypes.object,
  data: PropTypes.object
}

View.defaultProps = {
  data:{}
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    data: state.vendor.datum
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(View));