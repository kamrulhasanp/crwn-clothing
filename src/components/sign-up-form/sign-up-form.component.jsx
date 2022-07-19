import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import { signUpStart } from '../../store/user/user.action';
import { SignUpContainer } from './sign-up-form.styles';


const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formField;
    const dispatch = useDispatch();

    const resetFormField =() => {
        setFormField(defaultFormField)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Password dose not match');
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormField();
        } catch (error) {
           if(error.code === 'auth/email-already-in-use') {
               alert('Can not create user, email already used');
           } else {

                console.error('user creation encountered an error',error);
           }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormField( {...formField, [name]: value} );
    };


    return(
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Display Name"
                 type="text" 
                 required 
                 onChange={handleChange} 
                 name='displayName'
                 value={displayName}
                 />

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

                <FormInput
                label="Confirm Password"
                 type="password" 
                 required 
                 onChange={handleChange} 
                 name='confirmPassword'
                 value={confirmPassword}
                 />

                <Button type="submit">Sign Up</Button>

            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;