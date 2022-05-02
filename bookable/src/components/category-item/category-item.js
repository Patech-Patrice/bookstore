import '../category-item/category-item.styles.scss';
import {  Link } from 'react-router-dom';
import Books from '../../components/books/books.js'


const CategoryItem = ({ category }) => {
    const { image, title } = category;

    const filterGenre = (props) => {
      return (
        <div></div>
      );
    }





    return (
        <div  className="category-container">
        < div className="background-image" style={{
          backgroundImage: `url(${image})`
        }} />
          <div className="category-body-container">
          <h2>{title} </h2>
          {/* <Books />  */}
          {/* when user clicks on show novels, they will be directed to the novels of that category item 
          Maybe route looks like api/v1/books/genres*/}
          <Link className="card-title" href="" to="/books"> Show Novels</Link>
       </div>
       </div>
    )
}

export default CategoryItem;