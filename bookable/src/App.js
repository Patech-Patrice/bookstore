import './App.css';
// import axios from 'axios';
// import Books from './components/books';
// import Users from './components/users';
import Dashboard from './components/dashboard';
import Authentication from './components/auth/authentication';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.js';




// import HomePage from 'bookable/src/components/homepage/homepage.js';
const App = () => {


  const categories = [
    {
    id: 1,
    title: 'Horror Novels',
    image: require('./assets/images/horror_logo.png'),
  },
  {
    id: 2,
    title: ' Suspense Novels',
    image: require('./assets/images/suspense_logo.jpeg')
  },
  {
    id: 3,
    title: 'Mystery Novels',
    image: require('./assets/images/mystery_logo.jpg'),
  },
  {
    id: 4,
    title: 'Thrillers Novels',
    image: require('./assets/images/thriller_logo.png'), 
  },
  {
    id: 5,
    title: 'Romance Novels',
    image: require('./assets/images/romance_logo.png'),
  }
]

  return (

        <div className="categories-container">
           {categories.map(( category) =>(
          
              <CategoryItem key={category.id} category={category} />
               ))}  

            
          </div>
  );
};


export default App;
