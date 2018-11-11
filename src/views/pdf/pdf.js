import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { PDFExport } from "@progress/kendo-react-pdf";
import generalStyle from "../../assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../components/Grid/GridItem.jsx";
import pdfTemplate from "./pdfTemplate";
import * as poActions from '../../actions/purchaseorder';
import * as Uom from "utility/Uom";
import * as Status from 'utility/Status';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class Pdf extends Component {
  po_doc;

  constructor() {
    super();
    (this.state = {
      data: [],
      footerHeader: [],
      items:[],
      po:[]
    }),
      (this.canvLoaded = false);
  }

  exportPDF = () => {
    this.po_doc.save();
  };

  componentWillMount() {
    poActions.fetchPurchaseOrderById(this.props.user.token, this.props.match.params.id,  (doc)=>{ 
      {{debugger}}
      this.setState({ po: doc.po, items:doc.items });
    });
  }

  render() {
    const { classes, data } = this.props;
    const tableData = this.state.items.map( (prop , key) => {
      return (
        <tr>
          <td style={generalStyle.tableTd}>{key+1}</td>
          <td style={generalStyle.tableTd}>{"N/A"}</td>
          <td style={generalStyle.tableTd}>{prop.description}</td>
          <td style={generalStyle.tableTd}>{prop.quantity}</td>
          <td style={generalStyle.tableTd}>{prop.price}</td>
          <td style={generalStyle.tableTd}>{prop.quantity*prop.price}</td>
        </tr>
      );
    });
    return (
      <div
        style={{
          minHeight: "70vh",
          height: "auto",
          width: "100vw",
          paddingTop: "20px",
          backgroundColor: "#f5f5f5",
          overflowY: "scroll",
          paddingBottom: "50px"
        }}
      >
        {!this.canvLoaded && (
          <canvas ref="canvas" style={{ display: "none" }} />
        )}
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <button onClick={this.exportPDF} style={{ margin: "auto" }}>
            download
          </button>
        </div>
        <PDFExport
          pageTemplate={pdfTemplate}
          paperSize="A4"
          margin="1cm"
          fileName="_____.pdf"
          title=""
          subject=""
          keywords=""
          ref={r => (this.po_doc = r)}
        >
          <div
            style={{
              height: "auto",
              width: "500px",
              padding: "100px 7px",
              backgroundColor: "white",
              overflowX: "hidden",
              overflowY: "hidden",
              fontFamily: "Arial",
              fontSize: "11px",
              position: "relative"
            }}
            ref={elem => (this.myPdf = elem)}
          >
            <div>
              <br />
              <div style={generalStyle.POtitle}>
                RS-PMG-PUR-P-1016–4 PURCHASE ORDER FORM
              </div>

              <Grid container>
                <GridItem xs={7} />
                <GridItem xs={5} style={generalStyle.alignLeft}>
                  <div style={generalStyle.noPaddingMargin}>
                    <label style={generalStyle.POLabel} for="input">
                      PO Number:
                    </label>
                    <input
                      style={generalStyle.POinput}
                      type="text"
                      id="your-input"
                      value={this.state.po.no}
                    />
                  </div>
                  <div style={generalStyle.noPaddingMargin}>
                    <label style={generalStyle.POLabel} for="input">
                      Order Date:
                    </label>
                    <input
                      style={generalStyle.POinput}
                      type="text"
                      id="your-input"
                      value={this.state.po.created}
                    />
                  </div>
                  <div style={generalStyle.noPaddingMargin}>
                    <label style={generalStyle.POLabel} for="input">
                      Delivery Date:
                    </label>
                    <input
                      style={generalStyle.POinput}
                      type="text"
                      id="your-input"
                    />
                  </div>
                  <div style={generalStyle.noPaddingMargin}>
                    <label style={generalStyle.POLabel} for="input">
                      Credit Terms:
                    </label>
                    <input
                      style={generalStyle.POinput}
                      type="text"
                      id="your-input"
                    />
                  </div>
                  <div style={generalStyle.space20} />
                </GridItem>
              </Grid>
              <Grid
                container
                style={{ margin: "14px 0", position: "relative" }}
              >
                <GridItem xs={7} style={generalStyle.alignLeft}>
                  <span style={generalStyle.strong7}>To:</span>
                  <br />
                  Skysite offshore access west Africa, <br /> 25A Theophilus
                  Orji street,
                  <br /> Lekki, Lagos
                </GridItem>
                <GridItem xs={5}>
                  <span style={generalStyle.strong7}>Ship To:</span>
                  <br /> Russelsmith Nig Ltd <br />
                  KM 14 Lekki - Epe Express Road,
                  <br /> Lekki Phase 1, Lekki
                </GridItem>
              </Grid>
              <div style={generalStyle.tableDiv}>
                <table style={generalStyle.rtable}>
                  <thead>
                    <tr>
                      <th style={generalStyle.tableTh}>Item No.</th>
                      <th style={generalStyle.tableTh}>Ref. Part No.</th>
                      <th style={generalStyle.tableTh}>
                        Product / Service Description
                      </th>
                      <th style={generalStyle.tableTh}>Qty</th>
                      <th style={generalStyle.tableTh}>Unit Price</th>
                      <th style={generalStyle.tableTh}>Extended Cost</th>
                    </tr>
                  </thead>
                  <tbody>{tableData}</tbody>
                </table>
                <table style={generalStyle.sTable}>
                  <tbody>
                    <tr>
                      <th style={generalStyle.tableTd3}>Discount:</th>
                      <td style={generalStyle.tableTd2}>{this.state.po.discount}</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>V.A.T:</th>
                      <td style={generalStyle.tableTd2}>{this.state.po.vat}%</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>
                        Freight <br />
                        Charges:
                      </th>
                      <td style={generalStyle.tableTd2}>{this.state.po.freightcharges}</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>
                        Service <br />
                        Charge:
                      </th>
                      <td style={generalStyle.tableTd2}>{this.state.po.servicecharge}</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>Total (USD):</th>
                      <td style={generalStyle.tableTd2}>{this.state.po.total}</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ clear: "right" }}>
                  <br />
                  <p>
                    <strong>Amount In words: </strong> Fifty Three Thousand Four
                    Hundred And Forty Five US Dollars Only
                  </p>
                </div>
              </div>
              <div>
                <p style={generalStyle.POtitle}>Additional Terms:</p>

                <p>
                  Total order value excludes VAT which is remitted directly to
                  FIRS.
                  <br /> This purchase order is subject to the Terms and
                  Conditions as attached.
                </p>

                <p>Credit Terms: 5 days upon receipt of payment from Chevron</p>
                <div style={generalStyle.divider} />
                <h4>Invoicing and payment shall be done as follows:</h4>
                <ul style={{ padding: "0 15px" }}>
                  <li>US Dollars Portion: Sixty Percent (60%) US$</li>
                  <li>NGN Portion: Forty Percent (40%) NGN</li>
                </ul>

                <Grid container>
                  <GridItem xs={7}>
                    <div>
                      <label style={generalStyle.POLabel2} for="input">
                        Prepared by:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div>
                      <span>
                        <strong>Reviewed by:</strong>
                        <br />
                      </span>
                      <label style={generalStyle.POLabel2} for="input">
                        Reviewer Signature:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div>
                      <span>
                        <strong>Authorized and Approved By:</strong>
                        <br />
                      </span>
                      <label style={generalStyle.POLabel2} for="input">
                        Authorizer’s Signature:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div>
                      <label style={generalStyle.POLabel2} for="input">
                        Approver’s Signature:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div>
                      <span>
                        <strong>Vendor:</strong>
                        <br />
                      </span>
                      <label style={generalStyle.POLabel2} for="input">
                        Signature:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                  </GridItem>
                  <GridItem xs={5}>
                    <div style={generalStyle.pt3}>
                      <label style={generalStyle.POLabel} for="input">
                        Date:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div style={generalStyle.pt2_5}>
                      <label style={generalStyle.POLabel} for="input">
                        Date:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div>
                      <br />
                      <label style={generalStyle.POLabel} for="input">
                        Date:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div style={generalStyle.pt1_5}>
                      <br />
                      <label style={generalStyle.POLabel} for="input">
                        Date:
                      </label>
                      <input
                        style={generalStyle.POinput2}
                        type="text"
                        id="your-input"
                      />
                    </div>
                    <div style={generalStyle.space20} />
                  </GridItem>
                </Grid>
                <div>
                  <br />
                  <p>
                    Please, do not hesitate to either call us on 07069000900 or
                    e-mail us at customerservice@russelsmithgroup.com to express
                    your view of our business dealings with you.
                  </p>
                  <p>
                    <strong>
                      Address: RusselSmith Nigeria Ltd. Cheryn’s Place, 3 Swiss
                      Trade Drive, Ikota Lekki, Lagos{" "}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PDFExport>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loader: state.loader,
    user: state.auth.user
  };
}

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Pdf));
