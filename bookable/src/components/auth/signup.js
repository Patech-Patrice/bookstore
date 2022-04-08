import { useState } from 'react';
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
                <label>Display name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName} />
                <label>Email</label>
                <input type='email'required onChange={handleChange} name='email' value={email} />
                <label>Password</label>
                <input type='password'required onChange={handleChange} name ='password' value={password} />
                <label>Confirm Password</label>
                <input type='password'required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <button type='submit'>SignUp</button> 
            </form>
            <button onClick={logGoogleUser}>Log in with Google Popup</button>
           
        </div>
    )
}

export default SignUp;