import PrizeIcon from 'components/icons/prize.icon';
import { SmallProductInformation } from 'lib/products';
import Image from 'next/image';
import React from 'react';
import {
  ImageWrapper,
  MainInfoWrapper,
  ProductPrizeWrapper,
  ProductsCardTextBox,
  ProductsCardWrapper,
} from './products-card.styles';

const ProductsCard: React.FC<SmallProductInformation> = ({
  cost,
  image,
  name,
  prize,
  product,
  size,
}) => {
  return (
    <ProductsCardWrapper>
      <ImageWrapper>
        <Image src={image} alt="products pictures" layout="fill" />
      </ImageWrapper>
      <ProductsCardTextBox>
        <h2>{name}</h2>
        <MainInfoWrapper>
          <h3>
            Product: <span>{product}</span>
          </h3>
          <div />
          <h3>
            Size: <span>{size}</span>
          </h3>
        </MainInfoWrapper>
        <h4>{cost}</h4>
        <ProductPrizeWrapper>
          <PrizeIcon />
          <div />
          <h4>{prize}</h4>
        </ProductPrizeWrapper>
      </ProductsCardTextBox>
    </ProductsCardWrapper>
  );
};

export default ProductsCard;
