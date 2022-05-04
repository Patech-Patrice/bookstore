import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'





function getBookData(){
    return axios.get('/api/v1/books').then((response) => response.data)
  }

const Genre = () => {
   
          const [books, setBooks] = useState([]);
        
          const [filteredBooks, setFilteredBooks] = useState('');



      

          useEffect(() => {
            let mounted = true;
            getBookData().then((books) => {
                if (mounted) {
                    setBooks(books);
                  
                    // console.log(books);
                   
                    //setFilteredBooks();
                   
                }    
            });
            return () => {(mounted = false)};
        }, []);
       

        const Buttons = ({ setBook, bookGenre }) => {
            return (
              <>
                <div className="d-flex justify-content-center">
                  {bookGenre.map((Val, id) => {
                    return (
                      <button
                        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                        key={id}
                      >
                        {Val}
                      </button>
                    );
                  })}
                  <button
                    className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                    
                  >
                    All
                  </button>
                 </div>
              </>
            );
          };








    return (
        <div>
     
          <div className="card mb-3" style={{width: '500px'}}>
              {books.map((book, index) => {
                  return (
              <div className="card-body" key={book.id}>
                     <button className="update" type="button"onClick='' >
                      Update Book
                  </button> 
                <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}  </Link>
                        <h6> {book.author} </h6>
                    <div className="col-md-4">
                    <img  style={{height: '300px', width: '200px'}} src={book.image_url}></img>
              </div>
                      <button className="update" type="button"onClick='' >
                      Update Book
                  </button> 
              
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

export default Genre;