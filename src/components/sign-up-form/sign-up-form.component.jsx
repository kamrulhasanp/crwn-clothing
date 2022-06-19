import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';

import { 
    createAuthUserWithEmailAndPassword, 
    creteUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';


const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};
const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const {displayName, email, password, confirmPassword} = formField;

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
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
        
            await creteUserDocumentFromAuth(user, {displayName});
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
        <div className="sign-up-container">
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
        </div>
    );
};

export default SignUpForm;