import React, { Component } from 'react'
import './styles.scss'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'

class SignIn extends Component {
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

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault()
        const {email, password} = this.state
        const {handleLogin} = this.props

        try {

            fetch('http://localhost:3000/api/v1/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    email,
                    password
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
          .then(res=>res.json()).then(data => {
                console.log("this is my data", data.user)
                localStorage.id = data.user.id
                localStorage.name = data.user.name
                localStorage.status = data.user.status
                localStorage.image = data.user.image
                localStorage.securityAnswer = data.user.security_answer
                localStorage.securityQuestion = data.user.security_question
                localStorage.email = data.user.email
              return handleLogin(data.user)})
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
        const { email, password, errors} = this.state

        return ( 
            <div className="signup">
                <div className='wrap'>
                    <h2>Login</h2>
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
                        
                        <Button type='submit'>
                            Login
                        </Button>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn