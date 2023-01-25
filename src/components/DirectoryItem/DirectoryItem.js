import './DirectoryItem.styles.scss';
import CategoryItem from '../category-item/CategoryItem'

import React from 'react'

const DirectoryItem = ({categories}) => {
  return (
    <div className="categories-container">
      {
        categories.map(category => {
          return (
            <CategoryItem key={category.id} category={category} />
          )
        })
      }
    </div>
  )
}

export default DirectoryItem