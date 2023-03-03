import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {CardDropdownContainer, EmptyMessage, CardItems } from './cart-dropdown.styles';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import CardItem from '../CardItem/CardItem';
import { selectCardItems } from '../../store/Card/CardSelector';


import React from 'react'

const CardDropdown = () => {

    //const {cardItems} = useContext(CardContext);
    const cardItems = useSelector(selectCardItems);
    const navigate = useNavigate();

    const goToTheCheckoutPage = () => {
        navigate('/checkout')
    }
  return (
    <CardDropdownContainer>
        <CardItems>
            {
                cardItems.length ? (cardItems.map((item) => (
                 <CardItem key={item.id} cardItem={item}/> 
                )) ) : (
                    <EmptyMessage>
                        Votre panier est vide
                    </EmptyMessage>
                )
            }     
        </CardItems> 
        <ButtonComponent onClick={goToTheCheckoutPage} > 
            Voir mon panier  
        </ButtonComponent>
    </CardDropdownContainer>
  )
}

export default CardDropdown