import React, { useEffect } from "react";
import LazyLoad, { forceVisible } from "react-lazyload";
import styled from "styled-components";

import { images } from "utils/images";

const Img = styled.img`
  display: block;
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
`;

export const Image = ({ src, ...rest }) => {
  useEffect(() => {
    forceVisible();
  }, []);

  return !images[src] ? null : (
    <LazyLoad once>
      <picture>
        <Img src={images[src]} alt={images[src]} {...rest} />
      </picture>
    </LazyLoad>
  );
};
