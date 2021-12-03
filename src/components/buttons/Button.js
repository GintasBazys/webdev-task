import styled from "styled-components";
import { white } from "styles/colors";

export const Button = styled.button`
  display: ${({ display }) => display || "inline-block"};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || "0.8rem 1.5rem"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color || white};
  background: ${({ background }) => background || "transparent"};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "0.125rem"};
  cursor: pointer;
`;
