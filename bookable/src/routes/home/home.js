import CategoryItem from '../../components/category-item/category-item.js';
import { Link, useNavigate } from 'react-router-dom';
import Welcome from '../../components/welcome.js'
import { UserContext } from '../../contexts/user.context.js';
import { signOutUser} from '../../utils/firebase/firebase.utils.js';
import { useContext, useState } from 'react';



const Home = () => {
  const { currentUser} = useContext(UserContext);
  const navigate = useNavigate();



  return (

        <div className="">
     
            {/* <Link to="/books">View All Books</Link><br/><br/> */}
                <h1> Welcome to the Book Logger App </h1>
                    <h2> Please log in or sign up 
                    <Link className='' to="authentication">Log In or Sign Up </Link>                 
                   </h2> 
        </div>
  );
};


export default Home;
