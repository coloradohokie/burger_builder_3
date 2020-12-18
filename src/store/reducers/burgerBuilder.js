import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: null,
    totalPrice: 5,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false,
                totalPrice: 5
            }

        case actionTypes.GET_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }

        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                }
            }
        
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredient],
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] - 1
                }
            }

        default: return state
    }
}

export default reducer