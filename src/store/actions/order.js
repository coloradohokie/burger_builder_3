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

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

const getOrdersSuccess = (orders) => {
    return {
        type: actionTypes.GET_ORDERS_SUCCESS,
        orders
    }
}

const getOrdersFail = (error) => {
    return {
        type: actionTypes.GET_ORDERS_FAIL,
        error
    }
}

const getOrdersStart = () => {
    return {
        type: actionTypes.GET_ORDERS_START
    }
}

export const getOrders = () => {
    return dispatch => {
        dispatch(getOrdersStart())
        axios.get('/orders.json')
            .then(response => {
                    const fetchedOrders = []     
                    for (let key in response.data) {
                        fetchedOrders.push({...response.data[key], id:key})
                    }
                    dispatch(getOrdersSuccess(fetchedOrders))
                })
            .catch(error => {
                console.error(error)
                dispatch(getOrdersFail(error))
            })
    }
}

