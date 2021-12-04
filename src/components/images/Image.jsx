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

  transition: transform 0.4s;
  &:hover {
    transform: scale(1.25);
  }
`;

export const Image = ({ src }) => {
  useEffect(() => {
    forceVisible(); //Forces the component to display regardless of whether the element is visible in the viewport.
  }, []);

  return !images[src] ? null : (
    <LazyLoad once>
      <picture>
        <Img src={images[src]} alt={images[src]} />
      </picture>
    </LazyLoad>
  );
};
