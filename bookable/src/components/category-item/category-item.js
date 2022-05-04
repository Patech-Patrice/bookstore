import { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import Books from '../../components/books/books.js'
import '../category-item/category-item.styles.scss';



const CategoryItem = ({ category }) => {
    const { image, title } = category;


    return (

        <div  className="category-container">
          <h1> Welcome to the Book Log App</h1>
           
        {/* < div className="background-image" style={{ backgroundImage: `url(${image})`}} />
          <div className="category-body-container">
         
          <h2>{title} </h2>
          <Link className="card-title" href="" to="/books/genre"> Show Novels</Link>
          </div>
            <div className="card mb-3" style={{width: '500px'}}>
                <div className='' key={books.id}>
                  {books.filter(books => books.genre ).map(filteredBooks => (
                    <li>
                      {filteredBooks.genre}
                    </li>
                  ))}
                  </div>
                </div> */}
            
       </div>
    )
}

export default CategoryItem;