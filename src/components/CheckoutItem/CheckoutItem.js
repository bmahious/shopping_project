import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CardContext } from '../../Contexts/CardContext';


const CheckoutItem = ({cardItem}) => {
    const { clearItemFromCard, addItemToCard, removeItemFromCard  } = useContext(CardContext);
    const {name, imageUrl, price, quantity} = cardItem;
    const clearHandler = () => clearItemFromCard(cardItem) 
    const addHandler = () => addItemToCard(cardItem) 
    const removeHandler = () => removeItemFromCard(cardItem) 
   return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'> 
             <div onClick={removeHandler}  className='arrow'> &#10094; </div>
              <span className='value'> {quantity} </span>
             <div onClick={addHandler}  className='arrow'> &#10095; </div>
        </span>
        <span className='price'> {price} </span>
        <div onClick={clearHandler}  className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem