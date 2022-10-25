import StyledButton from 'components/button';
import ProductsCard from 'components/cards/products-card';
import ChevronRightIcon from 'components/icons/chevron-right.icon';
import { SmallProductInformation } from 'lib/products';
import React from 'react';
import {
  ProductsContainerDataWrapper,
  ProductsContainerHeader,
  ProductsContainerHeaderTextContent,
  ProductsContainerWrapper,
} from './products-container.styles';

const ProductsContainer: React.FC<{
  productsList?: SmallProductInformation[];
}> = ({ productsList }) => {
  return (
    <ProductsContainerWrapper>
      <ProductsContainerHeader>
        <ProductsContainerHeaderTextContent>
          <h3>Hard to choose right products for your pets?</h3>
          <h2>Our Products</h2>
        </ProductsContainerHeaderTextContent>
        <StyledButton buttonType="transparent" rightIcon={<ChevronRightIcon />}>
          View more
        </StyledButton>
      </ProductsContainerHeader>
      <ProductsContainerDataWrapper>
        {productsList?.map((product) => (
          <ProductsCard key={product.id} {...product} />
        ))}
      </ProductsContainerDataWrapper>
      <StyledButton buttonType="transparent" rightIcon={<ChevronRightIcon />}>
        View more
      </StyledButton>
    </ProductsContainerWrapper>
  );
};

export default ProductsContainer;
