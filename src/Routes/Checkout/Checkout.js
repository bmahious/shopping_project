 import './checkout.styles.scss';
 import { useSelector } from 'react-redux';
 import {selectCardItems, selectCardTotal} from '../../store/Card/CardSelector'

 import React from 'react'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
 
 const Checkout = () => {
    //const {cardItems, cardTotal} = useContext(CardContext);
    const cardItems = useSelector(selectCardItems);
    const cardTotal = useSelector(selectCardTotal );
   
   return (
     <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'> <span> Produit </span> </div>
            <div clas sName='header-block'> <span> Description </span> </div>
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
        <span className='total'> Total :  {cardTotal},00 € </span>
     </div>
   )
 }
 
 export default Checkout


 