import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap }) => gap || "1rem"};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-items: ${({ justifyItems }) => justifyItems || ""};
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
`;
