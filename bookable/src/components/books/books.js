import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom'
import BookInput from '../../components/book-input/book-input.js'




function getBookData(){
    return axios.get('/api/v1/books').then((response) => response.data)
  }

const Books = (props) => {
   
const [books, setBooks] = useState([]);

const { id } = useParams();



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

    const conditionalAuthor = book => {
        if(book.author)
        {
            return ( <p>{book.author.first_name} {book.author.last_name}</p> )
        }
    }


    return (
        <div>
                <Link className="card-title" href="" to="/books/new"> Add New Book</Link>
    <div className="card mb-3" style={{width: '500px'}}>
    
    
        {books.map((book, index) => {
            return (
        <div className="card-body" key={book.id}>
          <Link className="card-title" href={book.title} to={`/books/${book.id}`}>{book.title}</Link>
               <div className="col-md-4">
               <img  style={{height: '300px', width: '200px'}} src={book.image_url}></img>
        </div>
          <p className="card-text">
            {book.body}
          </p>
        
        {/* <BookInput /> */}
       

          <div className="card-text">
            <small className="text-muted">{conditionalAuthor(book)}</small>
          </div>
          
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






