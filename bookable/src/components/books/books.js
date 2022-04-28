import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'





function getBookData(){
    return axios.get('/api/v1/books').then((response) => response.data)
  }

const Books = (props) => {
   
const [books, setBooks] = useState([]);





useEffect(() => {
    let mounted = true;
    getBookData().then((books) => {

        if (mounted) {

            setBooks(books);
            // console.log(books);
       
        }    
    });
    return () => {(mounted = false)};
}, []);




    return (
        <div>
                <Link className="card-title" href="" to="/books/create"> Add New Book</Link>
    <div className="card mb-3" style={{width: '500px'}}>
    
    
        {books.map((book, index) => {
            return (
        <div className="card-body" key={book.id}>
          <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}  </Link>
                  <h6> {book.author} </h6>
               <div className="col-md-4">
               <img  style={{height: '300px', width: '200px'}} src={book.image_url}></img>
        </div>
          <p className="card-text">
            {book.body}
          </p>
        
          <div className="card-text">
            <small className="text-muted">{book.genre}</small>
          </div>
        </div>
                 );
          })}  
      </div>
      </div>
    
      
   
    
     
 

  

      
    );
}

export default Books;






