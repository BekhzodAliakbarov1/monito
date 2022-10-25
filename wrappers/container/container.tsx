import { sizes } from 'config/theme';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
    padding: 0px;
  }
  @media (max-width: ${sizes.breakpoints.xl}) {
    padding: 0 15px;
  }
  @media (max-width: ${sizes.breakpoints.sm}) {
    padding: 0 15px;
  }
`;

export default Container;
