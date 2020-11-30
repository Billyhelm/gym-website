import React, {Component} from 'react'
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import Button from '../forms/Button'
import './styles.scss'
import {Link, Redirect} from 'react-router-dom'

class EditForm extends Component {

    
    initialState = {
        name: '',
        color: '',
        gender: '',
        price: '',
        image: '',
        description: '',
        id: '',
        errors: []
    }
    constructor(props){
        super(props)
    this.state={
        errors: [], ...this.initialState
    }}

    componentDidMount(){
        console.log("I am mounting", this.props)
        const id = this.props.props.match.params.id
        fetch(`http://localhost:3000/products/${id}`).then(res=>res.json()).then(data=>{
            const {name, color, gender, price, image, description} = data
            this.setState({
                name, color, gender, price, image, description, id
            })
        })

    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const {name, color, gender, price, image, description} = this.state
        
        fetch(`http://localhost:3000/products/${this.state.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name,
                color,
                price,
                image,
                description,
                gender
            })
            }
        ).then(res => res.json())
        // <Link to={{pathname:`/products/${product.id}`, state: {product}}}>
           
        .then((data)=>{
            // console.log(data)
            // this.location.state.product=data
            // window.location.href = `http://localhost:3001/products/`
            // this.setState(this.initialState)
        })

    }

    render(){

        const {name, color, price, image, description, errors} = this.state
      
        
        return(
            <div className="signup">
                <div className='wrap'>
                    <h2>Edit Product</h2>
                    <br/>

                    {/* {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )} */}

                    <form onSubmit={(e)=>this.handleFormSubmit(e)}>

                        <FormInput
                            label='Name'
                            type='text'
                            name='name'
                            value={name}
                            placeholder="Product Name"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            label='Color'
                            type='text'
                            name='color'
                            value={color}
                            placeholder="Color"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            label='Price'
                            type='float'
                            name='price'
                            value={price}
                            placeholder="Price $$$"
                            onChange={this.handleChange}
                         />
                        <FormInput
                            label='Image Link'
                            type='text'
                            name='image'
                            value={image}
                            placeholder="Link For Pic"
                            onChange={this.handleChange}
                        />
                         <FormInput
                            label='Description'
                            type='textbox'
                            name='description'
                            value={description}
                            placeholder="Description"
                            onChange={this.handleChange}
                         />
                         
                        <Button type='submit'>
                            Update Product
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditForm