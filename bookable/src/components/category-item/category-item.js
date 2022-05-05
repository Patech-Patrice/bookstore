import { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import Books from '../../components/books/books.js'
import '../category-item/category-item.styles.scss';



const CategoryItem = ({ category }) => {
    const { image, title } = category;


    return (

        <div  className="category-container">
          {/* <h1> Welcome to the Book Log App</h1> */}
           
 
            
       </div>
    )
}

export default CategoryItem;