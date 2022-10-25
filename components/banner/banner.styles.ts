import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  background: linear-gradient(102.87deg, #fceed5 6.43%, #fceed5 78.33%, #ffe7ba 104.24%);
  height: 695px;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    height: fit-content;
  }
`;
export const BannerBox = styled.div`
  padding-top: 100px;
  position: relative;
  max-width: 1180px;
  margin: 0px auto;
  height: 100%;
  > h1 {
    font-weight: 800;
    font-size: 60px;
    line-height: 68px;
    /* identical to box height, or 113% */

    text-transform: capitalize;

    /* Primary Color/Dark Blue 80 */

    color: #002a48;
    margin-bottom: 4px;
  }
  > h3 {
    font-weight: 700;
    font-size: 46px;
    line-height: 60px;
    /* identical to box height, or 130% */

    text-transform: capitalize;

    /* Primary Color/Dark Blue 80 */

    color: #002a48;
    margin-bottom: 24px;
  }
  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    /* Neutral Color/80 */

    color: #242b33;
    margin-bottom: 34px;
    max-width: 480px;
  }
  @media screen and (max-width: 1100px) {
    padding: 60px 15px 0px;
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
    > h1 {
      font-size: 46px;
      line-height: 60px;
      margin-bottom: 0px;
    }
    > h3 {
      margin-top: 0px;
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
    }
    > p {
      margin: auto;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  width: auto;
  display: flex;
  gap: 20px;
  margin-top: 34px;
  @media screen and (max-width: 1000px) {
    justify-content: center;
    margin-bottom: 25px;
    button {
      padding: 14px 35px;
      font-size: 16px;
    }
  }
`;

export const BannerImageBox = styled.div<{ image: string }>`
  position: absolute;
  bottom: -25%;
  right: -20%;
  width: 944px;
  height: 693px;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  z-index: 3;
  @media screen and (max-width: 1000px) {
    position: static;
    height: 400px;
    background-size: cover;
    background-position: center;
    width: auto;
    z-index: 100;
  }
`;

export const SquareOne = styled.div`
  width: 635px;
  height: 635px;
  background: #f7dba7;
  border-radius: 99px;
  transform: rotate(25.23deg);
  position: absolute;
  bottom: -40%;
  left: 55%;
  z-index: 2;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SquareTwo = styled.div`
  width: 635px;
  height: 635px;
  background: #003459;
  border-radius: 99px;
  transform: rotate(9.35deg);
  position: absolute;
  bottom: -46%;
  left: 51%;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
