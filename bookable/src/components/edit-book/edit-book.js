import React, {useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';



const EditBook = () => {
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

  const [editBook, setEditBook] = useState({
    book: {
      title: '',
      body: '',
      genre:'',
      image_url:'', 
      author: '',
    }
  });
 
// const editBook = useRef(null);


const handleSubmit = e => {
  e.preventDefault()

  // const body = JSON.stringify();
  // fetch('http://localhost:3000/api/v1/books/update/' + id, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: body,
  // }).then((response) => {
  //   // return response.json()
  
  //       })
  // .then((book)=>{
   
  //    setBookInput(book)
  //   console.log(book)
  
    
  //   // navigate('/books', {state: title, genre, image_url, body, author })
  // }) 

}


const handleChange = ()=> {
  // alert('Edit Book Submitted');
}




  useEffect(() => {
    
    const url = "http://localhost:3000/api/v1/books/" + id

    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const book = await response.json();
         console.log(book);
         console.log(book.title);
         console.log(book.genre);
         console.log(book.body);
         console.log(book.author);
         console.log(book.image_url);
         
        
        setBookInput(book)
       
        
    
          }catch (error){
            alert("error", error);
          }      
    };
      fetchData();
    
}, []);






    return (
      <div className="App">

        This is the edit component
 
      <h2> Edit Book Form: </h2>

    
      <form   onSubmit={handleSubmit}>
      Title: <input type='text' name="title" value={bookInput.title} onChange={handleChange} />
      <br />
      <br />
      Genre: <input name="genre" value={bookInput.genre} onChange={handleChange} />
      <br />
      <br />
      Cover Image URL: <input name="image_url"  value={bookInput.image_url} onChange={handleChange} />
      <br />
      <br />

  
      <br />
      Description: <textarea name="body" rows="4" cols="50"  value={bookInput.body} onChange={handleChange} />  
      <br />
      <br />
      Author: <input name="author" value={bookInput.author} onChange={handleChange} />
      <br />
      <br />
      
      <button onChange={handleSubmit} type="submit">Update Book</button>
      </form>
    
    </div>
  
    );





  };

  export default EditBook;