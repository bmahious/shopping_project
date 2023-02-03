import './product-card.styles.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import React from 'react'

const ProductCard = (product) => {
   
  return (
    <div className='product-card-container'>
        <img src={product.product.imageUrl} alt={`${product.product.name}`} />
        <div className='footer'>
            <span className='name'>{product.product.name}</span>
            <span className='price '>{product.product.price}</span>
        </div>
        <ButtonComponent 
            buttonType='inverted'> 
            Ajouter au panier 
        </ButtonComponent>
    </div>
  )
}

export default ProductCard