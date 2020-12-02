import React, { Component } from 'react' 
import './styles.scss'

const DetailCard = ({item}) => {
    return (
    <div className="orderItem">
        <div className="pic"><img src={item.product.image} /></div>
        <div className="text">
            {item.product.name}<br/><br/>
            ${item.product.price}  -  Size: {item.size}
        
        </div>
        
    </div>
    )
}

export default DetailCard