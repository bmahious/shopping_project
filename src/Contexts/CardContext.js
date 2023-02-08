 import { createContext, useState, useEffect } from "react";

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

 export const CardContext = createContext({
    isOpenCard : false,
    setIsOpenCard : () => {}, 
    cardItems : [],
    addItemToCard : () => {},
    removeItemFromCard : () => {},
    clearItemFromCard : () => {},
    cardCount:0,
    checkoutPage : [],
    total : 0
 });

 export const CardProvider = ({children}) => {
    const [isOpenCard, setIsOpenCard] = useState(false);
    const [cardItems, setCardItems] = useState([]);
    const [cardCount, setCardCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      const newCarCount = cardItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
      setCardCount(newCarCount)
    }, [cardItems]);

    useEffect(() => {
      const newTotal = cardItems.reduce((total, cardItem) => total + cardItem.quantity * cardItem.price, 0)
      setTotal(newTotal)
    }, [cardItems])


    const addItemToCard = (productToAdd) => {
      setCardItems(addCardItem(cardItems, productToAdd))
    }

    const removeItemFromCard = (removeItem) =>{
      setCardItems(removeCardItem(cardItems, removeItem))
    }

    const clearItemFromCard = (itemToClear) =>{
      setCardItems(clearCardItem(cardItems, itemToClear))
    }
    
    const value = {
      isOpenCard, 
      setIsOpenCard, 
      addItemToCard, 
      cardItems, 
      cardCount, 
      removeItemFromCard, 
      clearItemFromCard, 
      total
   }
    return <CardContext.Provider value={value}> {children} </CardContext.Provider>
 }