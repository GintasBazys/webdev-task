import styled from "styled-components";
import { black } from "styles/colors";

export const TextBase = styled.p`
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  font-family: ${({ fontFamily }) => fontFamily || "Gordita"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  color: ${({ color }) => color || black};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
`;

export const TextBaseBold = styled(TextBase).attrs(({ fontWeight }) => ({
  fontWeight: fontWeight || 700,
}))``;

export const NavbarText = styled(TextBase).attrs(({ fontSize }) => ({
  fontSize: "0.875rem",
}))``;
