import * as types from '../actions/index';
let data = {general_info:{}, business_info:{}, work_references:{}, tech_capability:{}}

export default function vendor(state = data , action){
    switch(action.type){
        case types.ADD_VENDOR:

        return action;
        case types.UPDATE_VENDOR:
            return {...state, ...action.data};
        case types.FETCH_VENDOR:
            return action.data;
        default:
        return state;
    }
}
