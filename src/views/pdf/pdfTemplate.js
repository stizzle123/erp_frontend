import React from 'react';
import generalStyle from "../../assets/jss/material-dashboard-pro-react/generalStyle.jsx";
import moment from 'moment'

export default class PdfTemplate extends React.Component {
    render() {
        return (
            <div>
             <div style={generalStyle.header}>
        <table style={generalStyle.PO}>
                <tbody>
                  <tr>
                    <td rowSpan="2" width="20%" style={generalStyle.POTopth}>
                      <img
                      ref={(image) => this.image = image}
                        src="https://russelsmithgroup.com/wp-content/uploads/2015/07/RuselSmith_Group_Asset_Integrity_Management_Logo.png"
                        alt=" ruseel smith image"
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
                      Effective Date: {moment(new Date()).format("DD/MM/YYYY")}
                    </td>
                  </tr>
                </tbody>
              </table>       
               </div>
        <div style={generalStyle.footer}>
        <div style={{borderTop:"1px solid #000"}} ><span>RS-PMG-PUR-P-1016 Procurement</span> <span style={{float:"right"}}> Printed Copies are Uncontrolled Copies</span></div>
        </div>
            </div>
        );
    }
}