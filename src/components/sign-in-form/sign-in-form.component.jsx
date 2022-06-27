import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { 
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormField = {
    email: '',
    password: '',
};

const SignInForm = ()=> {
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password} = formField;

    const resetFormField =() => {
        setFormField(defaultFormField);
    };
    
    const signInWithGoogle = async ()=>{
        await signInWithGooglePopup();
    
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await signInAuthUserWithEmailAndPassword(email, password);            
            resetFormField();
        } catch (error) {
            console.log('user sign in faild', error);
        
        }

    };

    const handleChange = (event)=> {
        const { name, value } = event.target;

        setFormField( {...formField, [name]: value});
    };


    return(
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput
                label="Email"
                 type="email" 
                 required 
                 onChange={handleChange} 
                 name='email'
                 value={email}
                 />

                <FormInput
                label="Password"
                 type="password" 
                 required 
                 onChange={handleChange} 
                 name='password'
                 value={password}
                 />

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type="button"
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;