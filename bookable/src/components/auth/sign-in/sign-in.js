import React, {useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormInput from '../../../components/form-input/form-input.js'
import { signInWithGoogle, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase.utils.js'
import '../../../components/auth/sign-in/sign-in.styles.scss';
import Button from '../../../components/button/button.js';



const defaultFormFields = {
    email: '',
    password: '',
}



const Signin = () => {
 
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;


 
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
}


const signInWithGoogle = async () => {
 await signInWithGooglePopup();
 


};



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
                await signInAuthUserWithEmailAndPassword(email, password);
                navigate('/books')
                resetFormFields();

            }  catch (error) {
                switch(error.code) {
                    case 'auth/wrong-password':
                        alert('Incorrect password for email ');
                    break
                    case 'auth/user-not-found':
                        alert('No user associated with this email ');
                    break;
                        default:
                         console.log(error);  
                } 
            }
                
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    };








    return (
        <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type='email'required onChange={handleChange} name='email' value={email} />
            <FormInput label="Password" type='password'required onChange={handleChange} name ='password' value={password} />

            <div className='buttons-container'>
                <Button type='submit' >Sign In</Button> 
                <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>  
       
    </div>
)
}

  export default Signin;


