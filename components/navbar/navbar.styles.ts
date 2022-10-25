import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 50%;
  z-index: 100;
  background-color: #fbeed4;
  transform: translateX(-50%);
  > div {
    max-width: 1180px;
    margin: auto;
  }
`;

export const NavbarBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;
  @media screen and (max-width: 1100px) {
    padding: 30px 15px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavbarLeftContent = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 48px;
  @media screen and (max-width: 1100px) {
    gap: 24px;
  }
`;

export const LinksWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 48px;
  > a {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #003459;
    text-decoration: none;
  }
  @media screen and (max-width: 1100px) {
    gap: 24px;
    > a {
      font-size: 12px;
    }
  }
`;

export const NavbarRightcontent = styled.div`
  width: fit-content;
  display: flex;
  gap: 14px;
  @media screen and (max-width: 1100px) {
    gap: 8px;
  }
`;
export const SearchInputWrapper = styled.div`
  width: 280px;
  @media screen and (max-width: 1100px) {
    max-width: 200px;
  }
`;

export const NavbarMobileBox = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MobileNavbarLinks = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 20px;
    background-color: white;
    > a {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #003459;
      text-decoration: none;
    }
  }
`;
