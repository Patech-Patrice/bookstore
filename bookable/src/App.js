import { Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.js';
import Authentication from './components/auth/authentication.js'
import { UserContext } from './contexts/user.context.js';
import { ReactComponent as BookLogo} from './assets/book_logo.svg';
import { signOutUser} from './utils/firebase/firebase.utils.js';



const Show = () => {
  return (
    <h1> This is the show page </h1>
  );
};


const Navigation = () => {
  const { currentUser} = useContext(UserContext);

  // const signOutHandler =  async () => {
  //   await signOutUser();
  //   // setCurrentUser(null);    
  // };

  return (
        <Fragment>
            <div className='navigation'>
               <div className='nav-links-container'>
                 { currentUser ? (
                   <span className='nav-link' onClick={signOutUser}> { ''} SIGN OUT {''} </span>
                     ) : (
                      <Link className='nav-link' to="authentication">Log In or Sign Up</Link>
                    )}
                </div>
            </div>
          <Outlet />
        </Fragment>
  );
}


const App = () => {
  return (
    <div className= "App">
         <div>
              <Link className='logo-container' to='/'>
              <BookLogo className="logo"/>
             </Link>
          </div>
                  <Routes>
                      <Route path='/' element={<Navigation/>}> 
                         <Route index element={<Home/>} />
                         <Route path='show' element={<Show/>} />
                         <Route path="authentication" element={<Authentication/>} />
                      </Route>
                  </Routes>
    </div>
 
            );
};


export default App;









