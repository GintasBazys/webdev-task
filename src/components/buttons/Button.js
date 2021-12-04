import styled from "styled-components";
import { white } from "styles/colors";

export const Button = styled.button`
  display: ${({ display }) => display || "inline-block"};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || "0.8rem 1.5rem"};
  width: ${({ width }) => width || ""};
  color: ${({ color }) => color || white};
  background: ${({ background }) => background || "transparent"};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "0.125rem"};
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0.25rem 1rem 0 rgba(49, 196, 190, 0.75);
  }
`;
