import React from 'react'
import Cart from '../../components/Cart'
import VerticalSearch from './../../components/VerticalSearch'
import './styles.scss'
import { Link } from 'react-router-dom'
import CheckoutButton from '../../components/CheckoutButton'


const ProductShow = (props) => {
    const {product} = props.props.location.state
    const {cart, addToCart, total} = props
    console.log("product", product)
    return (
        <>
        <div className="sidebar">
            <VerticalSearch>
            <Link to='/products'><div className="sideBtn">
                    <a>Back To All</a></div></Link>
                <Cart products={cart} />
                <div className="total">Total ${total}</div>
                <CheckoutButton />
            </VerticalSearch>
        </div>
        <div className="productContainer">
        <h1> {product.name} </h1>
        <img src={product.image} /> 
        <h3> { product.description }</h3>
        <h3>Price: ${product.price}</h3>
        <h3>Click Below To Add To Cart</h3>
        {product.sizes.map(size=>{
            return <button onClick={() => addToCart(product, size.name)}>{size.name}</button>
        })}
        
        </div>
        </>
    )
}

export default ProductShow