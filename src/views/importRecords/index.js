import React from "react";
import record from "./records";
import MiddleWare from "middleware/api";

export default class Index extends React.Component {
  componentDidMount() {}
  roman_to_int = c => {
    switch (c) {
      case "I":
        return 1;
      case "II":
        return 2;
      case "III":
        return 3;
      default:
        return "";
    }
  };
  importRecord =()=> {
    for (var i = 0; i < record.length; i++) {
      let middleware = new MiddleWare();
      let data = {};
      data.email = record[i].FIELD8;
      data.password = "password";
      data.coy_name = record[i].FIELD3;
      data.role = "vendor";
      data.classes = this.roman_to_int(record[i].FIELD11);
      data.contact_name = record[i].FIELD7;
      data.contact_phone = record[i].FIELD10;
      data.office_address = record[i].FIELD4;
      data.state = record[i].FIELD6;
      data.country = record[i].FIELD5;
      data.website = record[i].FIELD9;
      data.product_related = record[i].FIELD1;
      data.supplier_id = record[i].FIELD2;
      middleware
        .makeConnection("/users/import", "POST", data)
        .then(response => {
          console.log(response)
        })
    }
  }

  render() {
    // const recordData = record.map((data) => {
    //     return (
    //         <div>
    //         <p>
    //             <strong>Contact Person </strong>{data.FIELD6}

    //         </p>
    //         <p>
    //             <strong>Contact email </strong>{data.FIELD7}
    //         </p>
    //         </div>
    //     );
    // })
    return (
      <div>
        <h2>records</h2>
        <button onClick={this.importRecord}>Click</button>
      </div>
    );
  }
}
