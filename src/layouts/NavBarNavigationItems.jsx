import React from "react";

import { FlexWrapper, Box, TextBase } from "components";
import { white, teal } from "styles/colors";

import styled from "styled-components";

const NavigationItems = () => {
  return (
    <NavigationItemsBox>
      <Box background={white}>
        <FlexWrapper flexDirection="column" alignItems="center">
          <TextBase cursor="cursor" margin="0.5rem 0 0">
            Features
          </TextBase>
          <TextBase cursor="cursor" margin="0.5rem 0">
            Pricing
          </TextBase>
          <TextBase cursor="cursor">Apps</TextBase>
          <TextBase cursor="cursor" margin="0.5rem 0">
            Blog
          </TextBase>
          <TextBase cursor="cursor">Help</TextBase>
          <TextBase cursor="cursor" color={teal} margin="0.5rem 0">
            My Account
          </TextBase>
        </FlexWrapper>
      </Box>
    </NavigationItemsBox>
  );
};

const NavigationItemsBox = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  z-index: 1000;
`;

export default NavigationItems;
