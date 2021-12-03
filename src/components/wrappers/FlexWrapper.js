import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  min-width: ${({ minWidth }) => minWidth || ""};
  flex-wrap: ${({ wrap }) => wrap || ""};
`;
