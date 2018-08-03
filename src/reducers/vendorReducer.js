import * as types from '../actions/index';
let datum = {general_info:{}, business_info:{}, work_references:{}, tech_capability:{}}

export default function vendor(state={datum:datum,} , action){
    switch(action.type){
        case types.FETCH_DATA:
            console.log('FETCH_DATA action')
        return action;
        case types.RECEIVED_DATA:
            return {...state, data:action.data};
        case types.VENDOR_DATA:
            return {...state, datum:action.data};
        case types.SHOW_VENDOR_PART:
            return state;
        default:
        return state;
    }
}
