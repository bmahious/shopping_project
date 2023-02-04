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

 export const CardContext = createContext({
    isOpenCard : false,
    setIsOpenCard : () => {}, 
    cardItems : [],
    addItemToCard : () => {},
    cardCount:0
 });

 export const CardProvider = ({children}) => {
    const [isOpenCard, setIsOpenCard] = useState(false);
    const [cardItems, setCardItems] = useState([]);
    const [cardCount, setCardCount] = useState(0);

    useEffect(() => {
      const newCarCount = cardItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
      setCardCount(newCarCount)
    }, [cardItems])

    const addItemToCard = (productToAdd) => {
      setCardItems(addCardItem(cardItems, productToAdd))
    }

    const value = {isOpenCard, setIsOpenCard, addItemToCard, cardItems, cardCount }
    return <CardContext.Provider value={value}> {children} </CardContext.Provider>
 }