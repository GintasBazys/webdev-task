import styled from "styled-components";

export const ContainerSmall = styled.div`
  position: ${({ position }) => position || "relative"};
  display: block;
  max-width: ${({ maxWidth }) => maxWidth || "49.5rem"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || ""};
  padding: 0 1rem;
`;
