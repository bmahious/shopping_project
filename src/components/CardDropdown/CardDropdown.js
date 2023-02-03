import './cart-dropdown.styles.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

import React from 'react'

const CardDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' />
          
        <ButtonComponent> 
            Voir mon panier 
        </ButtonComponent>
    </div>
  )
}

export default CardDropdown