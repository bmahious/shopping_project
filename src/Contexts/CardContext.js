 import { createContext, useState, useEffect, useReducer } from "react";

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

 const clearCardItem = (cardItems, itemToClear) => {
   return cardItems.filter((cardItem) => 
          cardItem.id !== itemToClear.id
      )
 }

 const INITIAL_STATE = {
    isOpenCard : false,
    cardCount:0,
    cardTotal : 0, 
    cardItems : [],
 }

 const actionTypesToUse = {
  SET_CARD_ITEM : 'SET_CARD_ITEM',
  IS_OPEN_CARD : 'IS_OPEN_CARD'
 }

 const cardReducer = (state, action) => {
  const { type, payload } = action
  switch(type) {
    case actionTypesToUse.SET_CARD_ITEM :
    return {
      ...state,
      ...payload
    }
    case actionTypesToUse.IS_OPEN_CARD :
    return {
      ...state,
      isOpenCard : payload
    }
    default :
      throw new Error(`this is the error ${type}`)
  }
 }


 export const CardContext = createContext({
  isOpenCard: false,
  setIsOpenCard: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  clearItemFromCard: () => {},
  cardCount: 0,
  cardTotal: 0,
});


 export const CardProvider = ({children}) => {
      
    const [isOpenCard, setIsOpenCard] = useState(false);
   
    const [{ cardCount, cardTotal, cardItems }, dispatch] = useReducer(
      cardReducer,
      INITIAL_STATE
    );

    const updateCardItemsReducer = (newCardItems) => {

      const newCarCount = newCardItems.reduce((total, cardItem) => total + cardItem.quantity, 0);
      const newTotal = newCardItems.reduce((total, cardItem) => total + cardItem.quantity * cardItem.price, 0);
      dispatch({type : actionTypesToUse.SET_CARD_ITEM, payload: {cardItems: newCardItems, cardTotal: newTotal, cardCount: newCarCount} })
    }


    const addItemToCard = (productToAdd) => {
      const newCardItems = addCardItem(cardItems, productToAdd)
      updateCardItemsReducer(newCardItems);
    }

    const removeItemFromCard = (removeItem) =>{
      const newCardItems = removeCardItem(cardItems, removeItem)
      updateCardItemsReducer(newCardItems);
    }

    const clearItemFromCard = (itemToClear) =>{
      const newCardItems = clearCardItem(cardItems, itemToClear)
      updateCardItemsReducer(newCardItems);
    }

    const setIsCardOpenFunction = (bool) => {
      dispatch({type : actionTypesToUse.IS_OPEN_CARD, payload : bool})
    }
    
    const value = {
      isOpenCard, 
      setIsOpenCard,
      addItemToCard, 
      cardItems, 
      cardCount, 
      removeItemFromCard, 
      clearItemFromCard, 
      cardTotal
   }
    return <CardContext.Provider value={value}> {children} </CardContext.Provider>
 }




  // const [cardItems, setCardItems] = useState([]);
    // const [cardCount, setCardCount] = useState(0);
    // const [total, setTotal] = useState(0);

    // useEffect(() => {
    //   const newCarCount = cardItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
    //   setCardCount(newCarCount)
    // }, [cardItems]);

    // useEffect(() => {
    //   const newTotal = cardItems.reduce((total, cardItem) => total + cardItem.quantity * cardItem.price, 0)
    //   setTotal(newTotal)
    // }, [cardItems]);