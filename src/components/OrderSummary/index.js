import React, { Component } from 'react' 
import './styles.scss'


const OrderSummary = props => {
    const {orders, handleSelect} = props

    
        return(
            <div className="cartContainer">
                <h1>All Orders</h1>
                {orders.map(order => {
                    return(
                        <div className="summaryItem" onClick={()=> handleSelect(order)}>
                            <div className="text">
                                Order ID: {order.id}
                            </div>
                            <div className="status"> 
                            Status: {order.order.status}
                            </div>
                            <div className="price"> 
                            ${order.order.total}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


export default OrderSummary