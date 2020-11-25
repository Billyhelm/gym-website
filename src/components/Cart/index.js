import React, { Component } from 'react' 
import './styles.scss'

const Cart = props => {
    const {products} = props
    
        return(
            <div className="cartContainer">
                <h1>Cart</h1>
                {products.map(product => {
                    return(
                        <div className="cartItem">
                            <div className="pic"><img src={product.image} /></div>
                            <div className="text">
                                {product.name}<br/><br/>
                                ${product.price}  -  Size: {product.size}
                            
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        )
    }


export default Cart