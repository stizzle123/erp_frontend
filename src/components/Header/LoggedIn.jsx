import React from 'react';
import Hidden from "@material-ui/core/Hidden";
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../CustomButtons/Button.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import headerLinksStyle from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

const LoggedIn = ({...props})=>{
  const { classes } = props;

    return(
    <div>
    <div className={classes.searchWrapper}>
    <CustomInput
      formControlProps={{
        className: classes.margin + " " + classes.search
      }}
      inputProps={{
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search"
        }
      }}
    />
    <Button color="white" aria-label="edit" justIcon round>
      <Search />
    </Button>
  </div>
    <Button
      color={window.innerWidth > 959 ? "transparent" : "white"}
      justIcon={window.innerWidth > 959}
      simple={!(window.innerWidth > 959)}
      aria-label="Dashboard"
      className={classes.buttonLink}
    >
      <Dashboard className={classes.icons} />
      <Hidden mdUp>
        <p className={classes.linkText}>Dashboard</p>
      </Hidden>
    </Button>
    <Button
      color={window.innerWidth > 959 ? "transparent" : "white"}
      justIcon={window.innerWidth > 959}
      simple={!(window.innerWidth > 959)}
      aria-label="Person"
      className={classes.buttonLink}
    >
      <Person className={classes.icons} />
      <Hidden mdUp>
        <p className={classes.linkText}>Profile</p>
      </Hidden>
    </Button> 
    </div>
)}

export default withStyles(headerLinksStyle)(LoggedIn);