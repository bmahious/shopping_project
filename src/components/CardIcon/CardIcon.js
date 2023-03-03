import { useDispatch, useSelector } from 'react-redux';
import { selectCardCount, selectIsCardOpen } from '../../store/Card/CardSelector';
import { setIsOpenCard } from '../../store/Card/CardAction';
import {CardIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles';


const CardIcon = () => {


  const dispatch = useDispatch();

  const cardCount = useSelector(selectCardCount);
  const isOpenCard = useSelector(selectIsCardOpen);
  
  const isToggle = () => dispatch(setIsOpenCard(!isOpenCard));
  return (
    <CardIconContainer onClick={isToggle}>
        <ShoppingIcon />
                <ItemCount> {cardCount} </ItemCount>
    </CardIconContainer>
  )
}

export default CardIcon 