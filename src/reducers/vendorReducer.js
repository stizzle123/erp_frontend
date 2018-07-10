import {FETCH_DATA, RECEIVED_DATA} from '../actions/index';


export default function vendor(state = [], action){
    let newState;
    switch(action.type){
        case FETCH_DATA:
            console.log('FETCH_DATA action')
        return action;
        case RECEIVED_DATA:
            newState = action.data;
            console.log("receive data action");
            return newState;
        default:
        return state;
    }
}