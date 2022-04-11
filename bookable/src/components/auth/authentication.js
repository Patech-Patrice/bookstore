import SignUp from '../../components/auth/signup/signup.js';
import SignIn from '../../components/auth/sign-in/sign-in.js';
import '../../components/auth/authentication.styles.scss';




const Authentication = () => {
   



    return (
        <div className='authentication-container'>
            <SignIn />
            <SignUp />
         </div>
    );
}

export default Authentication;










