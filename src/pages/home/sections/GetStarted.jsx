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

const GetStarted = () => {
  const { isTablet, isSmMobile } = useQuery();

  return (
    <>
      <Box background={lightGreenBackground}>
        <Container margin="0 auto">
          <GridWrapper padding="6rem 0 0" columns={isTablet ? 1 : 2}>
            <FlexWrapper
              flexDirection="column"
              justifyContent="center"
              alignItems={isTablet ? "center" : "left"}
            >
              <TextBaseBold
                margin="2rem 0 2.25rem"
                fontSize={isSmMobile ? "2rem" : "3rem"}
                textAlign={isTablet ? "center" : "left"}
              >
                Get your passwords organized
              </TextBaseBold>
              <Button width="12rem" background={teal}>
                <TextBase fontSize="1.25rem" color={white}>
                  Get started
                </TextBase>
              </Button>
            </FlexWrapper>
            <FlexWrapper>
              <Image src="np_hero_image" />
            </FlexWrapper>
          </GridWrapper>
        </Container>
      </Box>
    </>
  );
};

export default GetStarted;
