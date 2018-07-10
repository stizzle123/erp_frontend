import { RECEIVED_DATA } from './index';
import MiddleWare from "../middleware/api";

export function receivedData(arry){
    return {type: RECEIVED_DATA, data:arry};
}

export function findAllVendors(){
    let middleware = new MiddleWare();
    return dispatch=>{
        return middleware.makeConnection('/vendors','GET').then((response) => response.json()).then((responseJson)=>{
            //console.log(responseJson);
            let data =[];
            responseJson.map((row)=>{
                let arry = [];
                arry.push(row.general_info.company_name, row.general_info.contact_name, row.general_info.contact_phone,
                row.general_info.contact_email, row.status);
                data.push(arry);
            });
            dispatch(receivedData(data));
        });
    }
}