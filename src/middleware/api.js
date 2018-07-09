"use strict"

class MiddleWare{
    
    constructor(){
        this.api_root = "http://127.0.0.1:3000"    
    }

    makeConnection(endpoint, httpVerb, body=''){
        const bodyProp = {};
        (body)? bodyProp[body] = JSON.stringify(body) : '';
       return fetch(this.api_root+endpoint, {
            method: httpVerb,
            mode: "cors",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            bodyProp
        });
    }
}

export default MiddleWare;

