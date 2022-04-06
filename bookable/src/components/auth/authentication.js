import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const Authentication = () => {
   

const logGoogleUser = async () => {
    const {user}= await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
};

    return (
        <div>
            <h1> This is where users will register</h1>
         <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            </div>
    );
}

export default Authentication;







