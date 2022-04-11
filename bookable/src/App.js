import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.js';
import Authentication from './components/auth/authentication.js'

import { ReactComponent as BookLogo} from './assets/book_logo.svg';



const Show = () => {
  return (
    <h1> This is the show page </h1>
  );
};


const Navigation = () => {
  return (
   
    <div>
      <div className='nav-link'>
       <Link to="authentication">Log In or Sign Up</Link>
     </div>
     <Outlet />
  </div>


  )
}


const App = () => {
  return (
    <div className= "App">
         <div>
              <Link className='logo-container' to='/'>
              <BookLogo className="logo"/>
             </Link>
          </div>
        {/* <nav className='nav-link'>
            <ul>
              <Link to="authentication">Log In or Sign Up</Link>
            </ul>
        
      </nav> */}





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









