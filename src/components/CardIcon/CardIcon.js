import { useContext } from 'react';
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {CardIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles';
import { CardContext } from '../../Contexts/CardContext';


const CardIcon = () => {

  const {isOpenCard, setIsOpenCard, cardCount} = useContext(CardContext);
  
  const isToggle = () => setIsOpenCard(!isOpenCard)
  return (
    <CardIconContainer onClick={isToggle}>
        <ShoppingIcon />
                <ItemCount> {cardCount} </ItemCount>
    </CardIconContainer>
  )
}

export default CardIcon 