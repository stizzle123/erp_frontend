import React from 'react';
import record from './records'
export default class Index extends React.Component {

    componentDidMount(){
 console.log(record);
    }

    render() {
        const recordData = record.map((data) => {
            return (
                <div>
                <p>
                    <strong>Contact Person </strong>{data.FIELD6}

                </p>
                <p>
                    <strong>Contact email </strong>{data.FIELD7}
                </p>
                </div>
            );
        })
        return (
            <div>
            <h2>records</h2>
          {recordData}
            </div>
        );
    }
}
