import { LOADING_REQUEST, LOADING_REQUEST_SUCCESS, LOADING_REQUEST_FAILURE } from './index';

export const Loading = ()=>{
    return {type: LOADING_REQUEST};
}

export function LoadingSuccess(msg){
    return {type: LOADING_REQUEST_SUCCESS, message: msg};
}

export function LoadingFailure(msg){
    return {type: LOADING_REQUEST_FAILURE, message: msg};
}

