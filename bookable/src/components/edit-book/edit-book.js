import React, {useState} from 'react';





const handleUpdate = ()=> {
    alert('Edit Book Submitted');
}

const handleChange = ()=> {
    alert('Edit Book Submitted');
}




const EditBook = () => {
    return (
      <div className="App">
 
      <h2> Edit Book Form: </h2>

    
      <form  onSubmit={handleUpdate}>
      Title: <input type='text' name="title" onChange={handleChange} />
      <br />
      <br />
      Genre: <input name="genre"  onChange={handleChange} />
      <br />
      <br />
      Cover Image URL: <input name="image_url"  onChange={handleChange} />
      <br />
      <br />

  
      <br />
      Description: <textarea name="body" rows="4" cols="50"  onChange={handleChange} />  
      <br />
      <br />
      Author: <input name="author"  onChange={handleChange} />
      <br />
      <br />
      
      <button onChange={handleUpdate} type="submit">Update Book</button>
      </form>
    
    </div>
  
    );





  };

  export default EditBook;