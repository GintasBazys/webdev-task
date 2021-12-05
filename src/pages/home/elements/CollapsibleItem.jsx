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
    <FlexWrapperStyled onClick={onClick}>
      <TextBase fontSize="1rem" fontWeight={700}>
        {title}
      </TextBase>
      <IconArrow selected={isSelected}>
        <Image src="expand_more" />
      </IconArrow>
    </FlexWrapperStyled>
    <TextBase
      style={{ display: isSelected ? "block" : "none" }}
      className={"description"}
      lineHeight="1.5rem"
      color={darkGrey}
      margin="1rem 0 0.625rem"
      padding="0 4.25rem 0 0"
    >
      {description}
    </TextBase>
  </>
);

const IconArrow = styled.div`
  position: relative;
  margin-left: auto;
  transform: rotate(0deg);

  transition: transform 0.2s;

  ${({ selected }) => selected && `transform: rotate(180deg);`};
`;

const FlexWrapperStyled = styled(FlexWrapper)`
  cursor: pointer;
  align-items: center;
`;
