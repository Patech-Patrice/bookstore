import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { matchPath } from "react-router";

// function getBookData(){
//   return axios.get('/api/v1/books').then((response) => response.data)
// }


const Book = (props) => {

  const { id } = useParams(); 



return (
  
  // <div className='book-body-container'>
  //    <div> Book Show Page </div>
  //              {books.map((book, index) => {
  //                  return (
  //                 <div key={book.id}>
  //                     <Link className="link-text" to={`/books/${book.id}`}>{book.title}</Link>
  //                     <p>{book.body}</p>
  //                     <img src={book.image_url} height='300' width='200'></img>
  //                 </div>
                 
  //             );
  //           })}  
  //  </div>
  <div> Book Show Page: {JSON.stringify(id)}
  <h1>This page will show the information for one book
    </h1>
  </div>


);
}   









export default Book;






















//http://localhost:3000/api/v1/books/:id
