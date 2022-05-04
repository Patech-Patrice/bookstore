import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';





function getBookData(){
    return axios.get('/api/v1/books').then((response) => response.data)
  }

const Books = () => {
   
          const [books, setBooks] = useState([]);
          const [searchGenre, setSearchGenre] = useState([]);

          useEffect(() => {
            let mounted = true;
            getBookData().then((books) => {
                if (mounted) {
                    setBooks(books);
                   
                }    
            });
            return () => {(mounted = false)};
        }, []);
       

          const handleDelete = (e, id) => {
             fetch('http://localhost:3000/api/v1/books/' + id, {
               method: 'DELETE',
             }).then(
                 getBookData()
             )
             console.log(books)
               alert('Book Deleted')  
          }





    return (
      <div >
            <label htmlFor="search-form">
               <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-genre"
                  placeholder="Search by genre..."
                  onChange={event => {setSearchGenre(event.target.value)}}
                />
              </label>
          <Link className="" href="" to="/books/create"> Add New Book</Link>
         


        
              {books.filter((book)=> {
                if (searchGenre == "") {
                  return book
                }else if (book.genre.toLowerCase().includes(searchGenre.toLowerCase())) {
                  return book
                }
              }).map((book, index) => {
                  return (
              <div className="card" key={book.id}>
                <div className="card-body">
                <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}  </Link>
                        <h6> {book.author} </h6>
                        <img  style={{height: '300px', width: '200px'}} src={book.image_url}></img>
                        <p className="card-description">  {book.body} </p>
                        <div className="card-text">
                          <small className="text-muted">{book.genre}</small>
                        </div>
                        <button className="card-button" type="button"onClick={(e) => handleDelete(e, book.id)} >
                              Delete Book
                        </button>
              </div>
              </div>
                      );
                })} 
              
            </div>
            
  


    
     
 

  

      
    );
}

export default Books;












