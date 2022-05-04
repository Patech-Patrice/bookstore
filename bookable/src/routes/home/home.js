import CategoryItem from '../../components/category-item/category-item.js';
import { Link } from 'react-router-dom';
import Welcome from '../../components/welcome.js'



const Home = () => {


  const categories = [
    {
    id: 1,
    title: 'Horror Novels',
    image: require('../../assets/images/horror_logo.png'),
    navigate: '/books/horror',
    
  },
  {
    id: 2,
    title: ' Suspense Novels',
    image: require('../../assets/images/suspense_logo.jpeg')
  },
  {
    id: 3,
    title: 'Mystery Novels',
    image: require('../../assets/images/mystery_logo.jpg'),
  },
  {
    id: 4,
    title: 'Thrillers Novels',
    image: require('../../assets/images/thriller_logo.png'), 
  },
  {
    id: 5,
    title: 'Romance Novels',
    image: require('../../assets/images/romance_logo.png'),
  },  
  {
    id: 6,
    title: 'Fiction Novels',
    image: require('../../assets/images/romance_logo.png'),
  }
]






  return (
      
    

        // <div className="categories-container">
             
        //    {categories.map(( category) =>(
        //       <CategoryItem key={category.id} category={category} />

        //        ))} 
        //   </div>

        <div className="categories-container">
             
      <Welcome />
       </div>
  );
};


export default Home;
