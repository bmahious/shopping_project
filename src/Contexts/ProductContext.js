// import { createContext, useState, useEffect } from "react";
// import { getCategoriesAndDoc } from '../Utils/Firebase/Firebase'

// import SHOP_DATA from '../shop-data.js'

// export const ProductsContext = createContext({
//     categoriesMap : {},
// });

// export const ProductsProvider = ({children}) => {
   
//     const [categoriesMap, setCategoriesMap] = useState({});

//     useEffect(() => {
//         const getCategoryMap = async () => {
//             const categoryMap = await getCategoriesAndDoc();
//             setCategoriesMap(categoryMap);
//         }
//         getCategoryMap();
//     }, [])
//     const value = { categoriesMap }
//     return (
//         <ProductsContext.Provider value={value}>
//              {children} 
//         </ProductsContext.Provider>
//     )
    
// }