import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { PDFExport } from "@progress/kendo-react-pdf";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import canvg from "canvg";
import ReactDOMServer from "react-dom/server";
import generalStyle from "../../assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import Grid from "@material-ui/core/Grid";
import GridItem from "../../components/Grid/GridItem.jsx";

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
      products: [
        {
          id: 1,
          refPartNo: "N/A",
          description: "gas detector",
          quantity: "1",
          unitPrice: "2000.99",
          extendedCost: "2000"
        },
        {
          id: 2,
          refPartNo: "N/A",
          description: "gas detector",
          quantity: "1",
          unitPrice: "2000.99",
          extendedCost: "2000"
        },
        {
          id: 3,
          refPartNo: "N/A",
          description: "gas detector",
          quantity: "1",
          unitPrice: "2000.99",
          extendedCost: "2000"
        },
        {
          id: 4,
          refPartNo: "N/A",
          description: "gas detector",
          quantity: "1",
          unitPrice: "2000.99",
          extendedCost: "2000"
        }
      ]
    }),
      (this.canvLoaded = false);
  }

  exportPDF = () => {
    this.po_doc.save();
  };

  componentDidMount() {}

  render() {
    const { classes, data } = this.props;

    const tableData = this.state.products.map(prop => {
      return (
        <tr>
          <td style={generalStyle.tableTd}>{prop.id}</td>
          <td style={generalStyle.tableTd}>{prop.refPartNo}</td>
          <td style={generalStyle.tableTd}>{prop.description}</td>
          <td style={generalStyle.tableTd}>{prop.quantity}</td>
          <td style={generalStyle.tableTd}>{prop.unitPrice}</td>
          <td style={generalStyle.tableTd}>{prop.extendedCost}</td>
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
          paperSize={"Letter"}
          fileName="_____.pdf"
          title=""
          subject=""
          keywords=""
          ref={r => (this.po_doc = r)}
        >
          <div
            style={{
              height: "auto",
              width: 580,
              padding: "15px",
              backgroundColor: "white",
              margin: "20",
              overflowX: "hidden",
              overflowY: "hidden",
              fontFamily: "Arial",
              fontSize: "11px"
            }}
          >
            <div>
              <table style={generalStyle.PO}>
                <tbody>
                  <tr>
                    <td rowSpan="2" width="20%" style={generalStyle.POTopth}>
                      <img
                        src="https://yt3.ggpht.com/a-/AJLlDp1AuBq98VdMQejTaohdCOu0NxYe0twL_rKNCw=s900-mo-c-c0xffffffff-rj-k-no"
                        alt=""
                        width="50%"
                      />
                    </td>
                    <td colSpan="2" style={generalStyle.POTopth}>
                      <center>
                        <span style={generalStyle.text11}>ISO 9001:2015</span>
                        <br />
                        <span style={generalStyle.text13}>
                          PROCUREMENT MANAGEMENT SYSTEM MANUAL PROCEDURES
                        </span>
                        <br />
                        <span style={generalStyle.text14}>
                          RS-PMG-PUR-P-1016 PROCUREMENT
                        </span>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td style={generalStyle.text5} width="60%">
                      Revision: 16
                    </td>
                    <td style={generalStyle.text6} width="40%">
                      Effective Date: 23 May 2018
                    </td>
                  </tr>
                </tbody>
              </table><br />
              <div style={generalStyle.POtitle}>RS-PMG-PUR-P-1016–4 PURCHASE ORDER FORM</div>

              <Grid container>
                <GridItem xs={6} />
                <GridItem xs={6} style={generalStyle.alignLeft}>
                  <div style={generalStyle.noPaddingMargin}>
                    <label style={generalStyle.POLabel} for="input">
                      PO Number:
                    </label>
                    <input
                      style={generalStyle.POinput}
                      type="text"
                      id="your-input"
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
              <Grid container style={{margin: "14px 0", position:"relative"}}>
                <GridItem xs={6} style={generalStyle.alignLeft}>
                  <span style={generalStyle.strong7}>To:</span><br/>
                  Skysite offshore access  west Africa, <br/> 25A Theophilus Orji street,<br/> Lekki, Lagos
                </GridItem>
                <GridItem xs={6} style={generalStyle.floatRight}>
                  <span style={generalStyle.strong7}>Ship To:</span><br/> Russelsmith Nig Ltd <br/>KM 14 Lekki - Epe Express Road,<br/> Lekki Phase 1, Lekki
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
                      <td style={generalStyle.tableTd2}>00.00</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>V.A.T:</th>
                      <td style={generalStyle.tableTd2}>2,545.00</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>
                        Freight <br />
                        Charges:
                      </th>
                      <td style={generalStyle.tableTd2}>00.00</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>
                        Service <br />
                        Charge:
                      </th>
                      <td style={generalStyle.tableTd2}>00.00</td>
                    </tr>
                    <tr>
                      <th style={generalStyle.tableTd3}>Total (USD):</th>
                      <td style={generalStyle.tableTd2}>53,445.00</td>
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
                  FIRS.<br /> This purchase order is subject to the Terms and Conditions as
                  attached.
                </p>

                <p>
                  Credit Terms: 5 days upon receipt of payment from Chevron
                </p>
                <div style={generalStyle.divider} />
                <h4>Invoicing and payment shall be done as follows:</h4>
                <ul style={{padding: "0 15px"}}>
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
                    <br/>
                    <p>Please, do not hesitate to either call us on 07069000900 or e-mail us at customerservice@russelsmithgroup.com to express your view of our business dealings with you.</p>
<p><strong>Address: RusselSmith Nigeria Ltd. Cheryn’s Place, 3 Swiss Trade Drive, Ikota Lekki, Lagos </strong></p>

                </div>
                <div style={{borderTop:"1px solid #000"}}><span>RS-PMG-PUR-P-1016 Procurement</span> <span style={{float:"right"}}> Printed Copies are Uncontrolled Copies</span></div>

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
