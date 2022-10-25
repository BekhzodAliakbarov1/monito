import styled from 'styled-components';

export const PetsContainerWrapper = styled.div`
  width: auto;
  margin: 60px 0px;
  > button {
    display: none;
  }
  @media screen and (max-width: 750px) {
    > button {
      width: 100%;
      display: block;
    }
  }
`;

export const PetsContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    padding: 12px 28px;
  }
  @media screen and (max-width: 750px) {
    button {
      display: none;
    }
  }
`;

export const PetsContainerHeaderTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 4px;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;

    color: #003459;
  }
  @media screen and (max-width: 950px) {
    h3 {
      font-size: 14px;
      line-height: 20px;
    }
    h2 {
      font-size: 20px;
      line-height: 32px;
    }
  }
`;

export const PetsContainerDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
  @media screen and (max-width: 950px) {
    gap: 12px;
  }
`;
