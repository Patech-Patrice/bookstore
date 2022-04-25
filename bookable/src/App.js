// import logo from './logo.svg'
import './App.css';
import axios from 'axios';
import Books from './components/books/books.js';
import Book from './components/book/book.js';
import BookInput from './components/book-input/book-input.js';
import { useState, useEffect, Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import Home from './routes/home/home.js';
import Authentication from './components/auth/authentication.js';
import { UserContext } from './contexts/user.context.js';
import { ReactComponent as BookLogo} from './assets/book_logo.svg';
import { signOutUser} from './utils/firebase/firebase.utils.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Dashboard from './components/dashboard.js'


// const BookInput = () => {
//   return (
//     <h1> This is the page for the component add a new book </h1>
//   );
// };

const Navigation = () => {
  const { currentUser} = useContext(UserContext);


  return (
        <Fragment>
            <div className='navigation'>
               <div className='nav-links-container'>
               <Link to="/books">View All Books</Link><br/><br/>
          
                 { currentUser ? (
                   <span className='nav-link' onClick={signOutUser}> { ''} SIGN OUT {''} </span>
                     ) : (
                      <Link className='nav-link' to="authentication">Log In or Sign Up </Link>
                     
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
              <div>
            
                </div>
          
                  <Routes>
                         <Route path='/' element={<Navigation/>}>                         
                          <Route path='/books/create' element={<BookInput/>} />
                           <Route path='/dashboard/' element={<Dashboard/>} /> 
                          <Route path="/authentication" element={<Authentication/>} />
                          <Route path="/books" element={<Books />} />  
                           <Route path="/books/:id" element={<Book />} />  
                         
      
                          <Route index element={<Home/>} />                        
                      </Route>
                   </Routes>
                     
  
    </div>
  );
}



export default App;















