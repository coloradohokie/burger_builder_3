import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Orders extends Component {
    componentDidMount() {
        this.props.onGetOrders()
    }


    render() {
        if (this.props.loading) return <Spinner />
        return(
            <div>
                {this.props.orders.map(order => (
                    <Order 
                        key={order.id} 
                        price={order.price} 
                        ingredients={order.ingredients} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetOrders: () => dispatch(actions.getOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)