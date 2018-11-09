import React from 'react';
import record from './records';
import MiddleWare from "middleware/api";

export default class Index extends React.Component {

    componentDidMount(){
    }
    importRecord() {
        for (var i = 0; i < record.length; i++) {
            console.log( record[i]);
            //Do something
            let middleware = new MiddleWare();
    let data = {};
    data.email = record[i].FIELD7;
    data.password = "password";
    data.coy_name = record[i].FIELD3;
    data.role = "vendor";
    middleware.makeConnection('/users/import','POST', data).then((response) => {
      if(response.ok && response.status == 200){
          console.log("success")
      }
        })
    }}

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
