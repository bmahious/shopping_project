import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCategoriesStart } from '../../store/Categories/CategoryAction';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';


const ShopPage = () => {

  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchCategoriesStart());
    }, []);

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
