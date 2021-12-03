import React from "react";
import styled from "styled-components";

import { FlexWrapper, Image, TextBase } from "components";

export const CollapsibleItem = ({
  children,
  title,
  isSelected = false,
  onClick,
}) => (
  <>
    <FlexWrapperStyled selected={isSelected} onClick={onClick}>
      <TextBase fontSize="1rem" fontWeight={700}>
        {title}
      </TextBase>
      <IconArrow>
        <Image src="expand_more" />
      </IconArrow>
    </FlexWrapperStyled>
    {isSelected && (
      <TextBase fontWeight={400} margin="1rem 0 0">
        {children}
      </TextBase>
    )}
  </>
);

const IconArrow = styled.div`
  position: relative;
  margin-left: auto;
  transform: rotate(0deg);

  transition: transform 0.2s;
`;

const FlexWrapperStyled = styled(FlexWrapper)`
  cursor: pointer;

  ${IconArrow} {
    ${({ selected }) => selected && `transform: rotate(180deg);`};
  }
`;
