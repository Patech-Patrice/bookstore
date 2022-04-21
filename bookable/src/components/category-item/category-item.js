import '../category-item/category-item.styles.scss';
import {  Link } from 'react-router-dom';


const CategoryItem = ({ category }) => {
    const { image, title } = category;
    return (
        <div  className="category-container">
        < div className="background-image" style={{
          backgroundImage: `url(${image})`
        }} />
          <div className="category-body-container">
          <h2>{title} </h2>
          <Link className="card-title" href="" to="/books"> Show Novels</Link>
       </div>
       </div>
    )
}

export default CategoryItem;