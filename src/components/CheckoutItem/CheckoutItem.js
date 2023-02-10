import { useContext } from 'react';
import { CardContext } from '../../Contexts/CardContext';
import {
    CheckoutItemContainer, 
    ImageContainer, 
    NamePriceSpan, 
    ArrowDiv,
    QuantitySpan, 
    ValueSpan, 
    RemoveButtonDiv
} from './checkout-item.styles';



const CheckoutItem = ({cardItem}) => {
    const { clearItemFromCard, addItemToCard, removeItemFromCard  } = useContext(CardContext);
    const {name, imageUrl, price, quantity} = cardItem;
    const clearHandler = () => clearItemFromCard(cardItem) 
    const addHandler = () => addItemToCard(cardItem) 
    const removeHandler = () => removeItemFromCard(cardItem) 
   return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
        </ImageContainer>
        <NamePriceSpan> {name} </NamePriceSpan>
        <QuantitySpan> 
             <ArrowDiv onClick={removeHandler} > &#10094; </ArrowDiv>
              <ValueSpan> {quantity} </ValueSpan>
             <ArrowDiv onClick={addHandler} > &#10095; </ArrowDiv>
        </QuantitySpan>
        <NamePriceSpan> {price} </NamePriceSpan>
        <RemoveButtonDiv onClick={clearHandler}>&#10005;</RemoveButtonDiv>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem