import React from 'react';
import { ImageWrapper, PetsCardInfoWrapper, PetsCardWrapper } from './pet-card.styles';
import Image from 'next/image';
import { SmallPetInformation } from 'lib/pets';

const PetsCard: React.FC<SmallPetInformation> = ({ age, cost, gene, name, type, image }) => {
  return (
    <PetsCardWrapper>
      <ImageWrapper>
        <Image src={image} alt="pets pictures" layout="fill" />
      </ImageWrapper>
      <PetsCardInfoWrapper>
        <h2>
          {name} - {type}
        </h2>
        <div>
          <h3>
            Gene: <span>{gene}</span>
          </h3>
          <div />
          <h3>
            Age: <span>{age}</span>
          </h3>
        </div>
        <h4>{cost}</h4>
      </PetsCardInfoWrapper>
    </PetsCardWrapper>
  );
};

export default PetsCard;
