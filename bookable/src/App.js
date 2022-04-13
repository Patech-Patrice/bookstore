// import logo from './logo.svg'
import './App.css';
import axios from 'axios';
import Books from './components/books/books.js';
import Users from './components/users';
import Dashboard from './components/dashboard';
import { useState, useEffect, Fragment, useContext } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
 import Home from './routes/home/home.js';
 import Authentication from './components/auth/authentication.js';
 import { UserContext } from './contexts/user.context.js';
 import { ReactComponent as BookLogo} from './assets/book_logo.svg';
 import { signOutUser} from './utils/firebase/firebase.utils.js';


function getBookData(){
  return axios.get('/api/v1/books').then((response) => response.data)
}


const Show = () => {
  return (
    <h1> This is the show page </h1>
  );
};


const Navigation = () => {
  const { currentUser} = useContext(UserContext);



  return (
        <Fragment>
            <div className='navigation'>
               <div className='nav-links-container'>
               <Link to="books">Books</Link>
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
  const [books, setBooks] = useState([]);


  useEffect(() => {
    let mounted = true;
    getBookData().then((items) =>  {
      if (mounted) {
        setBooks(items);
      }
  });
  return () => {(mounted = false)};
}, []);



  return (
              <div className="App">
                  <div >
                  <Link className='logo-container' to='/'>
                  <BookLogo className="logo"/>
                  </Link>
              </div>


              <Routes>
                       <Route path='/' element={<Navigation/>}>                          <Route index element={<Home/>} />
                         <Route path='show' element={<Show/>} />
                          <Route path="authentication" element={<Authentication/>} />
                          <Route path="books" element={<Books />} />                          <Route path="books" element={<Books books={books}/>} />
                      </Route>
                   </Routes>
                     
  
    </div>
  );
}



export default App;









