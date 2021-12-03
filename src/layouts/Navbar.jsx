import React from "react";
import {
  Image,
  Container,
  FlexWrapper,
  NavbarText,
  TextBase,
  Button,
} from "components";

import styled from "styled-components";
import { teal, white, lightGreenBackground } from "styles/colors";

const Navbar = () => {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementsByClassName("navbar")[0].style.background = white;
      // document.getElementsByClassName("navbar")[0].style.boxShadow =
      //   "0rem 0.5rem 1.5rem rgba(0, 0, 0, 0.04)";
    } else {
      document.getElementsByClassName("navbar")[0].style.background =
        lightGreenBackground;
    }
  };

  return (
    <Wrapper className="navbar">
      <Container>
        <FlexWrapper alignItems="center">
          <Image src="np_logo" />
          <FlexWrapper margin="0 0 0 auto" alignItems="center">
            <NavbarText></NavbarText>
            <NavbarText margin="0 1.5rem">Pricing</NavbarText>
            <NavbarText>Apps</NavbarText>
            <NavbarText margin="0 1.5rem">Blog</NavbarText>
            <NavbarText>Help</NavbarText>
            <NavbarText color={teal} margin="0 1.5rem">
              My Account
            </NavbarText>
            <FlexWrapper>
              <Button background={teal}>
                <TextBase fontSize="0.75rem" color={white}>
                  Open Vault
                </TextBase>
              </Button>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 0.75rem 0;
  transition: 0.4s;
  z-index: 100;
`;
