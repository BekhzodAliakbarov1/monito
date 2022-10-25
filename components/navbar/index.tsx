import Image from 'next/image';
import React, { useState } from 'react';
import {
  LinksWrapper,
  MobileNavbarLinks,
  NavbarBox,
  NavbarLeftContent,
  NavbarMobileBox,
  NavbarRightcontent,
  NavbarWrapper,
  SearchInputWrapper,
} from './navbar.styles';
import image from 'public/images/logo.png';
import Link from 'next/link';
import SearchIcon from 'components/icons/search.icon';
import { Collapse, Input } from '@mantine/core';
import StyledButton from 'components/button';
import MenuIcon from 'components/icons/menu.icon';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavbarWrapper>
        <div>
          <NavbarBox>
            <NavbarLeftContent>
              <img src={image.src} width="115px" />
              <LinksWrapper>
                <Link href="/">Home</Link>
                <Link href="/">Category</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
              </LinksWrapper>
            </NavbarLeftContent>
            <NavbarRightcontent>
              <SearchInputWrapper>
                <Input
                  icon={<SearchIcon />}
                  placeholder="Search something here!"
                  radius={46}
                  size="md"
                  sx={{
                    '.mantine-Input-wrapper': {
                      width: '100%',
                    },
                  }}
                />
              </SearchInputWrapper>
              <StyledButton>Join the community</StyledButton>
            </NavbarRightcontent>
          </NavbarBox>
          <NavbarMobileBox>
            <div onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </div>
            <img width="92px" height="32px" src={image.src} />
            <SearchIcon size="25" />
          </NavbarMobileBox>
        </div>
      </NavbarWrapper>

      <Collapse
        sx={{ position: 'absolute', width: '100%' }}
        in={false}
        transitionTimingFunction="linear"
      >
        <MobileNavbarLinks>
          <Link href="/">Home</Link>
          <Link href="/">Category</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </MobileNavbarLinks>
      </Collapse>
    </>
  );
};

export default NavbarComponent;
