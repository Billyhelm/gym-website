import React, { Component } from 'react' 
import VerticalSearch from './../../components/VerticalSearch'
import AdminOrders from '../../components/AdminOrders'
import './styles.scss' 
import Button from '../../components/forms/Button'
import FormInput from './../../components/forms/FormInput'
import Status from '../../components/forms/Status'


class Admin extends Component{
    state = {
        orders: [],
        selectedOrder: {},
        filterTerm: '',
        searchTerm: ''
    }

    componentDidMount(){
        fetch(`http://localhost:3000/user_orders/`)
        .then(res=>res.json()).then(orders=> {
            this.setState({orders})
        })
    }

    handleSelect = (order) => {
        this.setState({selectedOrder: order})
    }

    handleFilter = (word) => {
        this.setState({filterTerm: word})
    }

    handleSearch = (e) => {
        const word = e.target.value
        this.setState({searchTerm: word})
    }

    handleSubmit = (status, user_order) => {

        console.log('order', user_order, 'value', status)
        fetch(`http://localhost:3000/orders/${user_order.order.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                status,
                user_order_id: user_order.id
        })
        }).then(res=>res.json()).then(data=>{
            this.setState({orders: this.state.orders.map(order=>order.id===data.id ? data : order)})
        })
    }

    filteredOrders = () => {
           const {orders, filterTerm, searchTerm} = this.state
        return orders.filter(order => order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) && order.order.status.includes(filterTerm))
    }

render () {
    return (
        <>
        <div className='sidebar'>
            <VerticalSearch>
                <Button>Orders</Button>
                <br/>
                <FormInput
                            label='Search For Name'
                            type='text'
                            name='search'
                            placeholder="Search"
                            onChange={this.handleSearch}
                         />
                    <br/>
                <Status handleFilter={this.handleFilter}/>
            </VerticalSearch>
        </div>
        <div className='productContainer'>
            <AdminOrders orders={this.filteredOrders()} handleSubmit={this.handleSubmit}/>
        </div>
        </>
    )
}}

export default Admin 
