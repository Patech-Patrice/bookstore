// import logo from './logo.svg'
import './App.css';
import axios from 'axios';
import Books from './components/books';
import Users from './components/users';
import { useState, useEffect } from 'react';

const API_URL = "http://localhost:3000/api/v1/books";

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
      <h1> Hello </h1>
      <Books books={books}/>
      <Users users={users} />
    </div>
  );
}

export default App;
