import React from 'react';
import {
  SectionOneAdLeftContent,
  SectionOneAdRightContent,
  SectionOneAdWrapper,
  ButtonsWrapper,
  SquareOne,
} from './section-1.styles';
import image from 'public/images/add1.png';
import StyledButton from 'components/button';
import MediaIcon from 'components/icons/media.icon';

const SectionOneAd = () => {
  return (
    <SectionOneAdWrapper>
      <SectionOneAdLeftContent>
        <img src={image.src} alt="ads one image" />
      </SectionOneAdLeftContent>
      <SectionOneAdRightContent>
        <h1>One more friend</h1>
        <h2>Thousands more fun!</h2>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who will always be with
          you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <ButtonsWrapper>
          <StyledButton buttonType="transparent" rightIcon={<MediaIcon />}>
            View Intro
          </StyledButton>
          <StyledButton>Explore Now</StyledButton>
        </ButtonsWrapper>
      </SectionOneAdRightContent>
      <SquareOne />
    </SectionOneAdWrapper>
  );
};

export default SectionOneAd;
