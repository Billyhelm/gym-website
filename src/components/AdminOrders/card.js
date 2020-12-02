import React, { Component } from 'react' 
import './styles.scss'
import DetailCard from './../OrderDetails/card'
import FormSelect from '../forms/FormSelect'


class AdminOrderCard extends Component{
    state = {
        toggle: false
    }

    // componentDidMount(){
    //     this.setState({status: this.props.order.order.status})
    // }
    render(){
        const {order, handleSubmit} = this.props
        const {toggle} = this.state

        const handleToggle = () =>{
            this.setState({toggle: !this.state.toggle})
        }

        const handleForm = (e) => {
            e.preventDefault()
            const status = e.target.value
            handleSubmit(status, order)
            // fetch(`http://localhost:3000/orders/${order.order.id}`,{
            //     method: 'PATCH',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         Accept: 'application/json'
            //     },
            //     body: JSON.stringify({
            //         status
            // })
            // })
            // this.setState({status})
        }
    return(
        <div>

            <div className={!toggle ? "summaryItem" : "fullItem"} >
                <div onClick={()=>handleToggle()}>
                    <div className="name"> 
                    Name: {order.user.name} 
                    </div>
                    <div className="text">
                    Order ID: {order.id}
                    </div>
                    <div className="status"> 
                    Status: {order.order.status} 
                    </div>
                    <div className="price"> 
                    ${order.order.total}
                    </div>
                    <div > 
                    <img src={order.user.image} className='pic'/>
                    </div>
                    {!toggle ? null : 
                    order.order_items.map(item => {
                        return ( <DetailCard item={item} />)
                    })
                }
                </div>
            {!toggle ? null : <FormSelect 
                label = "Change Status"
                name='status'
                // value={securityQuestion}
                onChange={handleForm}
                options={['processing', 'recieved', 'ready for pickup', 'picked up']}
                />}
            </div>
        </div>
        )
    }
}

export default AdminOrderCard