import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';






const Book = (props) => {

  const [book, setBook] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [genre, setGenre] = useState("");
  const [author_id, setAuthor_id] = useState("");
  const [img, setImg] = useState(null);
  

  const { id } = useParams();
  

  useEffect(() => {
    
    const url = "http://localhost:3000/api/v1/books/" + id

    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const book = await response.json();
        
        
        console.log(book.image_url);
        console.log(book.author_id);

        setTitle(book.title)
        setBody(book.body)
        setGenre(book.genre)
        setImg(book.image_url)
        setAuthor_id(book.author_id)
        

          }catch (error){
            console.log("error", error);
          }      
    };
      fetchData();
    
}, []);





   const conditionalAuthor = book => {
        if(book.author)
        {
            return ( <p>{book.author.first_name} {book.author.last_name}</p> )
        }
    }

  
return (
  <div className='book-body-container'> 
    {/* <h2> Book -- { id }</h2> */}
      <h3>{title}</h3>
   
      <div className="card-text">
        <small className="text-muted">
        {genre}
        {conditionalAuthor(book)}
        </small>
        <p>{body}</p>
       </div>
       <div className="col-md-4">
                {img && <img  src={img} style={{height: '300px', width: '200px'}} ></img>}
        </div>

    </div>
)
}

 


    



export default Book;


   
