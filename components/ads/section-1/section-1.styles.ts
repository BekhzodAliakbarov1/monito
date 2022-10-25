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
`;

export const SectionOneAdLeftContent = styled.div`
  height: 342px;
  position: relative;
  margin-left: -10%;
`;

export const SectionOneAdRightContent = styled.div`
  width: 50%;
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
`;
