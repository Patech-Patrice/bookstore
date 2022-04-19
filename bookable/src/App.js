// import logo from './logo.svg'
import './App.css';
import axios from 'axios';
import Books from './components/books/books.js';
import Book from './components/book/book.js';
import { useState, useEffect, Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import Home from './routes/home/home.js';
import Authentication from './components/auth/authentication.js';
import { UserContext } from './contexts/user.context.js';
import { ReactComponent as BookLogo} from './assets/book_logo.svg';
import { signOutUser} from './utils/firebase/firebase.utils.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Navigation = () => {
  const { currentUser} = useContext(UserContext);


  return (
        <Fragment>
            <div className='navigation'>
               <div className='nav-links-container'>
               {/* <Link to="books">Books</Link><br/><br/> */}
               <Link to="books/:id">Book</Link><br/><br/>
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




function App() {



  return (
    <div className="App">
                <div >
                  <Link className='logo-container' to='/'>
                  <BookLogo className="logo"/>
                  </Link>
              </div>
                  <Routes>
                         <Route path='/' element={<Navigation/>}>                         
                          {/* <Route path='show' element={<Show/>} /> */}
                          <Route path="authentication" element={<Authentication/>} />
                          {/* <Route path="books" element={<Books />} />   */}
                           <Route path="books/:id" element={<Books />} />  
                         
                       

                          <Route index element={<Home/>} />                        
                      </Route>
                   </Routes>
                     
  
    </div>
  );
}



export default App;















