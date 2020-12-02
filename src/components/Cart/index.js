import React, { Component } from 'react' 
import './styles.scss'
import Button from '../../components/forms/Button'



const Cart = props => {
    const {products, page, handleDelete} = props

    
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
                            <div className="delete">
                            {page ? <button onClick={()=>handleDelete(product.id, product.price)}>Delete Me</button> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


export default Cart