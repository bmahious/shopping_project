import { createContext, useState, useEffect } from "react";
import { addCollectionToDocuments } from '../Utils/Firebase/Firebase'

import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
    products : [],
});

export const ProductsProvider = ({children}) => {
   
    const [products, setProducts] = useState([]);

    useEffect(() => {
        addCollectionToDocuments('categories', SHOP_DATA)
    }, [])
    
    const value = { products }
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
    
}