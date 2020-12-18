import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility'

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
        case actionTypes.GET_INGREDIENTS: return getIngredients(state, action)    
        case actionTypes.GET_INGREDIENTS_FAILED: return getIngredientsFailed(state, action)
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        default: return state
    }
}

// Reducer Functions

function getIngredients (state, action) {
    const ingredients = updateObject(state.ingredients, {
        salad: action.ingredients.salad, 
        bacon: action.ingredients.bacon, 
        cheese: action.ingredients.cheese, 
        meat: action.ingredients.meat
    })        
    return updateObject(state, {ingredients, error: false, totalPrice: 5})
}

function getIngredientsFailed (state, action) {
    return updateObject(state, {error: true})
}

function addIngredient (state, action) {
    const updatedIngredient = {[action.ingredient]: state.ingredients[action.ingredient] + 1}
    const ingredients = updateObject(state.ingredients, updatedIngredient)
    const totalPrice = state.totalPrice + INGREDIENT_PRICES[action.ingredient]
    return updateObject(state, {totalPrice, ingredients})
}

function removeIngredient (state, action) {
    const updatedIngredient = {[action.ingredient]: state.ingredients[action.ingredient] - 1}
    const ingredients = updateObject(state.ingredients, updatedIngredient)
    const totalPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredient]
    return updateObject(state, {totalPrice, ingredients})
}


export default reducer