import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignInForm from '../../components/SignInForm/SignInForm'
import './SignIn.styles.scss'

const SighIn = () => {


  return (
    <div className='authenticaion-container'>
        <SignInForm />
        <SignUpForm />  
    </div>
  )
}

export default SighIn