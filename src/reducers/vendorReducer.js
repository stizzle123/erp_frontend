import * as types from '../actions/index';


export default function vendor(state=[] , action){
    switch(action.type){
        case types.FETCH_DATA:
            console.log('FETCH_DATA action')
        return action;
        case types.RECEIVED_DATA:
            return {...state, data:action.data};
        case types.VENDOR_DATA:
            return {...state, datum:action.data};
        case types.SHOW_VENDOR_PART:
            console.log(state, action)
            return {...state};
        default:
        return {...state};
    }
}