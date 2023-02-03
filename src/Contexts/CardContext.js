 import { createContext, useState } from "react";

 export const CardContext = createContext({
    isOpenCard : false,
    setIsOpenCard : () => {}
 });

 export const CardProvider = ({children}) => {
    const [isOpenCard, setIsOpenCard] = useState(false);
    const value = {isOpenCard, setIsOpenCard}
    return <CardContext.Provider value={value}> {children} </CardContext.Provider>
 }