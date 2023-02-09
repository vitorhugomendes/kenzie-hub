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

  ${({ children }) => {
    if (children == "Cadastre-se") {
      return css`
        margin: 0 1rem;

        background: var(--grey-1);
        border: 1px solid var(--grey-1);

        :hover {
          background: var(--grey-2);
          border: 1px solid var(--grey-2);
        }
      `;
    }
  }}
`;
