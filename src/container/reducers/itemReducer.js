import { ADD_ITEM, GET_ITEMS, ITEMS_LOADING } from '../types';

const initialState = {
    items: [],
    loading: false
};

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }   
        default:
            return state;
    }
}