import * as types from '../actions/index';



export default function loader(state=[], action){
    
    switch(action.type){
        case types.LOADING_REQUEST:
            return {loading: true};
        case types.LOADING_REQUEST_SUCCESS:
            return {loading: false, error: false, message: action.message};
        case types.LOADING_REQUEST_FAILURE:
            return {loading: false, error: true, message:action.message};           
        default:
            return state;
    }
}