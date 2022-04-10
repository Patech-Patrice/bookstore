import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUp from '../../components/auth/signup.js';
import SignIn from '../../components/auth/sign-in.js';




const Authentication = () => {
   

const logGoogleUser = async () => {
    const {user}= await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
};

    return (
        <div>



        <SignIn />
        <SignUp />
     


            </div>
    );
}

export default Authentication;







