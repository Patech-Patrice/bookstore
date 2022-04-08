import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.js';

import { ReactComponent as BookLogo} from './assets/book_logo.svg';



const Show = () => {
  return (
    <h1> This is the show page </h1>
  );
};


const App = () => {


  return (
    <div >
      <div className= "App">
        <div >
          <Link  className='logo-container' to='/'>
              <BookLogo className="logo"/>
             </Link>
          </div>
        <nav className='nav-link'>
        <ul>
          <li>
           <Link to="authentication">Log In or Sign Up</Link>
            </li>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
         </li>
          {/* <li>
           <Link to="books">Books</Link>
          </li> */}
         </ul>
      </nav>
    </div>

        <div className="categories-container">  
                <Routes>
                          <Route path='/' element={<Home/>} >
                            
                          <Route path='/show' element={<Show/>} />
                          </Route>
                </Routes>
            </div>
        </div>
 
            );
};


export default App;









