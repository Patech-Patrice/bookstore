import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUp from '../../components/auth/signup.js';




const Authentication = () => {
   

const logGoogleUser = async () => {
    const {user}= await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
};

    return (
        <div>
            <h1> This is where users will choose to sign up or sign in</h1>


        <SignUp />


         <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            </div>
    );
}

export default Authentication;







