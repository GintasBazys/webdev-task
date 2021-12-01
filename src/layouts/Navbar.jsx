import React from "react";
import { Image, Container, FlexWrapper, TextBase } from "components";

import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <FlexWrapper>
          <Image src="np_logo" />
          <FlexWrapper margin="0 0 0 auto" alignItems="center">
            <TextBase>Features</TextBase>
            <TextBase>Pricing</TextBase>
            <TextBase>Apps</TextBase>
            <TextBase>Blog</TextBase>
            <TextBase>Help</TextBase>
            <TextBase>My Account</TextBase>
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
