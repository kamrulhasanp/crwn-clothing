import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { 
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    creteUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

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
            console.log(error);
        //    switch(error.code) {
        //        case 'auth/wrong-password':
        //            alert('Incorrect Password');
        //            break;
        //         case 'auth/user-not-found':
        //             alert('No User associated with this email');
        //             break;
        //         default:
        //             console.log(error);
        //    }
        }

    };

    const handleChange = (event)=> {
        const { name, value } = event.target;

        setFormField( {...formField, [name]: value} );
    };


    return(
        <div className="sign-up-container">
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

                <div className="button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;