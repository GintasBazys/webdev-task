import styled from "styled-components";

export const Box = styled.div`
  position: ${({ position }) => position || ""};
  bottom: ${({ bottom }) => bottom || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  min-height: ${({ minHeight }) => minHeight || ""};
  max-height: ${({ maxHeight }) => maxHeight || ""};
  width: ${({ width }) => width || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  background: ${({ background }) => background || ""};
  border: ${({ border }) => border || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  text-align: ${({ textAlign }) => textAlign || ""};
`;
