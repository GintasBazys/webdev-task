import styled from "styled-components";
import { grey, white } from "styles/colors";

export const CustomSelect = styled.select`
  margin: 0 0 0 auto;
  width: ${({ width }) => width || "14rem"};
  border: 1px solid ${grey};
  border-radius: 3px;
  height: 2.625rem;
  background: ${white};
  padding: 0 2.5rem 0 1rem;
  appearance: none;
  position: relative;
  cursor: pointer;
`;
