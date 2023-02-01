import React, {useState} from 'react';
import { signInUserAuthWithEmailAndPassword, 
         createUserDocumetFromAuth,
         signInWithGooglePopup
       } from '../../Utils/Firebase/Firebase';
import './sign-in-form.styles.scss';
import FormInput from '../../FormInput/FormInput';
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const SignInForm = () => {

    const formFieldState = {
        email : '',
        password : ''
    }

    const [formField, setFormField] = useState(formFieldState);
    const {email, password} = formField;

    const handleChange = (e) => {
        //const {name, value } = e.target
        setFormField({...formField, [e.target.name] : e.target.value})
    }

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumetFromAuth(response.user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInUserAuthWithEmailAndPassword(email, password)
            console.log(response)
            setFormField(formFieldState);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                      alert('Le mot de passe est incorrect')
                      break;
                case 'auth/user-not-found':
                      alert('mail innexistant !')
                      break;
                default: console.log(error)
            }
        }
    }

  return (
    <div className='sign-up-container'>
        <h2>J'ai déja un compte </h2>
       <span> SignUpForm</span>
       <form onSubmit={handleSubmit} >
        
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
       <div className='buttons-container'>
            <ButtonComponent 
                    onSubmit={handleSubmit}> Se connecter 
                </ButtonComponent>
                <ButtonComponent 
                    type='button' buttonType='google'  onClick={signInWithGoogle}>  Google 
                </ButtonComponent>
       </div>
        
       </form>
    </div>
  )
}

export default SignInForm


  //const responseForm = await createUserAuthWithEmailAndPassword();
        // console.log('responseForm')