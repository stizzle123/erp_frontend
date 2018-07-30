import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import customInputStyle from "../../assets/jss/material-dashboard-pro-react/components/customInputStyle.jsx";

function CustomSelect({ ...props }) {
    const {
        classes,
        inputProps,
        formControlProps,
        children,
        name,
        labelText,
        value,
        ...rest
      } = props;

    return (
      <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
        <TextField
          name={name}
          select
          label={labelText}
          value={value}
          /*className={classes.}*/
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          {...inputProps}
          {...rest}
        >
          {children}
        </TextField>
      </FormControl>
    );
}

CustomSelect.defaultProps = {
  value: '',
  children: '' 
}


CustomSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    formControlProps: PropTypes.object,
}

export default withStyles(customInputStyle)(CustomSelect);
