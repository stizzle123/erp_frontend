import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle.jsx";

function CustomCheck({ ...props }) {
    const {
        classes,
        inputProps,
        formControlProps,
        labelText,
        collection,
        state,
        name,
      } = props;

    return (
        <FormControl component="fieldset" {...formControlProps}
        className={formControlProps.className + " " + classes.formControl}>
        <FormLabel component="legend">{labelText}</FormLabel>
        <FormGroup row>
          {
            collection.map((option, k) => (
            <FormControlLabel control={
                <Checkbox name={name+"_"+k} checked={state[name+"_"+k]===option.value}
                {...inputProps}
                value={option.value} />
              } label={option.label} />
            )
          )}
        </FormGroup>
    </FormControl>
    );
}

CustomCheck.defaultProps = {
  children: '', 
  collection: [],
}


CustomCheck.propTypes = {
    classes: PropTypes.object.isRequired,
    formControlProps: PropTypes.object,
}

export default withStyles(customInputStyle)(CustomCheck);