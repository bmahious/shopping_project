import { useContext  } from 'react';
import { CardContext } from '../../Contexts/CardContext';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import CardItem from '../CardItem/CardItem';


import React from 'react'

const CardDropdown = () => {

    const {cardItems} = useContext(CardContext);
    const navigate = useNavigate();

    const goToTheCheckoutPage = () => {
        navigate('/checkout')
    }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {
                cardItems.map((item) => (
                 <CardItem key={item.id} cardItem={item}/> 
                )) 
            }     
        </div> 
        <ButtonComponent onClick={goToTheCheckoutPage} > 
            Voir mon panier  
        </ButtonComponent>
    </div>
  )
}

export default CardDropdown