import GlobalWrapper from 'wrappers/global-wrapper/global-wrapper';
import Container from 'wrappers/container/container';
import NavbarComponent from 'components/navbar';
import BannerComponent from 'components/banner';
import PetsContainer from 'components/pets-container';
import { GetStaticProps } from 'next';
import { SmallPetInformation } from 'lib/pets';
import SectionOneAd from 'components/ads/section-1';
import ProductsContainer from 'components/products-container';
import { SmallProductInformation } from 'lib/products';
import { server } from 'config';

export const getStaticProps: GetStaticProps = async () => {
  const resPets = await fetch(`${server}/pets`);
  const resProducts = await fetch(`${server}/products`);
  console.log(resProducts);

  const petsList = await resPets.json();
  const productsList = await resProducts.json();
  return { props: { petsList, productsList } };
};

const HomePageReact: React.FC<{
  petsList?: SmallPetInformation[];
  productsList?: SmallProductInformation[];
}> = ({ petsList, productsList }) => {
  return (
    <GlobalWrapper>
      <NavbarComponent />
      <BannerComponent />
      <Container>
        <PetsContainer petsList={petsList} />
        <SectionOneAd />
        <ProductsContainer productsList={productsList} />
      </Container>
    </GlobalWrapper>
  );
};

export default HomePageReact;
