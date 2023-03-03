import {useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/Categories/CategorySelector';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './category.styles.scss';
import Spinner from '../../components/Spinner/Spinner';

import React from 'react'

const Category = () => {
    
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    //const {categoriesMap} = useContext(ProductsContext);

    // WE CAN USE THIS 
    //const products = categoriesMap[category]
    const [products, setProducts] = useState(categoriesMap[category]); 
    useEffect(() =>{
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
  return (
    <Fragment>
        <h2 className='category-title'> {category.toUpperCase()} </h2>
        {
          isLoading ? <Spinner /> : 
          <div className='category-container'>
              { products &&
                products.map(product => <ProductCard key={product.id} product={product} />)
              } 
          </div>
        }
        
    </Fragment>
    
  )
}

export default Category