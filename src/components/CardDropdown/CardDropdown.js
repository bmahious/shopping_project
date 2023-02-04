import { useContext  } from 'react';
import { CardContext } from '../../Contexts/CardContext';

import './cart-dropdown.styles.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import CardItem from '../CardItem/CardItem';


import React from 'react'

const CardDropdown = () => {

    const {cardItems} = useContext(CardContext);

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {
                cardItems.map((item) => (
                 <CardItem key={item.id} cardItem={item}/> 
                )) 
            }     
        </div> 
        <ButtonComponent> 
            Voir mon panier 
        </ButtonComponent>
    </div>
  )
}

export default CardDropdown