import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.js';
import SignUp from './components/auth/signup.js'
import Authentication from './components/auth/authentication.js'

import { ReactComponent as BookLogo} from './assets/book_logo.svg';



const Show = () => {
  return (
    <h1> This is the show page </h1>
  );
};




const App = () => {
  return (
    <div className= "App">
         <div>
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
            {/* <li>
              <Link to="dashboard">Dashboard</Link>
           </li> */}
          
         </ul>
      </nav>





          <div className="categories-container">  
                  <Routes>
                            <Route path='/' element={<Home/>} >
                            <Route path='/show' element={<Show/>} />
                            </Route>
                            <Route path="authentication" element={<Authentication/>}></Route> 
                       
                  </Routes>
          </div>

    </div>
 
            );
};


export default App;









