import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const pushOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.PUSH_ORDER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const pushOrderFailed = (error) => {
    return {
        type: actionTypes.PUSH_ORDER_FAILED,
        error: error
    }
}

export const pushOrderStart = () => {
    return {
        type: actionTypes.PUSH_ORDER_START
    }
}

export const pushOrder = ( orderData) => {
    return dispatch => {
        dispatch(pushOrderStart())
        axios.post('/orders.json', orderData)
        .then(response => {
            console.log(response)
            dispatch(pushOrderSuccess(response.data, orderData))

        })
        .catch(error => {
            console.log(error)
            dispatch(pushOrderFailed (error))
        })
    }
}