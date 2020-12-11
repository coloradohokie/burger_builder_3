import React, {Component} from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = this.state.ingredients[type] + 1
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        if (updatedIngredients[type] <= 0) return
        updatedIngredients[type] = this.state.ingredients[type] - 1
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients)
            .reduce((sum, element) => sum + element, 0)
        this.setState({purchasable: sum > 0})
    }

    purchaseHander = () => {
        this.setState({purchasing: true})
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }
        return(
            <>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHander}
                />
            </>
        )
    }
}

export default BurgerBuilder