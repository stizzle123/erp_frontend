import { USER_LOGIN, USER_LOGOUT } from './index';
import MiddleWare from "../middleware/api";


export function submitPasswordResetRequest(email, callback){
    let middleware = new MiddleWare();
    let data = {};
    data.email = email;
    middleware.makeConnection('/users/requestResetToken','PUT', data).then((res)=>{
      return res.json()
    }).then((e)=>{
      callback(e);
    }).catch((e)=>{
      console.log("the error" + e);
    })
}

export function resetPassword(data, token, callback){
  let middleware = new MiddleWare();
  middleware.makeConnection('/users/resetthepassword/'+token,'PUT', data).then((res)=>{
    return res.json();
  }).then((e)=>{
    callback(e);
  }).catch((e)=>{
    console.log(e);
  })}

  export function changePassword(data , id, callback){
    let middleware = new MiddleWare();
    data.id = id;
    middleware.makeConnection('/users/changeyourpassword/','PUT', data).then((res)=>{
      return res.json();
    }).then((e)=>{
      callback(e);
    }).catch((e)=>{
      console.log(e);
    })}

  export function checktoken(token, callback){
    let middleware = new MiddleWare();
    middleware.makeConnection('/users/confirmtoken/'+token,'GET').then((response) => {
          return response.json();
    }).then((e)=>{
      callback(e);
    })
}
