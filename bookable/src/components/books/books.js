import { useState, useEffect } from 'react';
import axios from 'axios';



function getBookData(){
    return axios.get('/api/v1/books').then((response) => response.data)
  }

const Books = () => {
   
const [books, setBooks] = useState([]);


useEffect(() => {
    let mounted = true;
    getBookData().then((items) => {
        if (mounted) {
            setBooks(items);
            console.log(items);
        }    
    });
    return () => {(mounted = false)};
}, []);

    return (
        <div className='book-body-container'>
         

                <span> These Books are from the API</span>
                     {books.map((book) => {
                         return (
                        <div key={book.id}>
                            <h2>{book.title}</h2>
                            <p>{book.body}</p>
                            <img src={book.image_url} height='300' width='200'></img>
                        </div>
                    );
                  })}  




         </div>
    );
}

export default Books;



