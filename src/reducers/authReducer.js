import * as types from '../actions/index';



export default function auth(state=[], action){

    switch(action.type){
        case types.USER_LOGGED_IN:
            return {...state, user: action.user, redirectToReferrer: true, isAuthenticated : true};
        case types.USER_LOGGED_OUT:
            state = undefined;
            return {isAuthenticated:false}
        default:
            return state;
    }
}