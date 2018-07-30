import * as types from '../actions/index';
import StateLoader from "../middleware/stateLoader";

const stateLoader = new StateLoader();



export default function auth(state=[], action){

    switch(action.type){
        case types.USER_LOGGED_IN:
            return {...state, user: action.user, token:action.token, redirectToReferrer: true, isAuthenticated : true};
        case types.USER_LOGGED_OUT:
            state = undefined;
            console.log('here');
            stateLoader.unsetState();
            return {isAuthenticated:false}
        default:
            return state;
    }
}
