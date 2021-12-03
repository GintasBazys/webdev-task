import React from "react";
import { Box, FlexWrapper, Container, TextBase } from "components";
import { white, grey, darkestGrey, darkGrey } from "styles/colors";

const Footer = () => {
  return (
    <Box background={white}>
      <Container>
        <FlexWrapper margin="6rem 0 4.5rem">
          <FlexWrapper flexDirection="column">
            <TextBase fontSize="0.75rem" color={grey}>
              ENGAGE
            </TextBase>
            <TextBase
              margin="1rem 0 0.75rem"
              color={darkestGrey}
              fontSize="0.75rem"
            >
              Privacy Policy
            </TextBase>
            <TextBase color={darkestGrey} fontSize="0.75rem">
              Terms of Service
            </TextBase>
          </FlexWrapper>
          <FlexWrapper
            color={darkGrey}
            fontSize="0.625rem"
            alignItems="end"
            textAlign="end"
            margin="0 0 0 auto"
          >
            Copyright © 2020 NordPass.com{" "}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Box>
  );
};

export default Footer;
