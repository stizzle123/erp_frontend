import { RECEIVED_DATA, VENDOR_DATA } from './index';
import * as loadAction from './loading';
import MiddleWare from "../middleware/api";

export function receivedData(arry){
    return {type: RECEIVED_DATA, data:arry};
}
export function vendorData(arry){
    return {type: VENDOR_DATA, data:arry};  
}

export function findAllVendors(props, type=''){
    let middleware = new MiddleWare(props.user.token);
    let endpoint = '/vendors';
    if(type === 'pending'){
        endpoint = endpoint+'/pending';
    }else if(type === 'approved'){
        endpoint = endpoint+'/approved';
    }else if(type === "unapproved"){
        endpoint = endpoint+'/unapproved';
    }else if(type === "blacklisted"){
        endpoint = endpoint+'/blacklisted';
    }
    props.dispatch(loadAction.Loading());
        return middleware.makeConnection(endpoint ,'GET').then((response) => response.json()).then((responseJson)=>{
            let datas =[];
            responseJson.map((row)=>{
                let arry = [];
                arry.push(row._id, row.general_info.company_name, row.general_info.contact_name, row.general_info.contact_phone,
                row.general_info.contact_email, row.status);
                datas.push(arry);
            });
            props.dispatch(receivedData(datas));
            props.dispatch(loadAction.LoadingSuccess());
        });
}

export function findVendorByUserId(props,userId){
    if(typeof(userId) == "undefined")return;
    let middleware = new MiddleWare(props.user.token);
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

export function findVendorById(props,vendorId){
    let middleware = new MiddleWare(props.user.token);
    props.dispatch(loadAction.Loading());
    return middleware.makeConnection('/vendors/one/'+vendorId,'GET').then((response) => {
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