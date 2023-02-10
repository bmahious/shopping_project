import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignInForm from '../../components/SignInForm/SignInForm'
import {AuthentificationContainer} from './SignIn.styles'

const SighIn = () => {


  return (
    <AuthentificationContainer>
        <SignInForm />
        <SignUpForm />  
    </AuthentificationContainer>
  )
}

export default SighIn