import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.scss'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component {
    state = {
        orderInfo: {
            name: '', 
            email: '',
            address: {
                street: '',
                postalCode: ''
            }
        },
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault()
        this.setState({
            loading: false
        })
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mike',
                address: {
                    street: 'TestStreet',
                    zipCode: '43334',
                    country: 'USA'
                },
                email: 'test@test.com'
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
                this.setState({loading: false})
            })

    }

    render() {
        let form = (
            <form> 
                <input className={classes.Input} type="text" name="name" placeholder="Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button buttonType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4> Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
