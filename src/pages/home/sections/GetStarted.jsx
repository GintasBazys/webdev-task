import React from "react";
import {
  GridWrapper,
  FlexWrapper,
  Image,
  Container,
  TextBaseBold,
  Button,
  TextBase,
  Box,
} from "components";
import { teal, white, lightGreenBackground } from "styles/colors";
import { useQuery } from "styles/breakpoints";
import styled from "styled-components";

const GetStarted = () => {
  const { isTablet, isLargeLaptop, isLaptop } = useQuery();

  return (
    <>
      <Box background={lightGreenBackground}>
        <Container padding="0 1rem" margin="0 auto">
          <GridWrapper
            padding={isTablet ? "3rem 0 0" : "6rem 0 0"}
            gap="0"
            columns={isTablet ? 1 : 2}
          >
            <FlexWrapper
              flexDirection="column"
              justifyContent="center"
              alignItems={isTablet ? "center" : "left"}
            >
              <TextBaseBold
                margin={isTablet ? "0 0 2rem" : "0 0 2.25rem"}
                fontSize={isLaptop ? "2.2rem" : "3rem"}
                textAlign={isTablet ? "center" : "left"}
              >
                Get your passwords organized
              </TextBaseBold>
              <Button
                margin={isTablet ? "0 0 2rem" : "0"}
                width="12rem"
                background={teal}
              >
                <TextBase fontSize="1.25rem" color={white}>
                  Get started
                </TextBase>
              </Button>
            </FlexWrapper>
            <ImageContainer isLargeLaptop={isLargeLaptop}>
              <Image src="np_hero_image" />
            </ImageContainer>
          </GridWrapper>
        </Container>
      </Box>
    </>
  );
};

export default GetStarted;

const ImageContainer = styled.div`
  ${({ isLargeLaptop }) => !isLargeLaptop && "margin: 0 -5.75rem 0 -2rem"};
`;
