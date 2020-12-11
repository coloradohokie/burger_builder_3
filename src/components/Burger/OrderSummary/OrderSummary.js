import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingedientSummary = Object.entries(props.ingredients)
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
            <p><strong>Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button buttonType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </>
    )
}

export default orderSummary