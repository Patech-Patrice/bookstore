import { useState } from 'react';
import FormInput from '../../components/form-input/form-input.js'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils.js'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:'',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {
            const { user }= await createAuthUserWithEmailAndPassword(
                email,
                password
                );

         await createUserDocumentFromAuth(user, { displayName }); 
                resetFormFields();

        }catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
            const { name, value } = event.target;

            setFormFields({...formFields, [name]: value });
    };

    const logGoogleUser = async () => {
        const {user}= await signInWithGooglePopup();
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={handleSubmit}>
              
                <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName} />
                
                <FormInput label="Email" type='email'required onChange={handleChange} name='email' value={email} />
              
                <FormInput label="Password" type='password'required onChange={handleChange} name ='password' value={password} />
                
                <FormInput label="Confirm Password" type='password'required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <button type='submit'>SignUp</button> 
            </form>
            
           
        </div>
    )
}

export default SignUp;