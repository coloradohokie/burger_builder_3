import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import axios from 'axios'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'


class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount () {
        this.props.onGetIngredients()
    }

    updatePurchaseState() {
        const sum = Object.values(this.props.ingredients)
            .reduce((sum, element) => sum + element, 0)
        return sum > 0
    }

    purchaseHander = () => {
        this.setState({purchasing: true})
    }

    puchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }
        let orderSummary = null
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />
        if (this.props.ingredients) {
            orderSummary = <OrderSummary 
                    ingredients={this.props.ingredients}
                    price={this.props.totalPrice}
                    purchaseCanceled={this.puchaseCancelHandler} 
                    purchaseContinued={this.purchaseContinueHandler}/>
            burger = (
                <>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls 
                        ingredientAdded={this.props.onAddIngredient}
                        ingredientRemoved={this.props.onRemoveIngredient}
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        purchasable={this.updatePurchaseState()}
                        ordered={this.purchaseHander}
                    />
                </>
            )
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        
        return(
            <>
                <Modal show={this.state.purchasing} modalClosed={this.puchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetIngredients: () => dispatch(actions.getIngredients()),
        onAddIngredient: (ingredient) => dispatch(actions.addIngredient(ingredient)),
        onRemoveIngredient: (ingredient) => dispatch(actions.removeIngredient(ingredient))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))