import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom'
// import  Book  from '../../components/book/book.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function getBookData(){
    return axios.get('/api/v1/books').then((response) => response.data)
  }

const Books = (props) => {
   
const [books, setBooks] = useState([]);

const { id }: {id: string } = useParams();


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
        
       


      
    <div className="card mb-3" style={{width: '500px'}}>
        {books.map((book, index) => {
            return (
        <div className="card-body" key={book.id}>
          <h5 className="card-title" to={`/books/${book.id}`}>{book.title}</h5>
               <div className="col-md-4">
               <img src={book.image_url}  ></img>
         
      </div>
          <p className="card-text">
            {book.body}
          </p>
       

          <p className="card-text">
            <small className="text-muted">{conditionalAuthor(book)}</small>
          </p>
          
          <p className="card-text">
            <small className="text-muted">{book.genre}</small>
          </p>
        </div>
                 );
          })}  
      </div>
      
   
    
     
 

  

      
    );
}

export default Books;






