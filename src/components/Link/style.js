import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const StyledLink = styled(LinkRouter)`
  font-weight: 500;
  font-size: var(--font-size-16px);
  line-height: 165%;
  padding: 10px 22px;
  color: #ffffff;
  text-decoration: none;
  text-align: center;

  background-color: var(--grey-3);
  border: 1px solid var(--grey-3);
  border-radius: 4px;

  :hover {
    background: var(--grey-2);
    border: 1px solid var(--grey-2);
  }

  ${({ children }) => {
    if (children == "Cadastre-se") {
      return css`
        margin: 0 1rem;

        background: var(--grey-1);
        border: 1px solid var(--grey-1);
      `;
    }
  }}
`;
