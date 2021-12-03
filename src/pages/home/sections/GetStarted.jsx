import React from "react";
import {
  GridWrapper,
  FlexWrapper,
  Image,
  Container,
  TextBaseBold,
  Button,
  TextBase,
} from "components";
import { teal, white } from "styles/colors";

const GetStarted = () => {
  return (
    <>
      <Container margin="6rem auto 0">
        <GridWrapper columns={2}>
          <FlexWrapper flexDirection="column" justifyContent="center">
            <TextBaseBold
              margin="2rem 0 2.25rem"
              fontSize="3rem"
              textAlign="left"
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
    </>
  );
};

export default GetStarted;
