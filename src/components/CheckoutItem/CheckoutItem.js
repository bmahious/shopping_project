import { useSelector, useDispatch } from 'react-redux';
import { selectCardItems } from '../../store/Card/CardSelector';
import {addItemToCard, clearItemFromCard, removeItemFromCard} from '../../store/Card/CardAction'; 
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
    //const { clearItemFromCard, addItemToCard, removeItemFromCard  } = useContext(CardContext);
    const {name, imageUrl, price, quantity} = cardItem;
    const cardItems = useSelector(selectCardItems)
    const dispatch = useDispatch()
    const clearHandler = () => dispatch(clearItemFromCard(cardItems, cardItem))
    const addHandler = () => dispatch(addItemToCard(cardItems, cardItem))
    const removeHandler = () => dispatch(removeItemFromCard(cardItems, cardItem))
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