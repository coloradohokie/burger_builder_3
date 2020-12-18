import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility'

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.PUSH_ORDER_START: return pushOrderStart(state, action)
        case actionTypes.PUSH_ORDER_SUCCESS: return pushOrderSuccess(state, action)
        case actionTypes.PUSH_ORDER_FAILED: return pushOrderFailed(state, action)
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action)
        case actionTypes.GET_ORDERS_SUCCESS: return getOrdersSuccess(state, action)
        case actionTypes.GET_ORDERS_FAIL: return getOrdersFail(state, action)
        case actionTypes.GET_ORDERS_START: return getOrdersStart(state, action)
        default: return state
    }
}

// Reducer functions

function pushOrderStart (state, action) {
    return updateObject(state, {loading: true})
}

function pushOrderSuccess (state, action) {
    const newOrder = updateObject(action.orderData, {id: action.orderId.name})
    const orders = state.orders.concat(newOrder)
    return updateObject(state, {loading: false, purchased: true, orders})
}

function pushOrderFailed (state, action) {
    return updateObject(state, {loading:false})
}

function purchaseInit (state, action) {
    return updateObject(state, {purchased: false})
}

function getOrdersSuccess (state, action) {
    return updateObject(state, {orders: action.orders, loading:false})
}

function getOrdersFail (state, action) {
    return updateObject(state, {loading: false})
}

function getOrdersStart (state, action) {
    return updateObject(state, {loading:true})
}

export default reducer
