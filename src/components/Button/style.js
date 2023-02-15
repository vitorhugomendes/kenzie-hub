import { Children } from "react";
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-weight: 500;
  font-size: var(--font-size-16px);
  line-height: 165%;
  padding: 10px 22px;
  color: #ffffff;

  background-color: var(--grey-3);
  border: 1px solid var(--grey-3);
  border-radius: 4px;

  :hover {
    background: var(--grey-2);
    border: 1px solid var(--grey-2);
  }

  ${({ children }) => {
    if (children == "+") {
      return css`
        padding: 0;
        font-weight: 900;
        font-size: 22px;
        width: 40px;
        height: 40px;
      `;
    }
  }}
  ${({ type }) => {
    if (type) {
      return css`
        background: var(--color-primary);
        border: 1px solid var(--color-primary);

        :hover {
          background: var(--color-primary-focus);
          border: 1px solid var(--color-primary-focus);
        }
      `;
    }
  }}
`;
