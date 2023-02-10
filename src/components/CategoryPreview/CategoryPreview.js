import {PreviewDiv, TitleLink, CategoryPreviewContainer} from './category-preview.styles'
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
        <h2>
            <TitleLink to={title} > {title} </TitleLink>
        </h2>
        <PreviewDiv>
             {
                products.filter((_, idx) => idx < 4).map(product => 
                   <ProductCard key={product.id} product={product}/> )
             }
        </PreviewDiv>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview