import {combineReducers} from 'redux';
import vendor from './vendorReducer';
import vendors from './vendorsReducer';
import auth from './authReducer';
import loader from './loaderReducer';

const indexReducer = combineReducers({
    vendor, auth, loader, vendors
});

export default indexReducer; 
