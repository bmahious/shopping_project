import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../Contexts/ProductContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './category.styles.scss';

import React from 'react'

const Category = () => {
    const { category } = useParams()
    const {categoriesMap} = useContext(ProductsContext);

    // WE CAN USE THIS 
    //const products = categoriesMap[category]
    const [products, setProducts] = useState(categoriesMap[category]); 
    useEffect(() =>{
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
  return (
    <Fragment>
        <h2 className='category-title'> {category.toUpperCase()} </h2>
        <div className='category-container'>
            {products &&
            products.map(product => <ProductCard key={product.id} product={product} />)
            } 
        </div>
    </Fragment>
    
  )
}

export default Category