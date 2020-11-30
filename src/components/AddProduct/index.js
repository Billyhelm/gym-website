import React, {Component} from 'react'
import FormInput from './../forms/FormInput'
import FormSelect from './../forms/FormSelect'
import Button from './../forms/Button'
import './styles.scss'
import {Link, Redirect} from 'react-router-dom'

class AddProduct extends Component {
    
    initialState = {
        name: '',
        color: '',
        gender: '',
        price: '',
        image: '',
        description: '',
        category: '',
        gyms: '',
        errors: []
    }
    
    state={
        ...this.initialState
    }
     


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const {name, color, gender, price, image, description, category, gyms} = this.state
        
        fetch('http://localhost:3000/products', {
            method: 'POST',
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
        .then(data=> {
             fetch('http://localhost:3000/product_categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    product_id: data.id,
                    category
                })
            }) 
            .then(() => {
             return fetch('http://localhost:3000/product_gyms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    product_id: data.id,
                    gyms 
            })})})
            this.setState(this.initialState)
            
      
        })

    }

    render(){

        const {name, color, gender, price, image, description, category, gyms} = this.state
        const {errors} = this.state
        
        return(
            <div className="signup">
                <div className='wrap'>
                    <h2>Add New Product</h2>
                    <br/>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}

                    <form onSubmit={this.handleFormSubmit}>

                        <FormInput
                            type='text'
                            name='name'
                            value={name}
                            placeholder="Product Name"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            type='text'
                            name='color'
                            value={color}
                            placeholder="Color"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            type='float'
                            name='price'
                            value={price}
                            placeholder="Price $$$"
                            onChange={this.handleChange}
                         />
                        <FormInput
                            type='text'
                            name='image'
                            value={image}
                            placeholder="Link For Pic"
                            onChange={this.handleChange}
                        />
                         <FormInput
                            type='textbox'
                            name='description'
                            value={description}
                            placeholder="Description"
                            onChange={this.handleChange}
                         />
                          <FormSelect 
                            label = "Choose a Gender"
                            name='gender'
                            value={gender}
                            onChange={this.handleChange}
                            options={['Female', 'Male', 'Female & Male']}
                         />
                         <FormSelect 
                            label = "Choose a Category"
                            name='category'
                            value={category}
                            onChange={this.handleChange}
                            options={['Tank', 'Tee', 'Jacket', 'Accessory']}
                         />
                         <FormSelect 
                            label = "Choose a Gym"
                            name='gyms'
                            value={gyms}
                            onChange={this.handleChange}
                            options={['F45 Cinco Ranch', 'F45 Midtown', 'F45 Kelliwood', 'All Gyms']}
                         />
                         
                        <Button type='submit'>
                            Add Product
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct