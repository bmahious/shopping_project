import { useContext } from 'react';
import { CardContext } from '../../Contexts/CardContext';

import './product-card.styles.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import React from 'react'

 const ProductCard = (product) => {

    const clickAddCard = () => addItemToCard(product.product)


   const {addItemToCard} = useContext(CardContext)
  return (
    <div className='product-card-container'>
        <img src={product.product.imageUrl} alt={`${product.product.name}`} />
        <div className='footer'>
            <span className='name'>{product.product.name}</span>
            <span className='price '>{product.product.price}</span>
        </div>
        <ButtonComponent 
            onClick={clickAddCard}
            buttonType='inverted'> 
            Ajouter au panier 
        </ButtonComponent>
    </div>
  )
}

export default ProductCard