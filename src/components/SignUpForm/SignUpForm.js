import React, {useState } from 'react';
import { createUserAuthWithEmailAndPassword, 
         createUserDocumetFromAuth
       } from '../../Utils/Firebase/Firebase';
import './sign-up-form.styles.scss';
import FormInput from '../../FormInput/FormInput';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const SignUpForm = () => {

    const formFieldState = {
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    const [formField, setFormField] = useState(formFieldState);
    const {displayName, email, password, confirmPassword} = formField;

    const handleChange = (e) => {
        //const {name, value } = e.target
        setFormField({...formField, [e.target.name] : e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (password !== confirmPassword) {
            alert('oups passwords do not match');
            return;
        }
        try {
            const response = await createUserAuthWithEmailAndPassword (email, password)
            console.log(response)
            await createUserDocumetFromAuth(response.user, {displayName})
            setFormField(formFieldState);
        } catch (error) {
            if (error.code === 'auth/',error.message) {
                alert('oups un compte à déja utilisé cette adresse mail')
            } else {
                console.log('erreur : ', error)
            }
        }
    }

  return (
    <div className='sign-up-container'>
        <h2>Vous n'avez pas encore de compte ?</h2>
       {/* <span> SignUpForm</span> */}
       <form onSubmit={handleSubmit} >
        <FormInput 
               label='Nom'
               type='text'
               onChange={handleChange} 
               name='displayName' 
               value={displayName} 
        />
        <FormInput 
                label='Email'
                onChange={handleChange} 
                name='email' 
                value={email} 
        />
        <FormInput 
                label='Mot de passe'
                type='password' 
                onChange={handleChange} 
                name='password' 
                value={password} 
        />
        <FormInput 
               label='Confirmation de mot de passe'
               type='password' 
               onChange={handleChange} 
               name='confirmPassword' 
               value={confirmPassword} 
        />
        <ButtonComponent 
               onSubmit={handleSubmit}> Créer un compte 
        </ButtonComponent>
       </form>
    </div>
  )
}

export default SignUpForm


  //const responseForm = await createUserAuthWithEmailAndPassword();
        // console.log('responseForm')