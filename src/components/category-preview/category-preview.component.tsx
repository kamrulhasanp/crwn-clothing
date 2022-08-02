import { FC } from 'react';

import ProductCard from '../product-card/product-card.component';

import { 
    CategoryPreviewContainer, 
    PreviewTitle, 
    Preview,
} from'./category-preview.styles';

import { CategoryItem } from '../../store/categories/categories.types';

type CategoryPreviewProps = {
    title: string;
    products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps>= ({ title, products }) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <PreviewTitle to={title}>{title.toUpperCase()}</PreviewTitle>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) =>(
                    <ProductCard  key={product.id} product={product}/>
                    ))
                }
            </Preview>
        </CategoryPreviewContainer>
    );

};

export default CategoryPreview;