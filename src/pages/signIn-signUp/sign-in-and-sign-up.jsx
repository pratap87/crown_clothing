import React from 'react'
import SignIn from '../../components/signin/signin'
import Signup from '../../components/signup/signup'
import './signin-signup.scss'
const SignInAndSignUpPage = () => {
    return (
        <div className='signin-signup'>
      
            <SignIn/>
            <Signup/>
        </div>
    )
}

export default SignInAndSignUpPage
