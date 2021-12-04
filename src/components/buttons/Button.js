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
  transition: all 0.5s ease-in;

  &:hover {
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
`;
