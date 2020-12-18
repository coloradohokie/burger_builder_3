import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.PUSH_ORDER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PUSH_ORDER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId.name
            }
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.PUSH_ORDER_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.PURCHASE_INIT:

            return {
                ...state,
                purchased: false
            }
        default: return state
    }
}

export default reducer
