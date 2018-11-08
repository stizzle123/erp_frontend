import * as loadAction from "./loading";
import MiddleWare from "../middleware/api";

export function findDepartmentById(props, departmentId, callback) {
  let middleware = new MiddleWare(props.user.token);
  props.dispatch(loadAction.Loading());
  return middleware
    .makeConnection("/departments/edit/" + departmentId, "GET")
    .then(response => {
      return response.json();
    })
    .then(json => {
      callback(json);
      props.dispatch(loadAction.LoadingSuccess());
    });
}

export function updateDepartment(props, data, callback) {
  let middleware = new MiddleWare(props.user.token);
  middleware.makeConnection("/departments/update", "PUT", data)
    .then(res => {
      return res.json();
    })
    .then(e => {
      callback(e);
    })
    .catch(e => {
      console.log("the error" + e);
    });
}
