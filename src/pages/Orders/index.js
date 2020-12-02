import React, { Component } from 'react' 
import OrderSummary from '../../components/OrderSummary'
import VerticalSearch from './../../components/VerticalSearch'
import OrderDetails from '../../components/OrderDetails'


class Orders extends Component {
    state = {
        order: [],
        selectedOrder: {}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/user_orders/${localStorage.id}`)
        .then(res=>res.json()).then(orders=> {
            this.setState({order: orders, selectedOrder: orders[orders.length-1]})
        })
    }

    handleSelect = (order) => {
        this.setState({selectedOrder: order})
    }


    render () {

        const {order, selectedOrder} = this.state

        const message = selectedOrder === order[order.length-1] ? 'Your Latest Order' : 'Selected Order'
    return (
        <>
        <div className='sidebar'>
            <VerticalSearch>
                <OrderSummary handleSelect={this.handleSelect} orders={this.state.order}/>
            </VerticalSearch>
        </div>
        <div className='productContainer'>
            <OrderDetails selectedOrder={this.state.selectedOrder} message={message}/>
        </div>
        </>
    )
    }
}

export default Orders 
