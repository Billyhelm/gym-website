import React from 'react' 
import Button from '../../components/forms/Button'
import Cart from './../../components/Cart'


const Checkout = props => {

    const {cart, total, handleDelete} = props

    const submitOrder = () => {
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                sub_total: total,
                total,
                status: 'processing'
            })
            }
        ).then(res=>res.json()).then(order=> {
            fetch('http://localhost:3000/user_orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    order_id: order.id,
                    user_id: localStorage.id
                })})
                .then(res=>res.json()).then(user_order=>{

                    localStorage.order_id = user_order.order_id
                })
                .then(()=>{
                    async function send(cart) {
                        for (const product of cart){
                            console.log(product)
                            await fetch ('http://localhost:3000/order_items', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        Accept: 'application/json'
                                    },
                                    body: JSON.stringify({
                                        order_id: localStorage.order_id,
                                        product_id: product.id,
                                        size: product.size,
                                        amount: product.price
                        })})
                    }}
                send(cart)
            }).then(()=> window.location.href = `http://localhost:3001/products/`) 
    })
    }

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