import { useNavigate } from 'react-router-dom';
import {BackgroundImage, CategoryItemContainer, Body} from './CategoryItem.styles'


const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const  onNavigateHandler = () => navigate(route)
  return (
    <CategoryItemContainer onClick={onNavigateHandler} >
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>
          Acheter
        </p>
      </Body>
    </CategoryItemContainer>
  );
};


export default CategoryItem






// MON CODE 

// const CategoryItem = ({category}) => {
//   return (
//     <div className="category-item-container">
//         {/* <img  /> */}
//         <div className="background-image" style={{
//             backgroundImage : `url(${category.imageUrl})`
//         }} ></div>
//         <div className="body">
//             <h2> {category.title}</h2>
//             <p>Shop Now</p>
//         </div>
//     </div> 
//   )
// }