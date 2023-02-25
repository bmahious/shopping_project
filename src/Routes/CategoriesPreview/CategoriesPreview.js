import { Fragment } from 'react';
import { selectCategoriesMap } from '../../store/Categories/CategorySelector';
//import {ProductsContext } from '../../Contexts/ProductContext';
//import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryPreview  from '../../components/CategoryPreview/CategoryPreview';
import { useSelector } from 'react-redux';
//import './categories-preview.styles.scss'

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const myArray = Object.keys(categoriesMap)
  return (
    <Fragment>
        {
          myArray.map((title ) => {
            const products = categoriesMap[title]
            return <CategoryPreview key={title} title={title} products={products} />
          }
          )  
        }
    </Fragment>
  )
}

export default CategoriesPreview

