import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, CATEGORIES_LOADING } from '../types';

const initialState = {
    categories: [],
    loading: false
}

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case CATEGORIES_LOADING:
            return {
                ...state,
                loading: true
            }
        case DELETE_CATEGORY:
            return {
                 ...state, 
                 categories: state.categories.filter(category => category._id !== action.payload)
            }
        default:
            return state;
    }
}