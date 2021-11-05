import { ADD_ITEM, GET_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    // return {
    //     type: GET_ITEMS
    // }
    dispatch(setItemsLoading());
    axios
        .get('http://localhost:4000/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    )
}

export const addItem = (item) => dispatch => {
    // return {
    //     type: ADD_ITEM,
    //     payload: item // passing some parameters need to be in the payload
    // }
    axios
        .post('http://localhost:4000/api/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}

