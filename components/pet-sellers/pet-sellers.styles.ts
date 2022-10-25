import styled from 'styled-components';

export const PetSellerWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PetSellerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 16px;
    line-height: 31px;
    /* identical to box height, or 194% */

    display: flex;
    align-items: flex-end;

    color: #000000;
    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      /* identical to box height, or 150% */

      display: flex;
      align-items: flex-end;
      text-transform: capitalize;

      /* Primary Color/Dark Blue */

      color: #003459;
      margin-left: 8px;
    }
  }
  button {
    padding: 12px 28px;
  }
  @media screen and (max-width: 620px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    button {
      display: none;
    }
    h2 {
      font-size: 14px;
      line-height: 24px;
      span {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
`;

export const SwiperWrapper = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  /* .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`;

export const SwiperItem = styled.div`
  width: 151.43px;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 65%;
  }
`;
