import styled from "styled-components";
import { grey } from "styles/colors";

export const CustomSelect = styled.select`
  margin: 0 0 0 auto;
  width: ${({ width }) => width || "14rem"};
  border: 1px solid ${grey};
  box-sizing: border-box;
  border-radius: 3px;
  height: 2.625rem;
`;
