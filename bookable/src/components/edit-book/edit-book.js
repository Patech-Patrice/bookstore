import React, {useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditBook = (callback) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookInput, setBookInput] = useState({
    book: {
      title: '',
      body: '',
      genre:'',
      image_url:'', 
      author: '',
    }
  });

    const handleChange = (event) => {
      event.persist();
      setBookInput({ ...bookInput, [event.target.name]: event.target.value });
    };


  

      // const handleSubmit = (event) => {
      //   if (event) {
      //     event.preventDefault();
      //     console.log(bookInput);
      //     //console.log(image_url);
      //     setBookInput(bookInput);
      //     navigate('/books')
      //   }
      // }




  const handleSubmit = event => {
    event.preventDefault();
   const body = JSON.stringify();
    fetch('http://localhost:3000/api/v1/books/' + bookInput.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookInput)
    }).then(response => response.json()).then(book => {
        setBookInput({bookInput})
    })
    console.log(bookInput)
      alert('Book Updated')
      // navigate('/books', {
      //   state: 
      //  bookInput  })
    // }) 
  }






















  useEffect(() => {
    const url = "http://localhost:3000/api/v1/books/" + id
    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const book = await response.json();
        setBookInput(book)
          }catch (error){
            alert("error", error);
          }      
    };
      fetchData();
}, []);


    return (
      <div className="App">
          <h2> Edit Book Form: </h2>
          <form   onSubmit={handleSubmit}>
          Title: <input type='text' name="title" value={bookInput.title ?? ""} onChange={handleChange} />
          <br />
          <br />
          Genre: <input name="genre" value={bookInput.genre ?? ""} onChange={handleChange} />
          <br />
          <br />
          Cover Image URL: <input name="image_url"  value={bookInput.image_url ?? ""} onChange={handleChange} />
          <br />
          <br />
          <br />
          Description: <textarea name="body" rows="4" cols="50"  value={bookInput.body ?? ""} onChange={handleChange} />  
          <br />
          <br />
          Author: <input name="author" value={bookInput.author ?? ""} onChange={handleChange} />
          <br />
          <br />
          
          <button onChange={handleChange} type="submit">Update Book</button>
          </form>
    </div>
    );
  };

  export default EditBook;


