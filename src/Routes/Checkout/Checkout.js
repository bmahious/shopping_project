 import './checkout.styles.scss';
 import ProductCard from '../../components/ProductCard/ProductCard';
 import { useContext } from 'react';
import { CardContext } from '../../Contexts/CardContext';

 import React from 'react'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
 
 const Checkout = () => {
    const {cardItems, total} = useContext(CardContext);
   return (
     <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'> <span> Produit </span> </div>
            <div className='header-block'> <span> Description </span> </div>
            <div className='header-block'> <span> Quantité </span> </div>
            <div className='header-block'> <span> Prix </span> </div>
            <div className='header-block'> <span> Retirer </span> </div>
        </div>
       { 
            cardItems.map((el)=> {
                
                return (
                    <CheckoutItem key={el.id} cardItem={el}/>
                )
            })
        }
        <span className='total'> Total :  {total},00 € </span>
     </div>
   )
 }
 
 export default Checkout


 