import { sizes } from 'config/theme';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: ${sizes.breakpoints.xl}) {
    padding: 0 15px;
  }
`;

export default Container;
