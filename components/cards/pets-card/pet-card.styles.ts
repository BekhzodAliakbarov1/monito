import styled from 'styled-components';

export const PetsCardWrapper = styled.div`
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
    /* height: 400px; */
  }
`;

export const PetsCardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  > h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: #00171f;
  }
  > h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #00171f;
    margin-bottom: 12px;
  }
  > div {
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
  }
`;
