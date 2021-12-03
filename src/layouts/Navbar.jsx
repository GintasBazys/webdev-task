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
import { teal, white } from "styles/colors";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <FlexWrapper alignItems="center">
          <Image src="np_logo" />
          <FlexWrapper margin="0 0 0 auto" alignItems="center">
            <NavbarText>Features</NavbarText>
            <NavbarText margin="0 1.5rem">Pricing</NavbarText>
            <NavbarText>Apps</NavbarText>
            <NavbarText margin="0 1.5rem">Blog</NavbarText>
            <NavbarText>Help</NavbarText>
            <NavbarText color={teal} margin="0 1.5rem">
              My Account
            </NavbarText>
            <FlexWrapper>
              <Button background={teal} width="6.25rem">
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
  box-shadow: 0rem 0.5rem 1.5rem rgba(0, 0, 0, 0.04);
  z-index: 100;
`;
