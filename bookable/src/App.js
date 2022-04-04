// import logo from './logo.svg'
import './App.css';
import axios from 'axios';
import Books from './components/books';
import Users from './components/users';
import Dashboard from './components/dashboard';
import Authentication from './components/auth/authentication';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// const API_URL = "http://localhost:3000/api/v1/books";

function getBookData(){
  return axios.get('/api/v1/books').then((response) => response.data)
}

function getUserData(){
  return axios.get('/api/v1/users').then((response) => response.data)
}



function App() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    getBookData().then((items) =>  {
      if (mounted) {
        setBooks(items);
      }
  });
  return () => {(mounted = false)};
}, []);

useEffect(() => {
  let mounted = true;
  getUserData().then((items) =>  {
    if (mounted) {
      setUsers(items);
    }
});
return () => {(mounted = false)};
}, []);

  return (
    <div className="App">
      <nav>
      <ul>
      <li>
           <Link to="authentication">Log In or Sign Up</Link>
          </li>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
         </li>
          <li>
           <Link to="books">Books</Link>
          </li>
        </ul>
        </nav>
                  <div className="main">
                          <Routes>
                            <Route path="books" element={<Books books={books}/>}></Route>
                            <Route path="users" element={<Users users={users}/>}></Route>
                            <Route path="dashboard" element={<Dashboard/>}></Route>
                            <Route path="authentication" element={<Authentication/>}></Route>
                      
                          </Routes>
                          </div>
  
    </div>
  );
}



export default App;
