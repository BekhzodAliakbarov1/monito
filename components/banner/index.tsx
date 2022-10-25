import StyledButton from 'components/button';
import MediaIcon from 'components/icons/media.icon';
import React from 'react';
import {
  BannerBox,
  BannerImageBox,
  BannerWrapper,
  ButtonsWrapper,
  SquareOne,
  SquareTwo,
} from './banner.styles';
import image from 'public/images/banner.png';

const BannerComponent = () => {
  return (
    <BannerWrapper>
      <BannerBox>
        <h1>One more friend</h1>
        <h3>Thousands more fun!</h3>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who will always be with
          you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <ButtonsWrapper>
          <StyledButton rightIcon={<MediaIcon />} buttonType="transparent">
            View Intro
          </StyledButton>
          <StyledButton>Explore Now</StyledButton>
        </ButtonsWrapper>

        <BannerImageBox image={image.src} />
        <SquareOne />
        <SquareTwo />
      </BannerBox>
    </BannerWrapper>
  );
};

export default BannerComponent;
