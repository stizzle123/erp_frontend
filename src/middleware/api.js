"use strict"

class MiddleWare{
    
    constructor(){
        this.api_root = "http://127.0.0.1:3000"    
    }

    makeConnection(endpoint, httpVerb, body=''){
        let option = {};
        (body)? JSON.stringify(body) : '';
        if(httpVerb === "GET" || httpVerb === "HEAD"){
            option =  {
                method: httpVerb,
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        }else{
            option =  {
                method: httpVerb,
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        }
        return fetch(this.api_root+endpoint, option).catch((e)=>{console.log(e)});
    }

}

export default MiddleWare;

