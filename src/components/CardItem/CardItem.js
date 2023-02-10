//import './cart-item.styles.scss';
import {CardItemContainer, ItemDetails, NameSpan} from './cart-item.styles';


const CardItem = ({cardItem}) => {
    const {name, quantity, imageUrl, price } = cardItem
  return (
    <CardItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
           <NameSpan> { name } </NameSpan>
           <span> { quantity} x {price} € </span>
        </ItemDetails>
    </CardItemContainer>
  )
}

export default CardItem