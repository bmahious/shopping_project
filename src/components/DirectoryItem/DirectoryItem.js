import CategoryItem from '../category-item/CategoryItem';
import {CategoriesContainer} from './DirectoryItem.styles';
import React from 'react';

const categories = [
  {
    "id": 1,
    "title": "Chapeaux",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route" : 'shop/hats'
  },
  {
    "id": 2,
    "title": "Vestes",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route" : 'shop/jackets'
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route" : 'shop/sneakers'
  },
  {
    "id": 4,
    "title": "Femme",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route" : 'shop/womens'
  },
  {
    "id": 5,
    "title": "Homme",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route" : 'shop/mens '
  }
]

const DirectoryItem = ( ) => {
  return (
    <CategoriesContainer>
      {
        categories.map(category => {
          return (
            <CategoryItem key={category.id} category={category} />
          )
        })
      }
    </CategoriesContainer>
  )
}

export default DirectoryItem