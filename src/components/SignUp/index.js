import React, { Component } from 'react'
import './styles.scss'
import FormInput from './../forms/FormInput'
import FormSelect from './../forms/FormSelect'
import Button from './../forms/Button'


class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassowrd: '',
            securityQuestion: '',
            securityAnswer: '',
            image: '',
            status: 'member'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const { name, email, password, confirmPassword, securityQuestion, securityAnswer, image} = this.state

        return ( 
            <div className="signup">
                <div className='wrap'>
                    <h2>Signup</h2>
                    <br/>
                    <form>

                        <FormInput
                            type='text'
                            name='name'
                            value={name}
                            placeholder="Full Name"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            type='email'
                            name='email'
                            value={email}
                            placeholder="Email Address"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            type='password'
                            name='password'
                            value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                         />
                         <FormSelect 
                            label = "Pick a Security Question"
                            name='securtiyQuetion'
                            onChange={this.handleChange}
                            options={['What is your favorite color?', 'What city were you born in?']}
                         />
                         <FormInput
                            type='text'
                            name='securityAnswer'
                            value={securityAnswer}
                            placeholder="Security Answer"
                            onChange={this.handleChange}
                         />
                         <FormInput
                            type='text'
                            name='image'
                            value={image}
                            placeholder="Link For Profile Pic"
                            onChange={this.handleChange}
                         />
                         
                        <Button type='submit'>
                            Sign Up
                        </Button>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup 
