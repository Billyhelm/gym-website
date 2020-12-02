import React, { Component } from 'react' 
import './styles.scss'
import AdminOrderCard from './card'


const AdminOrders = props => {
    const {orders, handleSubmit} = props

    
        return(
            <div className="adminOrderContainer">
                <h1>All Orders</h1>
                {orders.map(order => { 
                return <AdminOrderCard order={order} status={order.order.status} handleSubmit={handleSubmit}/>}
                )}
            </div>
        )
    }


export default AdminOrders