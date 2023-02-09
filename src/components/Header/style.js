import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  ${({ children }) => {
    if (!children[1]) {
      return css`
        justify-content: center;
      `;
    }
  }}

  @media (min-width: 750px) {
    margin: 0 100px;
  }
`;
