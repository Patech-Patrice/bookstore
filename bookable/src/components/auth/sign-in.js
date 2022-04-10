import { useState } from 'react';
import FormInput from '../../components/form-input/form-input.js'
import { signInWithGoogle, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils.js'
import '../../components/auth/sign-in.styles.scss';
import Button from '../../components/button/button.js';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  email, password } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           
                resetFormFields();

        }catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot sign-in user, email or password is incorrect');
            } else {
                console.log('user sign-in encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
            const { name, value } = event.target;
            setFormFields({...formFields, [name]: value });
        };

    const signInWithGoogle = async () => {
        const {user}= await signInWithGooglePopup();
  
       await createUserDocumentFromAuth(user);
    };

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type='email'required onChange={handleChange} name='email' value={email} />
                <FormInput label="Password" type='password'required onChange={handleChange} name ='password' value={password} />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button> 
                    <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>  
           
        </div>
    )
}

export default SignIn;