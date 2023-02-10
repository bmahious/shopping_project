import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';


const ShopPage = () => {

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