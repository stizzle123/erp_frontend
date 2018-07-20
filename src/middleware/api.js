"use strict"

class MiddleWare{
    
    constructor(token=""){
        this.api_root = "http://127.0.0.1:3000"    ;
        this.token = token;
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
                    'Authorization': "Bearer "+this.token
                }
            }
        }else{
            option =  {
                method: httpVerb,
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+this.token
                },
                body: JSON.stringify(body)
            }
        }
        return fetch(this.api_root+endpoint, option).catch((e)=>{console.log(e)});
    }

}

export default MiddleWare;

