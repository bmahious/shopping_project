import { CARD_ACTION_TYPES } from "./CardTypes";
import { createAction } from "../../Utils/Reducer/Reducer";

export const setIsOpenCard = (boolean) =>
  createAction(CARD_ACTION_TYPES.IS_OPEN_CARD, boolean)



//   const setIsCardOpenFunction = (bool) => {
//     dispatch({type : actionTypesToUse.IS_OPEN_CARD, payload : bool})
//   }



  const addCardItem = (cardItems, productToAdd) => {

    const existingCardItem = cardItems.find((cardItem) => 
    cardItem.id === productToAdd.id);
 
    if (existingCardItem) {
       return cardItems.map((cardItem) => 
       cardItem.id === productToAdd.id ? 
       {...cardItem, quantity: cardItem.quantity + 1}
       :
        cardItem
       )
    }
 
    return [...cardItems, {...productToAdd, quantity : 1 }]
  }
 
  const removeCardItem = (cardItems, removeItem) => {
    const existingCardItem = cardItems.find((cardItem) => 
        cardItem.id === removeItem.id
    );
 
    if (existingCardItem.quantity === 1) {
       return cardItems.filter((cardItem) => 
           cardItem.id !== removeItem.id
       )
    }
    return cardItems.map((cardItem) => 
       cardItem.id === removeItem.id ? 
       {...cardItem, quantity: cardItem.quantity - 1}
       :
        cardItem
       )
  }
 
 
  const clearCardItem = (cardItems, itemToClear) => 
  cardItems.filter((cardItem) => cardItem.id !== itemToClear.id)

//  


  export const addItemToCard = (cardItems, productToAdd) => {
    const newCardItems = addCardItem(cardItems, productToAdd)
    return createAction(CARD_ACTION_TYPES.SET_CARD_ITEM, newCardItems);
  }

  export const removeItemFromCard = (cardItems, removeItem) =>{
    const newCardItems = removeCardItem(cardItems, removeItem)
    return createAction(CARD_ACTION_TYPES.SET_CARD_ITEM, newCardItems);
  }

  export  const clearItemFromCard = (cardItems, itemToClear) =>{
    const newCardItems = clearCardItem(cardItems, itemToClear)
    return createAction(CARD_ACTION_TYPES.SET_CARD_ITEM, newCardItems);
  }




