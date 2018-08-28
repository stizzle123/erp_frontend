import * as types from '../actions/index';

export default function vendors(state={}, action){
    switch(action.type){
        case types.FETCH_VENDORS:
        return action.data;
        case types.DELETE_VENDOR:

        return;
        case types.APPROVE_VENDOR:

        return ;
        default:
        return state;

    }
}