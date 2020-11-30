import React from 'react'
import Cart from '../../components/Cart'
import VerticalSearch from './../../components/VerticalSearch'
import './styles.scss'
import { Link, Redirect, useHistory } from 'react-router-dom'
import CheckoutButton from '../../components/CheckoutButton'
import FormInput from './../../components/forms/FormInput'
import FormSelect from './../../components/forms/FormSelect'
import Button from './../../components/forms/Button'
// import { createBrowserHistory } from 'history'

const ProductShow = (props) => {
    const {product} = props.props.location.state
    const {cart, addToCart, total, handleRefresh} = props
    const history = useHistory()

    const handleAdd = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/quantities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                size: e.target.size.value,
                amount: e.target.quantity.value,
                product: product.id
        })
    }).then((quant)=> product.quantities.push(quant))
}

    const handleDelete = () => {
        fetch(`http://localhost:3000/products/${product.id}`, {
            method: 'DELETE'
        }).then(()=> history.push('/products'))
    }
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
        {product.quantities.map(quantity=>{
            return <button onClick={() => addToCart(product, quantity.size.name)}>
                 {localStorage && localStorage.status == 'admin' ? (`${quantity.size.name} - ${quantity.amount}`) : quantity.size.name}
                </button>
        })}
        {localStorage && localStorage.status == 'admin' ? 
        <div className="addQuantity">
            <form onSubmit={(e)=>handleAdd(e)}>
                <br/>
                <h1>Add More to Inventory</h1>
            <FormSelect 
                name='size'
                options={['XS', 'S', 'M', 'L', 'XL', 'One Size Fits All']}
                />
            <FormInput
                type='number'
                name='quantity'
                placeholder="Quantity"
            />
            <Button type='submit'>
                Add Product
            </Button>
            </form>
           
            <Button onClick={()=>handleDelete()}>
                Delete Product
            </Button>

            <Link to={`/products/${product.id}/edit`} >
                <Button >
                    Edit Product
                </Button>
            </Link>
        </div>
        : null }
        </div>
        </>
    )
}

export default ProductShow