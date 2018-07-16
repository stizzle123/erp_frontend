import { RECEIVED_DATA, VENDOR_DATA } from './index';
import * as loadAction from './loading';
import MiddleWare from "../middleware/api";

export function receivedData(arry){
    return {type: RECEIVED_DATA, data:arry};
}
export function vendorData(arry){
    return {type: VENDOR_DATA, data:arry};  
}

export function findAllVendors(props){
    let middleware = new MiddleWare();
    props.dispatch(loadAction.Loading());
        return middleware.makeConnection('/vendors','GET').then((response) => response.json()).then((responseJson)=>{
            let datas =[];
            responseJson.map((row)=>{
                let arry = [];
                arry.push(row.general_info.company_name, row.general_info.contact_name, row.general_info.contact_phone,
                row.general_info.contact_email, row.status);
                datas.push(arry);
            });
            props.dispatch(receivedData(datas));
            props.dispatch(loadAction.LoadingSuccess());
        });
}

export function findVendorByUserId(props,userId){
    let middleware = new MiddleWare();
    props.dispatch(loadAction.Loading());
    return middleware.makeConnection('/vendors/'+userId,'GET').then((response) => {
        return response.json()
    }).then(        
        (responseJson)=>{
        props.dispatch(vendorData(responseJson[0]));
        props.dispatch(loadAction.LoadingSuccess());
    }
);
}

export function submitVendorDetails(userId){
    
}