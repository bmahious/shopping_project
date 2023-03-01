import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDoc } from '../../Utils/Firebase/Firebase';
import { Route, Routes } from 'react-router-dom';
import { setCategories } from '../../store/Categories/CategoryAction';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';


const ShopPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoryMap = async () => {
        const categoriesArray = await getCategoriesAndDoc();
        dispatch(setCategories(categoriesArray));
    }
    getCategoryMap();
}, [])

  return (
    <div className='shop-container'>
       <Routes>
          <Route index element={ <CategoriesPreview/> }  />
          <Route path=":category" element={ <Category /> }  />
       </Routes>
    </div>
  )
}

export default ShopPage






{/* <Fragment key={title}>
                <h2> {title} </h2>
                <div className='products-container'>
                    { 
                      categoriesMap[title].map(product => {
                          return(
                            <div>
                               <ProductCard key={product.id} product={product} />
                            </div>
                              
                          )
                      })
                    }
                </div>
            </Fragment>  */}