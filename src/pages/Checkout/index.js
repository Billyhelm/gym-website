import React from 'react' 
import Button from '../../components/forms/Button'
import Cart from './../../components/Cart'


const Checkout = props => {

    const {cart, total, handleDelete, submitOrder} = props

    return (
        <div><Cart products={cart} page={true} handleDelete={handleDelete}/>
        <div className="total">Total ${total}</div>
        <Button onClick={()=>submitOrder()}>
            Submit Order
        </Button>
        </div>
    )
}

export default Checkout