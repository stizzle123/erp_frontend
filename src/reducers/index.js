import {combineReducers} from 'redux';
import vendor from './vendorReducer';

const indexReducer = combineReducers({
    vendor
});

export default indexReducer; 
