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
   const body = JSON.stringify(bookInput.book);
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




  


  return (
        
            
    <div className="App">
          <h4> Create a New Book:</h4>
      <form  onSubmit={handleSubmit}>
      Title: <textarea type='text' rows="1" cols="45" name="title" value={title} onChange={handleChange} />
      <br />
      <br />
      <label name="genre">Choose a genre:</label>
          <select name="genre" id="genre" value={genre} onChange={handleChange}>
            <option value="Horror">Horror</option>
            <option value="Suspense">Suspense</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Fiction">Fiction</option>
          </select>
          

      <br />
      <br />
      Cover Image URL: <textarea rows="2" cols="45" name="image_url" value={image_url} onChange={handleChange} />
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
