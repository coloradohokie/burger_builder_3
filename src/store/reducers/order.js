import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    loading: false
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
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.PUSH_ORDER_FAILED:
            return {
                ...state,
                loading: false
            }
        default: return state
    }
}

export default reducer
