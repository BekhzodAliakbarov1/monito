import GlobalWrapper from 'wrappers/global-wrapper/global-wrapper';
import Container from 'wrappers/container/container';
import NavbarComponent from 'components/navbar';
import BannerComponent from 'components/banner';
import PetsContainer from 'components/pets-container';
import { GetStaticProps } from 'next';
import { SmallPetInformation } from 'lib/pets';
import SectionOneAd from 'components/ads/section-1';
import { server } from 'config';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/pets`);
  const petsList = await res.json();
  return { props: { petsList } };
};

const HomePageReact: React.FC<{
  petsList?: SmallPetInformation[];
}> = ({ petsList }) => {
  return (
    <GlobalWrapper>
      <NavbarComponent />
      <BannerComponent />
      <Container>
        <PetsContainer petsList={petsList} />
        <SectionOneAd />
      </Container>
    </GlobalWrapper>
  );
};

export default HomePageReact;
