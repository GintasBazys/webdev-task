import styled from "styled-components";

export const Container = styled.div`
  position: ${({ position }) => position || "relative"};
  display: block;
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "0 1rem"};
  max-width: ${({ maxWidth }) => maxWidth || "72.875rem"};
`;
