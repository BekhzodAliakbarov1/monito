import styled from 'styled-components';

export const ProductsCardWrapper = styled.div`
  max-width: 280px;
  width: auto;
  padding: 8px;
  background: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease;
  :hover {
    box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.15);
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 264px;
  height: 264px;
  position: relative;
  img {
    object-fit: cover;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const ProductsCardTextBox = styled.div`
  padding: 8px;
  > h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    display: flex;
    align-items: flex-end;

    /* Neutral Color/100 */

    color: #00171f;
    margin-bottom: 4px;
  }
  > h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #00171f;
    margin-bottom: 10px;
  }
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > h3 {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #667479;
    span {
      font-weight: 700;
    }
  }
  > div {
    width: 12px;
    height: 12px;
    position: relative;
    ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2px;
      width: 2px;
      border-radius: 50%;
      background-color: #667479;
    }
  }
`;

export const ProductPrizeWrapper = styled.div`
  background: #fceed5;
  border-radius: 8px;
  width: 100%;
  display: flex;
  margin-top: auto;
  padding: 8px 10px;
  gap: 2px;
  align-items: center;
  > h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: flex-end;

    /* Primary Color/Dark Blue 80 */

    color: #002a48;
  }
  > div {
    width: 20px;
    height: 24px;
    display: block;
    position: relative;
    ::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #002a48;
    }
  }
`;
