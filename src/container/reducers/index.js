import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import supplierReducer from './supplierReducer';

export default combineReducers({
    category: categoryReducer,
    item: itemReducer,
    supplier: supplierReducer
});