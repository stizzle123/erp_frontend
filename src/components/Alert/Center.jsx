/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";


class CenterTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tc: false
        };
      }
      render() {
        const { classes, message, openState} = this.props;
        return (
        <Snackbar
        place="tc"
        color="info"
        icon={AddAlert}
        message={message}
        open={(openState)? openState: this.state.tc}
        closeNotification={() =>{    
            this.setState({ tc: false })
        } }
        close
        />)
      }
    }

    export default withStyles(styles)(CenterTop);