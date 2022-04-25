import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"; 

export default function BookInput() {
  const [bookInput, setBookInput] = useState({
    book: {
      title: '',
      body: '',
      genre:'',
      image_url:'', 
      author: [{
         first_name: '' }, { last_name: '' }]
    }
  });



  const handleChange = event => {
   // console.log(event.target.name);
    let arrAuthor = bookInput.book.author;
    (event.target.name === 'first_name' || event.target.name === 'last_name' ) 
    && arrAuthor.map(x => (x.hasOwnProperty(event.target.name)) && (x[event.target.name] = event.target.value))
    // console.log(title)
    // console.log(body)
    // console.log(genre)
    // console.log(image_url)
    // console.log(arrAuthor)
    setBookInput(prevState => {
      return {
        book: {
          ...prevState.book,
          [event.target.name]: event.target.value,
          author: arrAuthor
        }
      };
    });
  };




  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const book = {
  //     title,
  //     body,
  //     genre,
  //     image_url,
  //     //author
  //      author: [{ first_name }, { last_name }]
  //   }
  //   axios.post('http://localhost:3000/api/v1/books', { book })
  //     .then(res=>{

  //       console.log(res.data);
  //       setBookInput();
  //     //  window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
  //     })
  // }





  const {
    title,
    body,
    genre,
    image_url,
    author: [{ first_name }, { last_name }]
  } = bookInput.book;

  //  console.log(bookInput);


  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    let body = JSON.stringify({})

    fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((book)=>{
      setBookInput(book)
      console.log(book)
    }) 

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
      Author First Name: <input name="first_name" value={first_name} onChange={handleChange} />
      <br />
      <br />
      Author Last Name: <input name="last_name" value={last_name} onChange={handleChange} />
      <button onChange={handleSubmit} type="submit">Create Book</button>
      </form>
      <br />
      
    
      <br />
    
    </div>
  );
}
