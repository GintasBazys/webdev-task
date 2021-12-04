import React from "react";

import { ContainerSmall, Image, TextBase, Button } from "components";
import { teal, white } from "styles/colors";
import { navigate } from "gatsby-link";

const Page404 = () => {
  return (
    <ContainerSmall>
      <TextBase fontSize="2rem" textAlign="center" margin="2rem 0">
        Page not found!
      </TextBase>
      <Image src="np_form_image" />
      <Button
        onClick={() => navigate(-1)}
        display="block"
        margin="3rem auto"
        background={teal}
      >
        <TextBase fontSize="0.75rem" color={white}>
          Go back!
        </TextBase>
      </Button>
    </ContainerSmall>
  );
};

export default Page404;
