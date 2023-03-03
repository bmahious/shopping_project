import { Fragment } from 'react';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/Categories/CategorySelector';
import Spinner from '../../components/Spinner/Spinner';

import CategoryPreview  from '../../components/CategoryPreview/CategoryPreview';
import { useSelector } from 'react-redux';
//import './categories-preview.styles.scss'

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const myArray = Object.keys(categoriesMap)
    console.log(isLoading)
  return (
    <Fragment>
        {
          isLoading ? <Spinner /> :
          myArray.map((title ) => {
            const products = categoriesMap[title]
            return  <CategoryPreview key={title} title={title} products={products} />
          }
          )  
        }
    </Fragment>
  )
}

export default CategoriesPreview

