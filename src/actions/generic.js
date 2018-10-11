import * as loadAction from './loading';
import MiddleWare from "../middleware/api";


export function fetchAll(type, callback){
    let m = new MiddleWare();
    return m.makeConnection('/'+type+'/', m.GET).then((response) => {
        return response.json()
    }).then(        
        (responseJson)=>{
            callback(responseJson);
        }
    );
}

export function saveItem(type, data, callback){
    let m = new MiddleWare();
    return m.makeConnection('/'+type+'/add/', m.POST, data).then((result) => {
        (result)=>{
            if(result.ok && result.statusText == "OK" && result.status == 200 )         
            callback(result.ok);
        }
    });   
}

export function deleteItem(type, id, callback){ 
    let m = new MiddleWare();
    return m.makeConnection('/'+type+'/delete/', m.DELETE , {id:id}).then((result) => {
        (result)=>{
            if(result.ok && result.statusText == "OK" && result.status == 200 )         
            callback(result.ok);
        }
    });   
}