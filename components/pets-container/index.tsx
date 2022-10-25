import StyledButton from 'components/button';
import PetsCard from 'components/cards/pets-card';
import ChevronRightIcon from 'components/icons/chevron-right.icon';
import { SmallPetInformation } from 'lib/pets';
import React from 'react';
import {
  PetsContainerDataWrapper,
  PetsContainerHeader,
  PetsContainerHeaderTextContent,
  PetsContainerWrapper,
} from './pets-container.styles';

const PetsContainer: React.FC<{
  petsList?: SmallPetInformation[];
}> = ({ petsList }) => {
  return (
    <PetsContainerWrapper>
      <PetsContainerHeader>
        <PetsContainerHeaderTextContent>
          <h3>Whats new?</h3>
          <h2>Take a look at some of our pets</h2>
        </PetsContainerHeaderTextContent>
        <StyledButton buttonType="transparent" rightIcon={<ChevronRightIcon />}>
          View more
        </StyledButton>
      </PetsContainerHeader>
      <PetsContainerDataWrapper>
        {petsList?.map((pet, index) => (
          <PetsCard key={index} {...pet} />
        ))}
      </PetsContainerDataWrapper>
      <StyledButton buttonType="transparent" rightIcon={<ChevronRightIcon />}>
        View more
      </StyledButton>
    </PetsContainerWrapper>
  );
};

export default PetsContainer;
