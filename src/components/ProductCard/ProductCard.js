import { useDispatch, useSelector } from 'react-redux';
import { selectCardItems } from '../../store/Card/CardSelector';
import { addItemToCard  } from '../../store/Card/CardAction';
import './product-card.styles.scss';
import ButtonComponent, {BUTTON_TYPE_CLASSES } from '../ButtonComponent/ButtonComponent';
import React from 'react'

 const ProductCard = (product) => {
  const dispatch = useDispatch();
  const cardItems = useSelector(selectCardItems)

    const clickAddCard = () => dispatch(addItemToCard(cardItems, product.product))
    // const {addItemToCard} = useContext(CardContext)
    
  return (
    <div className='product-card-container'>
        <img src={product.product.imageUrl} alt={`${product.product.name}`} />
        <div className='footer'>
            <span className='name'>{product.product.name}</span>
            <span className='price '>{product.product.price}</span>
        </div>
        <ButtonComponent 
            onClick={clickAddCard}
            buttonType={BUTTON_TYPE_CLASSES.inverted}> 
            Ajouter au panier 
        </ButtonComponent>
    </div>
  )
}

export default ProductCard