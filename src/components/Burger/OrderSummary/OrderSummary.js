import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary] DidUpdate')
    }

    render() {
        const ingedientSummary = Object.entries(this.props.ingredients)
            .map((entry) => {
                const [name, amount] = entry
                return (
                    <li key={name}>
                        <span style={{textTransform: 'capitalize'}}>{name}</span>: {amount}
                    </li>
                )
            })
    
        return(
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingedientSummary}
                </ul>
                <p><strong>Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button buttonType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button buttonType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </>
        )

    }
}

export default OrderSummary