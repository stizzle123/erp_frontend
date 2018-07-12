import {combineReducers} from 'redux';
import vendor from './vendorReducer';
import auth from './authReducer';

const indexReducer = combineReducers({
    vendor, auth
});

export default indexReducer; 
