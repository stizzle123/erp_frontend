import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomInput/CustomSelect.jsx";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import Print from '@material-ui/icons/Print';
import Checkbox from '@material-ui/core/Checkbox';
import Check from "@material-ui/icons/Check";
import {connect} from 'react-redux';

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle.jsx";
import tableStyle from "assets/jss/material-dashboard-pro-react/components/tableStyle.jsx";
import generalStyle from "assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import * as poActions from '../../actions/purchaseorder';
import * as rfqActions from '../../actions/requestforquotation';
import Notification from 'views/Notifications/Index.jsx';

const shipto = [
    {slug: 'lagos', name:'Lagos Office'},
    {slug: 'portharcourt', name:'Port-Harcourt Office'}
  ]

const styles = theme => ({
  ...tableStyle,
  ...regularFormsStyle,
  td:{
    border: 'none',
    margin: '0 10px',
    padding: '0 10px',
    fontWeight: '700',
    fontSize: '15px',
  },
   removeDivPadding:{ maxWidth: "12%"},
    cardIconTitle: {
      ...cardTitle,
      marginTop: "15px",
      marginBottom: "0px"
    },
      cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px"
      },
      typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative"
      },
      note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "260px"
      },
      ulStyle: {
        listStyleType: "none",
        overflow: "auto",
        padding: "0",
        borderBottom: "1px solid #000"
      },
      liStyle: {
        float: "left",
        paddingBottom: "15px",
        fontWeight: "700",
        lineHeight: "2",
        width: "25%"
      },
      ap: {
        fontWeight: "500"
      },
      shadow: {
        boxShadow: "rgba(0, 0, 0, 0.085) 0.1px 0.125rem 0.25rem",
        padding: "15px"
      },
      space1: {
        height: "10px"
      },
      boxer: {
        display: "table",
        borderCollapse: "collapse",
        width: "100%"
      },
      boxRow: {
        display: "table-row",
        cursor: "pointer",
        "&:active": {
          backgroundColor: "#fff",
          borderLeft: "5px solid #3393FF"
        },
        "&:hover": {
          backgroundColor: "#fff"
        }
      },
      box: {
        display: "table-cell",
        verticalAlign: " top",
        borderBottom: " 1px solid #ddd",
        padding: "15px"
      },
      sidebar: {
        minHeight: "70vh",
        backgroundColor: "#f5f5f5"
      },
      boxHeader: {
        fontWeight: "700",
        backgroundColor: "#D3D3D3",
        display: "table-row"
      }
    })
 

class View extends React.Component {
  state = {
    doc:{
        po:{
            vendor: {
                general_info: {}
            }
        }
    },
    vendors:[],
    quotes:[],
    table_data:[],
    checkeditems:[]
  };


    parseRow (){
    const { classes} = this.props;
    const table_data = this.state.doc.po.map((prop, key)=> {
            return (
            <TableRow key={key}> 
                <TableCell component="th" style={{border: "none", padding: "0", width: "20px", textAlign: "center"}}>
                    {key+1}
                </TableCell>
                <TableCell className={classes.td}>
                    {prop.description }
                </TableCell>
                <TableCell className={classes.td}>
                    {prop.qty}
                </TableCell>
                <TableCell className={classes.td}>
                    {prop.uom}   
                </TableCell>   
                <TableCell className={classes.td}>
                    {prop.price}   
                </TableCell>   
                <TableCell className={classes.td}>
                    {prop.price*prop.qty}   
                </TableCell> 
            </TableRow>
            )}
        );
        this.setState({table_data });
}

componentDidMount(){
    poActions.fetchPurchaseOrderById(this.props.user.token, this.props.match.params.id,  (doc)=>{
        this.setState({doc});
    });
}

render() {
    const { classes, tableHeaderColor } = this.props;
    ///this.parseRow ();
    return (
	<div>
    <Notification error={this.state.error} message={this.state.message} />
	<Grid container>
    <GridItem xs={12} sm={12} md={12}>
      <form className={classes.container} noValidate autoComplete="off">
	        <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Purchase Order</h4>
                </CardHeader>
                <CardBody>
                    <div>
                        <ul className={classes.ulStyle}>
                            <li className={classes.liStyle}>
                            EID: <br />{" "}
                            <span className={classes.ap}>{this.state.doc.po.eid}</span>
                            </li>
                            <li className={classes.liStyle}>
                            Purchase Order No: <br />{" "}
                            <span className={classes.ap}>{this.state.doc.po.no}</span>
                            </li>
                            <li className={classes.liStyle}>
                            Ship To: <br />
                            <span className={classes.ap}>{this.state.doc.po.shipto}</span>
                            </li>
                            <li className={classes.liStyle}>
                            Status: <br />
                            <span className={classes.ap}> {this.state.doc.po.status}</span>
                            </li>
                        </ul>
                    </div>
                  <br />
                  <div style ={{ overflowX: "scroll"}}>
                  <Table> 
                    <TableHead  className={classes[tableHeaderColor + "TableHeader"]} style={{marginTop:"10px", color:"#1b4aa5", borderBottomColor:"#333",borderBottomStyle:"solid", borderBottomWidth:"1px"}}>
                      <TableRow>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5", width:"55px"}}>Item No</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5"}}>Item Description</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5", width: "70px"}}>Quantity</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5"}}>UOM</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5"}}>Unit</TableCell>
                        <TableCell className={classes.tableCell + " " + classes.tableHeadCell+" "+classes.td} style={{color: "#1b4aa5"}}>Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <div ></div>

                    <TableBody>
                      {this.state.table_data}
                    </TableBody>
                  </Table> 
                </div>
                <div/>
                <Grid container>
                <GridItem xs={3}>
                    <CustomInput labelText="Discount "
                        formControlProps={{
                          fullWidth: true
                        }} inputProps={{
                          disabled: true, value: this.state.doc.po.discount               
                        }}
                      />
                </GridItem>
                <GridItem xs={3}>
                   <h4> {this.state.doc.po.vat} %</h4>
                </GridItem>
                <GridItem xs={3}>
                    <h4> {this.state.doc.po.freightcharges}</h4>
                </GridItem>
                <GridItem xs={3}>
                    <h4> {this.state.doc.po.servicecharge}</h4>
                </GridItem> 
              </Grid>
              <div style={generalStyle.resultSection}>
                <span style={{color:"#1b4aa5", fontWeight:"700", margin:"7px"}}>Total:</span>
                 <span style={{float:"right",color:"#1b4aa5", fontWeight:"700"}}>
                    {this.state.doc.po.total}
                 </span>
              </div>
              </CardBody>
              <CardFooter>
              <Grid container>
                <GridItem xs={12} sm={6} md={2} additionalclass={classes.removeDivPadding} >
                  <Button color="primary" onClick={this.handleSave}>Reject</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <Button color="yellowgreen" onClick={this.handleSubmit}>Approve</Button>
                </GridItem>
              </Grid>
            </CardFooter>
	  		</Card>
      </form>
	</GridItem>
</Grid>
</div>
    );
  }
}
View.defaultProps = {
  tableHeaderColor: "gray"
};

View.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.loader.loading,
    loader : state.loader
  };
}

export default connect(mapStateToProps, null)(withStyles(styles)(View));

