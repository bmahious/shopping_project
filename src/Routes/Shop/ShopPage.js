import { useContext } from 'react'
import {ProductsContext } from '../../Contexts/ProductContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ShopPage.styles.scss'

const ShopPage = () => {

    const {products} =  useContext(ProductsContext)
 
  return (
    <div className='products-container'>
        { 
           products.map(product => {
                return(
                    <ProductCard key={product.id} product={product} />
                )
            })
        }
    </div>
  )
}

export default ShopPage