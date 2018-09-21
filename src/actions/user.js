import { USER_LOGIN, USER_LOGOUT } from './index';
import MiddleWare from "../middleware/api";


export function submitPasswordResetRequest(email){
    let middleware = new MiddleWare();
    let data = {};
    data.email = email;
    middleware.makeConnection('/users/requestResetToken','POST', data).then(()=>{
        console.log("message sent")
    }).catch((e)=>{
      console.log("the error" + e);
    })
}