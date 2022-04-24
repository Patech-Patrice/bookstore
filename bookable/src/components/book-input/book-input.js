import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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



  const handleChange = e => {
    console.log(e.target.name);
    let arrAuthor = bookInput.book.author;
    (e.target.name == 'first_name' || e.target.name == 'last_name' ) 
    && arrAuthor.map(x => (x.hasOwnProperty(e.target.name)) && (x[e.target.name] = e.target.value))

    console.log(arrAuthor)
    setBookInput(prevState => {
      return {
        book: {
          ...prevState.book,
          [e.target.name]: e.target.value,
          author: arrAuthor
        }
      };
    });
  };

  const handleSubmit = e => {

  }

  const {
    title,
    body,
    genre,
    image_url,
    author: [{ first_name }, { last_name }]
  } = bookInput.book;

  // console.log(bookInput);

  return (
    <div className="App">
      <h4> Create a New Novel:</h4>
      <form>
      Title: <input name="title" value={title} onChange={handleChange} />
      <br />
      Description: <input name="body" value={body} onChange={handleChange} />
      <br />
      Genre: <input name="genre" value={genre} onChange={handleChange} />
      <br />
      Image: <input name="image_url" value={image_url} onChange={handleChange} />
      <br />
      Author First Name: <input name="first_name" value={first_name} onChange={handleChange} />
      <br />
      Author Last Name: <input name="last_name" value={last_name} onChange={handleChange} />
      <br />
      <button onChange={handleSubmit} type="submit">Create Novel</button>
      </form>
    </div>
  );
}
