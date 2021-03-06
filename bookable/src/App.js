import './App.css';
import axios from 'axios';
import Books from './components/books/books.js';
import Book from './components/book/book.js';
import BookInput from './components/book-input/book-input.js';
import EditBook from './components/edit-book/edit-book.js';
import { useState, useEffect, Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import Home from './routes/home/home.js';
import Authentication from './components/auth/authentication.js';
import { UserContext } from './contexts/user.context.js';
import { ReactComponent as BookLogo} from './assets/book_logo.svg';
import { signOutUser} from './utils/firebase/firebase.utils.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';







const Navigation = () => {
  const { currentUser} = useContext(UserContext);
  const navigate = useNavigate();





  const logOut = (event) => {
    alert('Successfully logged out.')
     event.preventDefault();
        signOutUser();
       navigate('/')
  }
  


  return (
        <Fragment>
            <div className='navigation'>
               <div className='nav-links-container'>
                 { currentUser ? (
                   
                   <span className='nav-link'to="authentication" onClick={logOut} > { ''} SIGN OUT {''} </span>
                     ) : (
                      <div>  {console.log()}</div>
                    )}
                </div>
            </div>
          <Outlet />
        </Fragment>
      
  );
}




function App() {



  return (
    <div className="">
                <div >
                  <Link className='logo-container' to='/'>
                  <BookLogo className="logo"/>
                  </Link>
              </div>
            
          
                  <Routes>
                         <Route path='/' element={<Navigation/>}>                         
                          <Route path='/books/create' element={<BookInput/>} />
                          <Route path='/books/update/:id' element={<EditBook />} />
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















