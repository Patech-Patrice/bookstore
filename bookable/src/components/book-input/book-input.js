import React, {useState} from 'react';
import {  useNavigate, Link } from 'react-router-dom';


export default function BookInput() {
  const [bookInput, setBookInput] = useState({
    book: {
      title: '',
      body: '',
      genre:'',
      image_url:'', 
      author: '',
    }
  });

  const [isEditing, setIsEditing] = useState(false);




  const handleChange = event => {
   // console.log(event.target.name);
      event.preventDefault();
        setBookInput(prevState => {
          return {
            book: {
              ...prevState.book,
              [event.target.name]: event.target.value,
            }
      };
    });
  };

  const navigate = useNavigate();

  const {
    title,
    body,
    genre,
    image_url,
    author
  } = bookInput.book;




  const handleSubmit = event => {
    event.preventDefault();

   
   const body = JSON.stringify(makeBookObj());

 

    fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((book)=>{
       setBookInput(book)
     // console.log(book)
      navigate('/books', {state: title, genre, image_url, body, author })
    }) 

  }


  const makeBookObj = () => {
      const book = bookInput.book;
      const  bookObj =  {
          //seperate method that converts book input into a book object
          title: book.title,
          genre: book.genre,
          image_url: book.image_url,
          body: book.body,
          author: book.author,
         
        }
        return bookObj;
  }

    // function to get the value of the edit input and set the new state
    const handleEditInputChange = (event) => {
      // set the new state value to what's currently in the edit input box
      setBookInput({ ...bookInput, [event.target.name]: event.target.value });
      console.log(bookInput);
    }


    const handleEditBookSubmit = (event) => {
      // set the new state value to what's currently in the edit input box
      // setBookInput({ ...bookInput, [event.target.name]: event.target.value });
      // console.log(bookInput);
    }


  return (
        
            
    <div className="App">
          <h4> Create a New Book:</h4>
      <form  onSubmit={handleSubmit}>
      Title: <input type='text' name="title" value={title} onChange={handleChange} />
      <br />
      <br />
      Genre: <input name="genre" value={genre} onChange={handleChange} />
      <br />
      <br />
      Cover Image URL: <input name="image_url" value={image_url} onChange={handleChange} />
      <br />
      <br />

  
      <br />
      Description: <textarea name="body" rows="4" cols="50" defaultValue={body} onChange={handleChange} />  
      <br />
      <br />
      Author: <input name="author" value={author} onChange={handleChange} />
      <br />
      <br />
      
      <button onChange={handleSubmit} type="submit">Create Book</button>
      </form>
      <br />
      
    
      <br />

          



 
        


        

      
      
    </div>
    
    
  );
}
