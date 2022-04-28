import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Book = (props) => {

  const [book, setBook] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [genre, setGenre] = useState("");
 
  const [img, setImg] = useState(null);
  const [author, setAuthor] = useState('');

  const [deleteBook, setDeleteBook] = useState();
  const [editedBookId, setEditedBookId] = useState();

  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    
    const url = "http://localhost:3000/api/v1/books/" + id

    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const book = await response.json();
        // console.log(book);
      
        setTitle(book.title)
        setBody(book.body)
        setGenre(book.genre)
        setImg(book.image_url)
        setAuthor(book.author)
          }catch (error){
            alert("error", error);
          }      
    };
      fetchData();
    
}, []);




const handleDeleteBook = async (eventId) => {
  const sure = window.confirm('Are you sure?');

  if (sure) {
    try {
      const response = await window.fetch(`/api/v1/books/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw Error(response.statusText);

      alert('Book Deleted!');
      navigate('/books');
    } catch (error) {
      alert.error(error);
    }
  }
};


const editedBook = (id) => {
  setEditedBookId({id});
}





// const handleEditBook = async( id, title, body, genre, image_url, author ) => {
//    // alert('Edit Button Pressed');
//    axios
//    .put("/api/v1/books/" + id, {
//      book: {
//        title,
//        author,
//        genre,
//        body,
//        image_url
//      },
//    })
//    .then((response) => {
//      console.log(response);
//      const books = this.state.books;
//      books[id - 1] = { id, title, author, genre, body, image_url };
//      this.setState(() => ({
//        books,
//        editedBookId: null,
//      }));
//    })
//    .catch((error) => console.log(error));

// }


return (
      <div className='book-body-container' key={book.id} > 
            <h3>{title}</h3>
            <h6>{author}</h6>
            <div className="card-text">
                <small className="text-muted">{genre}</small>
                <p>{body}</p>
            </div>
            <div className="col-md-4">
                    {img && <img  src={img} style={{height: '300px', width: '200px'}} ></img>}
            </div>
          
            <button className="delete" type="button"onClick={() => handleDeleteBook(book.id)} >
                Delete Book
            </button>
         
            <button>
            <Link to={`/books/update`}>Edit</Link>
            {/* <Link className=""  to={`/books/${book.id}`}> Edit Book  </Link> */}
            </button>


      </div>
      )
}

 
export default Book;


   
