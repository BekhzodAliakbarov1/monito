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

const ProductsCard: React.FC<SmallProductInformation> = () => {
  return (
    <ProductsCardWrapper>
      <ImageWrapper>
        <Image src="/public/images/pet1.png" alt="pets pictures" layout="fill" />
      </ImageWrapper>
      <ProductsCardTextBox>
        <h2>Reflex Plus Adult Cat Food Salmon</h2>
        <MainInfoWrapper>
          <h3>
            Product: <span>Dog Food</span>
          </h3>
          <div />
          <h3>
            Size: <span>385gm</span>
          </h3>
        </MainInfoWrapper>
        <h4>140.000 VND</h4>
        <ProductPrizeWrapper>
          <PrizeIcon />
          <div />
          <h4>Free Toy & Free Shaker</h4>
        </ProductPrizeWrapper>
      </ProductsCardTextBox>
    </ProductsCardWrapper>
  );
};

export default ProductsCard;
