const AclAuth = {
    authenticate(username, password, cb) {
      let user = {};
      if(username === "admin" && password === "password"){
        user = {id: 1, username:"admin", role: "admin", email: "admin@russelsmithgroup.com"};
      }else if(username === "vendor" && password === "password"){
        user = {id: 2, username:"vendor", role: "vendor", email: "vendor@russelsmithgroup.com"};
      }else if(username === "procurement" && password === "password"){
        user = {id: 3, username:"pr", role: "pr", email: "admin@russelsmithgroup.com"};
      }else if(username === "iac" && password === "password"){
        user = {id: 3, username:"iac", role: "iac", email: "iac@russelsmithgroup.com"};
      }
      setTimeout(cb(user), 100) // fake async
    },
    signout(cb) {
      setTimeout(cb, 100) // fake async
    }
}
export default AclAuth;