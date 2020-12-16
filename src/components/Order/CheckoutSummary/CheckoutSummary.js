import React from 'react'
import Burger from '../../Burger/Burger'
import classes from './CheckoutSummary.module.scss'
import Button from '../../UI/Button/Button'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button buttonType="Danger" clicked={props.onCheckoutCanceled}>Cancel</Button>
            <Button buttonType="Success"clicked={props.onCheckoutContinued}>Continue</Button>
        </div>
    )
}

export default checkoutSummary