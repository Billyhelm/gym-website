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
        size1: '',
        quantity1: '',
        size2: '',
        quantity2: '',
        size3: '',
        quantity3: '',
        size4: '',
        quantity4: '',
        size5: '',
        quantity5: '',
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
        // const {size1, size2, size3, size4, size5, quantity1, quantity2, quantity3, quantity4, quantity5, errors} = this.state
        
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
        const {size1, size2, size3, size4, size5, quantity1, quantity2, quantity3, quantity4, quantity5, errors} = this.state
        
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
                         {/* <FormSelect 
                            label = "Select First Size to Add"
                            name='size1'
                            value={size1}
                            onChange={this.handleChange}
                            options={['XS', 'S', 'M', 'L', 'XL', 'One Size Fits All']}
                         />
                         <FormInput
                            type='number'
                            name='quantity1'
                            value={quantity1}
                            placeholder="Quantity of Above Size"
                            onChange={this.handleChange}
                         />
                        <FormSelect 
                            label = "Select Second Size to Add"
                            name='size2'
                            value={size2}
                            onChange={this.handleChange}
                            options={['XS', 'S', 'M', 'L', 'XL', 'One Size Fits All']}
                         />
                         <FormInput
                            type='number'
                            name='quantity2'
                            value={quantity2}
                            placeholder="Quantity of Above Size"
                            onChange={this.handleChange}
                         />
                         <FormSelect 
                            label = "Select Third Size to Add"
                            name='size3'
                            value={size3}
                            onChange={this.handleChange}
                            options={['XS', 'S', 'M', 'L', 'XL', 'One Size Fits All']}
                         />
                         <FormInput
                            type='number'
                            name='quantity3'
                            value={quantity3}
                            placeholder="Quantity of Above Size"
                            onChange={this.handleChange}
                         />
                         <FormSelect 
                            label = "Select Fourth Size to Add"
                            name='size4'
                            value={size4}
                            onChange={this.handleChange}
                            options={['XS', 'S', 'M', 'L', 'XL', 'One Size Fits All']}
                         />
                         <FormInput
                            type='number'
                            name='quantity4'
                            value={quantity4}
                            placeholder="Quantity of Above Size"
                            onChange={this.handleChange}
                         />
                         <FormSelect 
                            label = "Select Fifth Size to Add"
                            name='size5'
                            value={size5}
                            onChange={this.handleChange}
                            options={['XS', 'S', 'M', 'L', 'XL', 'One Size Fits All']}
                         />
                         <FormInput
                            type='number'
                            name='quantity5'
                            value={quantity5}
                            placeholder="Quantity of Above Size"
                            onChange={this.handleChange}
                         /> */}
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