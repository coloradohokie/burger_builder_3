import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'


class Checkout extends Component {
    checkoutCanceledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ingredients}
                    onCheckoutCanceled = {this.checkoutCanceledHandler}
                    onCheckoutContinued = {this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data/'} 
                    component={ContactData} />
            </div>
        )
    }



}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout)