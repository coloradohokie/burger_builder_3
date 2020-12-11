import React from 'react'

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
            <p>Continue to Checkout?</p>
        </>
    )
}

export default orderSummary