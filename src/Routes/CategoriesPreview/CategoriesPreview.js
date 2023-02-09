import { Fragment, useContext } from 'react'
import {ProductsContext } from '../../Contexts/ProductContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryPreview  from '../../components/CategoryPreview/CategoryPreview';
//import './categories-preview.styles.scss'

const CategoriesPreview = () => {

    const {categoriesMap} =  useContext(ProductsContext);   
    const myArray = Object.keys(categoriesMap)
  return (
    <>
        {
          myArray.map((title ) => {
            const products = categoriesMap[title]
            return <CategoryPreview key={title} title={title} products={products} />
          }
          )  
        }
    </>
  )
}

export default CategoriesPreview

