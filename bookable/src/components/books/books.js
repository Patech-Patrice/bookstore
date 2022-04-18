import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom'
import  Book  from '../../components/book/book.js';



function getBookData(){
    return axios.get('/api/v1/books').then((response) => response.data)
  }

const Books = (props) => {
   
const [books, setBooks] = useState([]);

const { id }: {id: string } = useParams();


useEffect(() => {
    let mounted = true;
    getBookData().then((items) => {
        if (mounted) {
            setBooks(items);
            //console.log(items);
        }    
    });
    return () => {(mounted = false)};
}, []);

    return (
 
        <div className='book-body-container'>
            <div>Book Index Page: {JSON.stringify(id)}</div>
                     {books.map((book, index) => {
                         return (
                        <div key={book.id}>
                            <Link className="link-text" to={`/books/${book.id}`}>{book.title}</Link>
                            <h3>{book.author}</h3>
                            <p>{book.body}</p>
                            <img src={book.image_url} height='300' width='200'></img>
                            <p>{book.genre}</p>
                        </div>
                    );
                  })}  
         </div>
      
    );
}

export default Books;



