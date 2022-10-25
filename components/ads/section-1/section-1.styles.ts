import styled from 'styled-components';

export const SectionOneAdWrapper = styled.div`
  width: 100%;
  margin-bottom: 60px;
  background: #003459;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0px 85px;
  overflow: hidden;
  position: relative;
  align-items: flex-end;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 0px 21px;
    align-items: center;
  }
`;

export const SectionOneAdLeftContent = styled.div`
  height: 342px;
  position: relative;
  margin-left: -10%;
  z-index: 3;
  display: flex;
  @media screen and (max-width: 900px) {
    height: auto;
    width: 504px;
    margin-left: 0px;
  }
`;

export const SectionOneAdRightContent = styled.div`
  max-width: 413px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  > h1 {
    font-weight: 800;
    font-size: 52px;
    line-height: 68px;
    text-transform: capitalize;
    color: #003459;
    margin-bottom: 2px;
    text-align: right;
  }
  > h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-transform: capitalize;
    color: #003459;
    margin-bottom: 8px;
  }
  > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #242b33;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    align-items: center;
    text-align: center;
    > h1 {
      margin-top: 50px;
      font-size: 36px;
      line-height: 54px;
      text-align: center;
    }
    > h2 {
      font-size: 24px;
      line-height: 36px;
    }
    > p {
      font-size: 12px;
      line-height: 18px;
      text-align: center;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 20px;
  margin-bottom: 56px;
`;

export const SquareOne = styled.div`
  position: absolute;
  width: 782.29px;
  height: 635px;

  background: #fceed5;
  border-radius: 99px;
  transform: rotate(25.23deg);
  z-index: 1;
  right: -16%;
  top: -70%;
  @media screen and (max-width: 900px) {
    right: 0%;
    top: -45%;
    transform: rotate(11.41deg);
  }
  @media screen and (max-width: 750px) {
    right: -8%;
    top: -45%;
  }
  @media screen and (max-width: 550px) {
    right: -18%;
    top: -40%;
  }
`;
