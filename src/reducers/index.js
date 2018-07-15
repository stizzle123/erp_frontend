import {combineReducers} from 'redux';
import vendor from './vendorReducer';
import auth from './authReducer';
import loader from './loaderReducer';

const indexReducer = combineReducers({
    vendor, auth, loader 
});

export default indexReducer; 
