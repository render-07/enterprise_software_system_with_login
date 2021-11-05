import { GET_SUPPLIERS, SUPPLIERS_LOADING } from '../types';

const initialState = {
    suppliers: [],
    loading: false
};

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload,
                loading: false
            }
        case SUPPLIERS_LOADING:
            return {
                ...state,
                loading: true
            }   
        default:
            return state;
    }
}