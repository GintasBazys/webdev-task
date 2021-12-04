import React from "react";

import { FlexWrapper, Box, TextBase, Button } from "components";
import { white, teal } from "styles/colors";

import styled from "styled-components";
import { useQuery } from "styles/breakpoints";

const NavigationItems = () => {
  const { isSmMobile } = useQuery();

  return (
    <NavigationItemsBox>
      <Box background={white}>
        <FlexWrapper flexDirection="column" alignItems="center">
          <TextBase cursor="pointer" margin="0.5rem 0 0">
            Features
          </TextBase>
          <TextBase cursor="pointer" margin="0.5rem 0">
            Pricing
          </TextBase>
          <TextBase cursor="pointer">Apps</TextBase>
          <TextBase cursor="pointer" margin="0.5rem 0">
            Blog
          </TextBase>
          <TextBase cursor="pointer">Help</TextBase>
          <TextBase cursor="pointer" color={teal} margin="0.5rem 0">
            My Account
          </TextBase>
          {isSmMobile && (
            <Button margin="0 0 1rem" background={teal}>
              <TextBase fontSize="0.75rem" color={white}>
                Open Vault
              </TextBase>
            </Button>
          )}
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
