import React, { Component } from 'react'
import './styles.scss'
import FormInput from './../forms/FormInput'
import FormSelect from './../forms/FormSelect'
import Button from './../forms/Button'
import App, { handleLogin } from './../../App'


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
            status: 'member',
            errors: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount(){
    //     fetch('http://localhost:3000/api/v1/login', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Accept: 'application/json'
    //         },
    //         body: JSON.stringify({
    //           user: {
    //             // name: "justin",
    //             password: "whatscooking",
    //             // security_question: 'What is your favorite color?',
    //             // security_answer: 'blue',
    //             email: 'billy@email.com',
    //             // status: 'member',
    //             // image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg"
    //           }
    //         })
    //       })
    //         .then(r => r.json())
    //         .then(user => {
    //             return (
    //                 fetch('http://localhost:3000/api/v1/profile', {
    //                     method: 'GET',
    //                     headers: {
    //                       Authorization: `Bearer ${user.jwt} `
    //                     }
    //                   }) 
    //             )
    //         })
    //     .then(res=>res.json()).then(data => console.log(data.user.name))

    //     }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault()
        const {name, email, password, confirmPassword, securityQuestion, securityAnswer, image} = this.state

        if (password !== confirmPassword){
            const err = ["Passwords Don't match"]
            this.setState({
                errors: err
            })
            return
        }

        try {

            fetch('http://localhost:3000/api/v1/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    name,
                    email, 
                    password, 
                    securityQuestion,
                    securityAnswer,
                    image
                  }
                })
              }) .then(r => r.json())
              .then(user => {
                  return (
                      fetch('http://localhost:3000/api/v1/profile', {
                          method: 'GET',
                          headers: {
                            Authorization: `Bearer ${user.jwt} `
                          }
                        }) 
                  )
              })
          .then(res=>res.json()).then(data => handleLogin(data.user))
          .then(this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassowrd: '',
            securityQuestion: '',
            securityAnswer: '',
            image: '',
            status: 'member',
            errors: []
          }))

        } catch(err){
            // console.log(err)
        }
    }
    
    render() {
        const { name, email, password, confirmPassword, securityQuestion, securityAnswer, image, errors} = this.state

        return ( 
            <div className="signup">
                <div className='wrap'>
                    <h2>Signup</h2>
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
