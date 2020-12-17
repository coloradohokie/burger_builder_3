import * as actionTypes from './actionTypes'
import axios from 'axios'

export const addIngredient = (ingredient) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient
    }
}

export const removeIngredient = (ingredient) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient
    }
}

const storeIngredients = (ingredients) => {
    return {
        type: actionTypes.GET_INGREDIENTS,
        ingredients
    }
}

const storeIngredientsFailed = () => {
    return {
        type: actionTypes.GET_INGREDIENTS_FAILED
    }
}

export const getIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-builder-8a42d.firebaseio.com/ingredients.json/')
            .then (response => {
                dispatch(storeIngredients(response.data))
            })
            .catch(error => {
                console.error(error)
                dispatch(storeIngredientsFailed())
            })
    }
}
