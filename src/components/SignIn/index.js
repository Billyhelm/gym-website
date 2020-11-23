import React from 'react'
import './styles.scss'
import Button from './../forms/Button'

const SignIn = props => {


    return (
        <div className="signin" >
            <div className='wrap'>
                <h2>LogIn</h2>

                <div className='formWrap'>
                    <form>
                        <div classname='socialSignin'>
                            <div classname='row'>
                                
                                <Button>
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SignIn