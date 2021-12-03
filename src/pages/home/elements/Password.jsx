import React from "react";
import styled from "styled-components";
import { FlexWrapper, TextBase, TextBaseBold } from "components";
import { lightGrey } from "styles/colors";

const Password = ({ value, count }) => {
  return (
    <li>
      <FlexWrapper>
        <TextBaseBold margin="0 0 0 1.75rem">{value}</TextBaseBold>
        <TextBase margin="0 0 0 auto">{count}</TextBase>
      </FlexWrapper>
      <Line />
    </li>
  );
};

export default Password;

const Line = styled.div`
  width: 100%;
  background: ${lightGrey};
  height: 1px;
  margin: 1.5rem 0;
`;
