import React from 'react' 
import './styles.scss'
import DetailCard from './card'

const OrderDetails = ({selectedOrder, message}) => {
    return (
        <>
        { selectedOrder && !selectedOrder.id ? null : 

        <div className="cartContainer">
            <h1>{message}</h1>
                <div className="title">
                    Order ID: {selectedOrder.id}
                </div>
                <div className="status"> 
                    Status: {selectedOrder.order.status.toUpperCase()}
                </div>
        
                {selectedOrder.order_items.map(item => {
                    return ( <DetailCard item={item} />)
                })}
            
                <div className="total"> 
                Total: ${selectedOrder.order.total}
                </div>
            </div>
} </>
    )
}

export default OrderDetails