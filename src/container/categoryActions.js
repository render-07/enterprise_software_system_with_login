import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, CATEGORIES_LOADING } from './types';
import axios from 'axios';

export const getCategories = () => dispatch => {
    // return {
    //     type: GET_CATEGORIES
    // }
    dispatch(setCategoriesLoading());
    axios
        .get('http://localhost:4000/api/categories')
        .then(res => dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        })
    )
}

export const addCategory = (category) => dispatch => {
    // return {
    //     type: ADD_CATEGORY,
    //     payload: category // passing some parameters need to be in the payload
    // }
    axios
        .post('http://localhost:4000/api/categories', category)
        .then(res => dispatch({
            type: ADD_CATEGORY,
            payload: res.data
        }))
}

export const deleteCategory = (id) => dispatch => {
    // return {
    //     type: DELETE_CATEGORY,
    //     payload: id // passing some parameters need to be in the payload
    // }
    axios
        .delete(`http://localhost:4000/api/categories/${id}`)
        .then(res => dispatch({
            type: DELETE_CATEGORY,
            payload: id
        }))
}

export const setCategoriesLoading = () => {
    return {
        type: CATEGORIES_LOADING
    }
}