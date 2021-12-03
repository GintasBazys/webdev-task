import React from "react";
import styled from "styled-components";

import { FlexWrapper, Image, TextBase } from "components";
import { darkGrey } from "styles/colors";

export const CollapsibleItem = ({
  description,
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
      <TextBase color={darkGrey} margin="1rem 0 0">
        {description}
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
  align-items: center;
  ${IconArrow} {
    ${({ selected }) => selected && `transform: rotate(180deg);`};
  }
`;
