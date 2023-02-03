import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CardContext } from '../../Contexts/CardContext';

const CardIcon = () => {
  const {isOpenCard, setIsOpenCard} = useContext(CardContext);
  const isToggle = () => setIsOpenCard(!isOpenCard)
  return (
    <div className='cart-icon-container' onClick={isToggle}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
  )
}

export default CardIcon 