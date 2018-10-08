import { USER_LOGIN,USER_LOGOUT } from './index';
import MiddleWare from "../middleware/api";

export function getProfileDetails(id){
    let middleware = new MiddleWare();
    let data = {};
        data.id = id;
    middleware.makeConnection('/users/getprofiledetails/'+data,'GET').then((response) => {
          return response.json();
    }).catch((e)=>{
        console.log(e);
      })
}

export function updateProfile(data, callback){
    let middleware = new MiddleWare();
    console.log("from action"+data)
    middleware.makeConnection('/users/updateprofiledata','PUT', data).then((res)=>{
      return res.json()
    }).then((e)=>{
      callback(e);
    }).catch((e)=>{
      console.log("the error" + e);
    })
}
