import './CategoryItem.styles.scss'



const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
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