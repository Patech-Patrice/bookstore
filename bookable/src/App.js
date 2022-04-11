import { Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.js';
import Authentication from './components/auth/authentication.js'
import { UserContext } from './contexts/user.context.js';
import { ReactComponent as BookLogo} from './assets/book_logo.svg';



const Show = () => {
  return (
    <h1> This is the show page </h1>
  );
};


const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  return (
        <Fragment>
          <div className='nav-link'>
                 <Link 
                   to="authentication">Log In or Sign Up
                 </Link>
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









