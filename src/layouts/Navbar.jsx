import React, { useState } from "react";
import {
  Image,
  Container,
  FlexWrapper,
  NavbarText,
  TextBase,
  Button,
} from "components";

import styled from "styled-components";
import { teal, white, lightGreenBackground, black } from "styles/colors";
import { useQuery } from "styles/breakpoints";
import NavigationItems from "./NavBarNavigationItems";

const Navbar = () => {
  const { isTablet, isSmMobile } = useQuery();

  window.onscroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementsByClassName("navbar")[0].style.background = white;
    } else {
      document.getElementsByClassName("navbar")[0].style.background =
        lightGreenBackground;
    }
  };

  const [isShown, setIsShown] = useState(false);

  const showNavigationItems = () => {
    setIsShown(!isShown);
  };

  console.log(isSmMobile);

  return (
    <Wrapper className="navbar">
      <Container>
        <FlexWrapper alignItems="center">
          <Image src="np_logo" />
          {isTablet ? (
            <FlexWrapper margin="0 0 0 auto" alignItems="center">
              <Button
                display={isSmMobile ? "none" : "inline-block"}
                background={teal}
              >
                <TextBase fontSize="0.75rem" color={white}>
                  Open Vault
                </TextBase>
              </Button>
              <BarContainer onClick={showNavigationItems}>
                <Bar1 />
                <Bar2 />
                <Bar3 />
              </BarContainer>
            </FlexWrapper>
          ) : (
            <FlexWrapper margin="0 0 0 auto" alignItems="center">
              <NavbarText>Features</NavbarText>
              <NavbarText margin="0 1.5rem">Pricing</NavbarText>
              <NavbarText>Apps</NavbarText>
              <NavbarText margin="0 1.5rem">Blog</NavbarText>
              <NavbarText>Help</NavbarText>
              <NavbarText color={teal} margin="0 1.5rem">
                My Account
              </NavbarText>

              <Button background={teal}>
                <TextBase fontSize="0.75rem" color={white}>
                  Open Vault
                </TextBase>
              </Button>
            </FlexWrapper>
          )}
        </FlexWrapper>
        {isShown && isTablet ? <NavigationItems /> : ""}
      </Container>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 0.75rem 0;
  transition: all 0.3s ease;
  z-index: 100;
`;

export const BarContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 0 0 0 2rem;
`;

export const Bar1 = styled.div`
  width: 1.875rem;
  height: 0.188rem;
  background-color: ${black};
  margin: 0.375rem 0;
`;

export const Bar2 = styled(Bar1)``;

export const Bar3 = styled(Bar1)``;
