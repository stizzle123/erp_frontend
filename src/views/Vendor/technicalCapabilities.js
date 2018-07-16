import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Save from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';


const styles = {
  root: {
    flexGrow: 1,
  },
};

class TechnicalCapabilities extends React.Component {
  state = {
    core_service_count : 0,
    data:{
      competency:'',
      certification:'',
      supplier:'',
    }
  };

  core_service = ['0'];
  upload_doc = ['0'];

  componentDidMount(){
    this.setState({ data: this.props.data})
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleAddExtra= name =>event=>{
    if(name == "core_service_count"){
      this.core_service.push(0);
    } else if(name == "upload_doc_count"){
      this.upload_doc.push(0);
    }
    this.setState({[name]: this.core_service.length})
  }
  handleBusinessNatureChange = name =>event =>{
    this.setState({
      [name]: event.target.value,
    });   
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl component="fieldset" required error className={classes.formControl}>
          <FormLabel component="legend">Do You Have Proof of Competency/Certification to any relevant Standard ?</FormLabel>
          <RadioGroup
            id="competency"
            className={classes.group}
            value={this.state.data.competency}
            onChange={this.handleChange}
            row
          >
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" required error className={classes.formControl}>
          <FormLabel component="legend">Do You Have a Valid Quality Assurance Certification (e.g. ISO 9001 or Equivalent)?</FormLabel>
          <RadioGroup
            name="certification"
            className={classes.group}
            value={this.state.data.certification}
            onChange={this.handleChange}
            row
          >
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormLabel component="legend" className={classes.twoThird}>For Suppliers of Goods : </FormLabel> 
            <FormControl component="fieldset" required error className={classes.formControl}>
              <FormLabel component="legend">Do Your Goods Offered for Supply Conform to National/International Quality Standards?</FormLabel>
              <RadioGroup
                id="supplier"
                className={classes.group}
                value={this.state.data.supplier}
                onChange={this.handleChange}
                row
              >
                <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
              </RadioGroup>
            </FormControl>
            <Grid container spacing={12}>
              <Grid item xs={6}>
              <FormLabel component="legend">List below your core goods/services offered.</FormLabel>   
            {this.core_service.map((k,i)=>{
              return <TextField id={i+1} required label={i+1+". Core Goods/Services offered"} placeholder={i+1+". Core Goods/Services offered"} margin="normal" className={classes.twoThird} />
            })}
            <div>
              <Button variant="fab" color="primary" aria-label="Add Core Goods/Services Offered" onClick={this.handleAddExtra('core_service_count')} className={classes.button}>
                <AddIcon />
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
          <FormLabel component="legend">Authorised Agents and Traders must submit proof 
    (e.g. certificates) from manufacturers, showing that they are authorized to deal in those products.</FormLabel>   
            {this.upload_doc.map((k,i)=>{
              return   <div><input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" className={classes.button}>
                Upload
              </Button>
            </label></div>; 
            })}
            <div>
              <Button variant="fab" color="primary" aria-label="Upload manufacturer certification" onClick={this.handleAddExtra('upload_doc_count')} className={classes.button}>
                <AddIcon />
              </Button>
            </div>
            </Grid>
            </Grid>
        <div>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Button variant="contained"  color="secondary" className={classes.button}>
                Save
              <Save className={classNames(classes.rightIcon, classes.iconSmall)} />
            </Button>            
          </Grid>
        </Grid>
        </div>
      </form>
    );
  }
}

TechnicalCapabilities.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.vendor.datum.tech_capability,
    user: state.auth.user
  };
}
export default connect(mapStateToProps, null)(withStyles(styles)(TechnicalCapabilities));
