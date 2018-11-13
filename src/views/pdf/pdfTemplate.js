import React from 'react';
import generalStyle from "../../assets/jss/material-dashboard-pro-react/generalStyle.jsx";

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
              </table>       
               </div>
        <div style={generalStyle.footer}>
        <div style={{borderTop:"1px solid #000"}} ><span>RS-PMG-PUR-P-1016 Procurement</span> <span style={{float:"right"}}> Printed Copies are Uncontrolled Copies</span></div>
        </div>
            </div>
        );
    }
}
